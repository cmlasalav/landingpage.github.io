import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { FormattedMessage } from "react-intl";
import { useToast } from "../../../context/toastContext";
import { langContext } from "../../../context/langContext";
import { useRouter } from "next/router";
import { useUserName } from "context/userContext";
import Loader from "@components/Parts/Loader";
import PostPreview from "./PostPreview";
import LayoutComponent from "@components/Layout/LayoutComponent";

const BlogURL = process.env.NEXT_PUBLIC_API_URL;

export default function NewPost({ postSelected }) {
  //Language Context
  const { locale } = useContext(langContext);

  //UserName
  const { userName } = useUserName();

  //Router
  const router = useRouter();

  //Toast Message
  const { showToast } = useToast();

  //Post Content State
  const [bodyContent, setBodyContent] = useState("");
  //Loader State
  const [loader, setLoader] = useState(true);

  const [post, setPost] = useState({
    PostTitle: "",
    Author: userName,
    PostBody: [],
    PostStatus: true,
  });

  useEffect(() => {
    if (postSelected) {
      showToast({ message: "modal.error.postContent", typeMessage: "error" });
      setPost((prevPost) => ({
        ...prevPost,
        ...postSelected,
      }));
    }
  }, [postSelected]);

  //#region Post Components
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (postSelected) {
      try {
        const response = await axios.put(
          `${BlogURL}/blog/${postSelected._id}`,
          post,
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          showToast({ message: "modal.edit.post", typeMessage: "success" });
          router.push("/profile");
        }
      } catch (error) {
        showToast({ message: "modal.error.edit.post", typeMessage: "error" });
      }
    } else {
      try {
        const response = await axios.post(`${BlogURL}/blog`, post, {
          withCredentials: true,
        });
        if (response.status === 201) {
          showToast({
            message: "modal.confirm.newPost",
            typeMessage: "success",
          });
          router.push("/profile");
        }
      } catch (error) {
        showToast({ message: "modal.error.newPost", typeMessage: "error" });
      } finally {
        setLoader(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "visibility") {
      const isActive = value === "public";
      setPost((prevPost) => ({
        ...prevPost,
        PostStatus: isActive,
      }));
    } else {
      setPost((prevPost) => ({
        ...prevPost,
        [name]: value,
      }));
    }
  };

  const handleNewContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setBodyContent(e.target.value);
  };

  const addTextContent = () => {
    setPost((prevPost) => ({
      ...prevPost,
      PostBody: [
        ...prevPost.PostBody,
        {
          contentType: "text",
          contentBody: bodyContent,
        },
      ],
    }));
    setBodyContent("");
  };

  //#endregion

  const postTitle = postSelected ? "section.newpost.edit" : "section.newpost";
  const buttonClass = postSelected
    ? "bg-yellow-500 text-white"
    : "bg-blue-500 text-white";
  const buttonMessageId = postSelected ? "post.edit.button" : "newpost.button";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {loader ? (
        <Loader duration={1000} onComplete={() => setLoader(false)} />
      ) : (
        <>
          <LayoutComponent>
            <h2 className="text-2xl font-bold mb-6">
              <FormattedMessage
                id={postTitle}
                defaultMessage={postSelected ? "Edit Post" : "New Post"}
              />
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <FormattedMessage
                    id="newpost.title"
                    defaultMessage="Title:"
                  />
                </label>
                <input
                  type="text"
                  name="PostTitle"
                  value={post.PostTitle}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <FormattedMessage
                    id="newpost.author"
                    defaultMessage="Author:"
                  />
                </label>
                <input
                  type="text"
                  name="Author"
                  defaultValue={userName}
                  readOnly
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <FormattedMessage
                    id="newpost.visibility"
                    defaultMessage="Visibility"
                  />
                </label>
                <select
                  name="visibility"
                  value={post.PostStatus ? "public" : "private"}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="public">
                    <FormattedMessage
                      id="newpost.visibility.public"
                      defaultMessage="Public"
                    />
                  </option>
                  <option value="private">
                    <FormattedMessage
                      id="newpost.visibility.private"
                      defaultMessage="Private"
                    />
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <FormattedMessage
                    id="newpost.content"
                    defaultMessage="Post Content:"
                  />
                </label>
                <textarea
                  name="PostBody"
                  value={bodyContent}
                  onChange={handleNewContentChange}
                  className="resize-none mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-32"
                />
                <button
                  type="button"
                  onClick={addTextContent}
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <FormattedMessage
                    id="newpost.paragraph"
                    defaultMessage="Add Paragraph"
                  />
                </button>
              </div>
              <button
                type="submit"
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${buttonClass} hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                <FormattedMessage
                  id={buttonMessageId}
                  defaultMessage="Create Post"
                />
              </button>
            </form>
            <div className="mt-8">
              <PostPreview postContent={post.PostBody} title={post.PostTitle} />
            </div>
          </LayoutComponent>
        </>
      )}
    </div>
  );
}
