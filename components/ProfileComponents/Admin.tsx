import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FormattedMessage, FormattedDate } from "react-intl";
import { useToast } from "context/toastContext";
import NoData from "../Parts/NoData";
import AuthorName from "@components/Parts/Author";

const BlogURL = process.env.NEXT_PUBLIC_API_URL;
const itemsPage = 4;

export default function Admin() {
  //Sections States
  const [posts, setPosts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [comments, setComments] = useState([]);

  //Toast Message
  const { showToast } = useToast();

  //More Page
  const [morePosts, setMorePosts] = useState([]);
  const [moreTestimonials, setMoreTestimonials] = useState([]);
  const [moreComments, setMoreComments] = useState([]);
  const [currentPage, setCurrentPage] = useState({
    posts: 1,
    testimonials: 1,
    comments: 1,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${BlogURL}/admin`, {
          withCredentials: true,
        });
        //Post
        setPosts(response.data.blog);
        setMorePosts(response.data.blog.slice(0, itemsPage));
        //Testimonials
        setTestimonials(response.data.testimonials);
        setMoreTestimonials(response.data.testimonials.slice(0, itemsPage));
        //Comments
        setComments(response.data.comments);
        setMoreComments(response.data.comments.slice(0, itemsPage));
      } catch (error) {
        showToast({ message: "general.error", typeMessage: "error" });
      }
    };

    getData();
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
        const newPosts = posts.slice(startIndex, endIndex);
        setMorePosts([...morePosts, ...newPosts]);
        break;
      case "testimonials":
        const newTestimonials = testimonials.slice(startIndex, endIndex);
        setMoreTestimonials([...moreTestimonials, ...newTestimonials]);
        break;
      case "comments":
        const newComments = comments.slice(startIndex, endIndex);
        setMoreComments([...moreComments, ...newComments]);
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
            id="profile.post.admin.title"
            defaultMessage="Posts by Other Users"
          />
        </h2>
        {morePosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {morePosts.map((post) => (
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
            {posts.length > morePosts.length && (
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
          <NoData data={posts} messageLoading="loading.post" />
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          <FormattedMessage
            id="profile.testimonials.admin.title"
            defaultMessage="Testimonials from Other Users"
          />
        </h2>
        {moreTestimonials.length > 0 ? (
          <>
            <div className="space-y-4">
              {moreTestimonials.map((testimonial) => (
                <div
                  key={testimonial._id}
                  className="bg-white shadow rounded-lg p-4"
                >
                  <p className="italic">"{testimonial.TestimonialBody}"</p>
                  <p className="text-sm text-gray-600 mt-2">
                    - {testimonial.Author} {/*Author component */}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <FormattedDate
                      value={testimonial.TestimonialDate}
                      year="numeric"
                      month="long"
                      day="numeric"
                      weekday="long"
                    />
                  </p>
                </div>
              ))}
            </div>
            {testimonials.length > moreTestimonials.length && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => loadMore("testimonials")}
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
          <NoData data={testimonials} messageLoading="loading.testimonial" />
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          <FormattedMessage
            id="profile.comment.admin.title"
            defaultMessage="Comments by Other Users"
          />
        </h2>
        {moreComments.length > 0 ? (
          <>
            <div className="space-y-4">
              {moreComments.map((comment) => (
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
            {comments.length > moreComments.length && (
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
          <NoData data={comments} messageLoading="loading.comment" />
        )}
      </section>
    </div>
  );
}
