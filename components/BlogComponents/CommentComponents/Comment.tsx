import axios from "axios";
import { useState, useEffect } from "react";
import { FormattedMessage, FormattedDate } from "react-intl";
import { useToast } from "../../../context/toastContext";
import { useRouter } from "next/router";
import AuthorName from "../../Parts/Author";
import CommentForm from "./CommentForm";
//import CommentButton from "./CommentButton.jsx";

const CommentsURL = process.env.NEXT_PUBLIC_API_URL;

export default function Comment({ postId }) {
  //User validation
  const userValidation = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    return isAuthenticated === "true";
  };
  //Router
  const router = useRouter();
  //Toast Message
  const { showToast } = useToast();
  //Comment State
  const [comments, setComments] = useState([]);
  //Loader State
  const [loader, setLoader] = useState(true);

  //Form State
  const [replyingTo, setReplyingTo] = useState(null);
  const [addingComment, setAddingComment] = useState(false);

  useEffect(() => {
    if (!postId) return;
    const getComment = async () => {
      try {
        const response = await axios.get(`${CommentsURL}/comment/${postId}`);
        if (response.status === 201) {
          const comments = response.data;
          setComments(comments);
        } else {
          setComments([]);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setComments([]);
          if (error.response.data.message) {
            showToast({
              message: "comment.noComment.error",
              typeMessage: "error",
            });
          }
        } else {
          showToast({ message: "comment.error", typeMessage: "error" });
        }
      } finally {
        setLoader(false);
      }
    };
    getComment();
  }, [postId]);

  //#region Comment Form Handler
  const openReplyForm = (commentId) => {
    setReplyingTo(commentId);
    setAddingComment(false);
  };

  const openAddCommentForm = () => {
    if (userValidation()) {
      setAddingComment(true);
      setReplyingTo(null);
    } else {
      router.push("/auth");
      showToast({ message: "auth.page.title", typeMessage: "error" });
    }
  };

  const closeForm = () => {
    setReplyingTo(null);
    setAddingComment(false);
  };
  //#endregion

  const renderComments = (commentsList, parentId = null) => {
    return commentsList
      .filter((comment) => comment.ParentId === parentId)
      .map((comment) => (
        <div key={comment._id} className={`mb-4 ${parentId ? "ml-6" : ""}`}>
          <div
            className={`bg-white border border-gray-200 rounded-lg p-4 ${
              parentId ? "border-l-4 border-l-blue-500" : ""
            }`}
          >
            <p className="mb-2">
              <strong className="font-semibold">
                <AuthorName authorToken={comment.Author} />
              </strong>
              : {comment.CommentBody}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <FormattedDate
                value={comment.CommentDate}
                year="numeric"
                month="long"
                day="numeric"
                weekday="long"
              />
            </p>
            {userValidation() && (
              <button
                className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                onClick={() => openReplyForm(comment._id)}
              >
                <FormattedMessage
                  id="comment.reply.button"
                  defaultMessage="Reply"
                />
              </button>
            )}
            {replyingTo === comment._id && (
              <div className="mt-4">
                <CommentForm
                  closeForm={closeForm}
                  parentId={comment._id}
                  postId={postId}
                />
              </div>
            )}
          </div>
          {renderComments(commentsList, comment._id)}
        </div>
      ));
  };

  return (
    <>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              onClick={openAddCommentForm}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
            <span>
              <FormattedMessage id="comment.title" defaultMessage="Comments" />
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-2 sm:px-6 lg:px-1 py-6">
        <>
          {comments.length === 0 && (
            <p className="text-gray-500">
              <FormattedMessage
                id="comment.noComment.error"
                defaultMessage="No comments available."
              />
            </p>
          )}
          <div className="space-y-4">{renderComments(comments)}</div>
          {addingComment && (
            <div className="mt-4">
              <CommentForm closeForm={closeForm} postId={postId} />
            </div>
          )}
        </>
      </div>
    </>
  );
}
