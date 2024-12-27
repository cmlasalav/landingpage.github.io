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
      }, 500);
    }, 5000);

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
