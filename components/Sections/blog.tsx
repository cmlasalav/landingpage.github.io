import axios from "axios";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Post from "../BlogComponents/Post";
import NoData from "../Parts/NoData";

const BlogURL = `${process.env.NEXT_PUBLIC_API_URL}/blog`;

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(BlogURL);
        if (response.status === 201) {
          const datePosts = response.data.sort(
            (a: { PostDate: string }, b: { PostDate: string }) =>
              new Date(b.PostDate).getTime() - new Date(a.PostDate).getTime()
          );
          setPosts(datePosts);
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    getPosts();
  }, []);

  return (
    <section id="Blog" className="max-w-7xl py-8 px-4 ml-10">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 ">
          <span className="text-[#76829e]">Blog</span>
          <span className="text-black">/News</span>
        </h1>
        <p className="text-gray-600 max-w-2xl">
          <FormattedMessage
            id="blog.paragraph"
            defaultMessage="Explore our latest insights on industry trends, management strategies, and success stories to stay informed and inspired."
          />
        </p>
      </div>
      <NoData data={posts} messageLoading="loading.post" />
      <Post post={posts} />
    </section>
  );
}
