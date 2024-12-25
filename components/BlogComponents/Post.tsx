import { FormattedDate, FormattedMessage } from "react-intl";
import PostVisibility from "../BlogComponents/PostVisibility";
import LatestPost from "./LatestPost";
import { useState, useEffect } from "react";

export default function Post({
  post,
  user,
  onNewPost,
  onReadMore,
  isVisible,
  setErrorModal,
  setModalMessage,
  setConfirm,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const firstParagraph = (postBody) => {
    for (const content of postBody) {
      if (typeof content === "string") {
        return <p>{content}</p>;
      }
      if (typeof content === "object" && content.contentType === "text") {
        return <p>{content.contentBody}</p>;
      }
    }
    return null;
  };

  const latestPosts = post.slice(0, 3);
  const mainPosts = post.slice(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((current) =>
          current === mainPosts.length - 1 ? 0 : current + 1
        );
        setIsTransitioning(false);
      }, 500); // Wait for fade out before changing post
    }, 5000); // Change post every 5 seconds

    return () => clearInterval(timer);
  }, [mainPosts.length]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2">
        {mainPosts.length > 0 && (
          <div
            className={`transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {(() => {
              const post = mainPosts[currentIndex];
              const firstImage = post.PostBody.find(
                (content) =>
                  typeof content === "object" && content.contentType === "image"
              );
              return (
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="aspect-[16/9] bg-gray-200">
                    {firstImage ? (
                      <img
                        src={firstImage.contentBody}
                        alt={post.PostTitle}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200" />
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">
                      {post.PostTitle}
                    </h2>
                    <div className="text-gray-600 mb-4">
                      {firstParagraph(post.PostBody)}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <p className="text-sm text-gray-500">
                          <FormattedDate
                            value={post.PostDate}
                            year="numeric"
                            month="short"
                            day="numeric"
                          />
                        </p>
                        <div className="flex items-center space-x-2">
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => onReadMore(post._id, user)}
                        className="text-[#0d98e2] border border-[#0d98e2] px-4 py-2 rounded-full hover:bg-[#0d98e2] hover:text-white transition-colors"
                      >
                        <FormattedMessage
                          id="blog.button"
                          defaultMessage="Read more"
                        />
                      </button>
                    </div>
                    {isVisible && (
                      <PostVisibility isVisible={post.PostStatus} />
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Post Navigation Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {mainPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 500);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-[#0d98e2]" : "bg-gray-300"
              }`}
              aria-label={`Go to post ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Latest Posts Sidebar */}
      <LatestPost
        latestPosts={latestPosts}
        onReadMore={onReadMore}
        user={user}
      />
    </div>
  );
}
