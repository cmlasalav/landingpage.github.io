import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FormattedMessage, FormattedDate } from "react-intl";
import { useToast } from "context/toastContext";
import { useUserName } from "context/userContext";
import { firstParagraph, findImageUrl } from "../utils/content";
import AuthorName from "@components/Parts/Author";
import DeleteButton from "@components/Parts/DeleteButton";
import NoData from "../Parts/NoData";
import EditButton from "@components/Parts/EditButton";
import PostVisibility from "@components/Parts/PostVisibility";

const UserURL = process.env.NEXT_PUBLIC_API_URL;
const TypeUser = process.env.NEXT_PUBLIC_USER_TYPE1;
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
    const getUserData = async () => {
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

    getUserData();
  }, []);

  //#region PostComponents
  //Delete
  const handleDelete = (typeData, id) => {
    switch (typeData) {
      case "post":
        setUserPosts(userPosts.filter((post) => post._id !== id));
        setMoreUserPosts(moreUserPosts.filter((post) => post._id !== id));
        break;
      case "comments":
        setUserComments(userComments.filter((comment) => comment._id !== id));
        setMoreUserComments(
          moreUserComments.filter((comment) => comment._id !== id)
        );
        break;
    }
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
                <div key={post._id} className="relative">
                  <Link href={`/blog/${post._id}`} className="block">
                    <div
                      key={post._id}
                      className="bg-white shadow rounded-lg overflow-hidden flex flex-col"
                    >
                      <div className="relative h-64">
                        <Image
                          src={findImageUrl(post.PostBody)}
                          alt={post.PostTitle}
                          style={{ objectFit: "cover" }}
                          fill
                          priority
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
                        <PostVisibility isVisible={post.PostStatus} />
                      </div>
                    </div>
                  </Link>
                  <div className="h-8 mt-2 space-x-2">
                    <DeleteButton
                      typeData="post"
                      typeUser={TypeUser}
                      _id={post._id}
                      onDelete={() => handleDelete("post", post._id)}
                    />

                    <EditButton typeData="post" item={post} />
                  </div>
                </div>
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
                <div
                  key={comment._id}
                  className="bg-white shadow rounded-lg p-4 relative"
                >
                  <Link
                    href={`/blog/${comment.PostId}#comment-${comment._id}`}
                    className="block"
                  >
                    <div className="text-lg space-y-2">
                      <p>{comment.CommentBody}</p>
                      <p className="text-sm text-gray-600 mt-2">
                        - <AuthorName authorToken={comment.Author} />
                      </p>
                      <p className="text-sm text-gray-600">
                        <FormattedDate
                          value={comment.CommentDate}
                          year="numeric"
                          month="long"
                          day="numeric"
                          weekday="long"
                        />
                      </p>
                    </div>
                  </Link>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="h-10 relative">
                      <div className="space-x-2">
                        <DeleteButton
                          typeData="comments"
                          typeUser={TypeUser}
                          _id={comment._id}
                          onDelete={() => handleDelete("comments", comment._id)}
                        />
                        <EditButton typeData="comment" item={comment} />
                      </div>
                    </div>
                  </div>
                </div>
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
