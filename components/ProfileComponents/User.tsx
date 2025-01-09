import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FormattedMessage, FormattedDate } from "react-intl";
import { useToast } from "context/toastContext";
import AuthorName from "@components/Parts/Author";
import NoData from "../Parts/NoData";
import { useUserName } from "context/userContext";

const UserURL = process.env.NEXT_PUBLIC_API_URL;
const itemsPage = 4;

export default function UserView() {
  //userName
  const { userName } = useUserName();
  //User State
  const [userPosts, setUserPosts] = useState([]);
  const [userComments, setUserComments] = useState([]);

  //Toast Message
  const { showToast } = useToast();

  //More Page
  const [moreUserPosts, setMoreUserPosts] = useState([]);
  const [moreUserComments, setMoreUserComments] = useState([]);
  const [currentPage, setCurrentPage] = useState({
    posts: 1,
    testimonials: 1,
    comments: 1,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${UserURL}/user/info`, {
          withCredentials: true,
        });
        //User Posts
        setUserPosts(response.data.userBlog);
        setMoreUserPosts(response.data.userBlog.slice(0, itemsPage));
        //User Comments
        setUserComments(response.data.userComments);
        setMoreUserComments(response.data.userComments.slice(0, itemsPage));
      } catch (error) {
        showToast({ message: "general.error", typeMessage: "error" });
      }
    };

    fetchUserData();
  }, []);

  //#region PostComponents
  const firstParagraph = (postBody) => {
    for (const content of postBody) {
      if (typeof content === "string") {
        return <span>{content}</span>;
      }
      if (typeof content === "object" && content.contentType === "text") {
        return <span>{content.contentBody}</span>;
      }
    }
    return null;
  };

  const findImageUrl = (postBody) => {
    for (const content of postBody) {
      if (typeof content === "object" && content.contentType === "image") {
        return content.contentBody;
      }
    }
    return "/placeholder.png";
  };

  const loadMore = (section) => {
    const nextPage = currentPage[section] + 1;
    const startIndex = (nextPage - 1) * itemsPage;
    const endIndex = startIndex + itemsPage;

    switch (section) {
      case "posts":
        const newPosts = userPosts.slice(startIndex, endIndex);
        setMoreUserPosts([...moreUserPosts, ...newPosts]);
        break;
      case "comments":
        const newComments = userComments.slice(startIndex, endIndex);
        setMoreUserComments([...moreUserComments, ...newComments]);
        break;
    }

    setCurrentPage({ ...currentPage, [section]: nextPage });
  };
  //#endregion

  return (
    <div className="mt-8 space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-6">
          <FormattedMessage
            id="profile.post.title"
            defaultMessage="Posts by {userName}"
            values={{ userName }}
          />
        </h2>
        {moreUserPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {moreUserPosts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post._id}`}
                  className="block"
                >
                  <div
                    key={post._id}
                    className="bg-white shadow rounded-lg overflow-hidden flex flex-col"
                  >
                    <div className="relative h-64">
                      <Image
                        src={findImageUrl(post.PostBody)}
                        alt={post.PostTitle}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="font-semibold text-xl mb-3">
                        {post.PostTitle}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {firstParagraph(post.PostBody)}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                        <span>
                          <AuthorName authorToken={post.Author} />
                        </span>
                        <FormattedDate
                          value={new Date(post.PostDate)}
                          year="numeric"
                          month="long"
                          day="numeric"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {userPosts.length > moreUserPosts.length && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => loadMore("posts")}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  <FormattedMessage
                    id="more.button"
                    defaultMessage="Load More"
                  />
                </button>
              </div>
            )}
          </>
        ) : (
          <NoData data={userPosts} messageLoading="loading.post" />
        )}
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">
          <FormattedMessage
            id="profile.comment.title"
            defaultMessage="Comments by {userName}"
            values={{ userName }}
          />
        </h2>
        {moreUserComments.length > 0 ? (
          <>
            <div className="space-y-4">
              {moreUserComments.map((comment) => (
                <Link
                  key={comment._id}
                  href={`/blog/${comment.PostId}#comment-${comment._id}`}
                  className="block"
                >
                  <div
                    key={comment._id}
                    className="bg-white shadow rounded-lg p-4"
                  >
                    <p>{comment.CommentBody}</p>
                    <p className="text-sm text-gray-600 mt-2">
                      <AuthorName authorToken={comment.Author} />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {userComments.length > moreUserComments.length && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => loadMore("comments")}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  <FormattedMessage
                    id="more.button"
                    defaultMessage="Load More"
                  />
                </button>
              </div>
            )}
          </>
        ) : (
          <NoData data={userComments} messageLoading="loading.comment" />
        )}
      </section>
    </div>
  );
}
