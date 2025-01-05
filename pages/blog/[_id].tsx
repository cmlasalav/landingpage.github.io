import axios from "axios";
import Image from "next/image";
import { FormattedDate, FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import AuthorName from "@components/Parts/Author";
import Comment from "@components/BlogComponents/CommentComponents/Comment";
import Footer from "@components/Layout/Footer";
import Loader from "@components/Parts/Loader";

export default function PostId() {
  const [post, setPost] = useState(null);
  const [loader, setLoader] = useState(true);
  const router = useRouter();
  const { _id } = router.query;

  useEffect(() => {
    if (!router.isReady || !_id) return;
    const getPostId = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/blog/${_id}`,
          {
            withCredentials: true,
          }
        );
        if (response.status === 201) {
          setPost(response.data);
          setLoader(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    getPostId();
  }, [_id]);

  if (loader) {
    return <Loader duration={3000} />;
  }

  if (!post) {
    return router.push("/404");
  }

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          ></motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {post.PostTitle}
          </h1>

          {/* Author and Meta Information */}
          <div>
            <p className="font-medium text-gray-900">
              <AuthorName authorToken={post.Author} />
            </p>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <span>
                {
                  <FormattedDate
                    value={post.PostDate}
                    year="numeric"
                    month="long"
                    day="numeric"
                    weekday="long"
                  />
                }
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-auto mb-8 rounded-xl overflow-hidden">
          {post.PostBody?.map((content, index) => (
            <div key={index} className="mb-6">
              {content.contentType === "text" ? (
                <p className="text-base text-gray-700">{content.contentBody}</p>
              ) : content.contentType === "image" ? (
                <div className="relative w-full h-64 sm:h-96">
                  <Image
                    src={content.contentBody}
                    alt={`Content image ${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              ) : (
                <p className="text-red-500">Unknown content type</p>
              )}
            </div>
          ))}
        </div>

        <Comment postId={post._id} />
      </motion.article>
      <Footer />
    </>
  );
}
