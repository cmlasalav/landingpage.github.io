import axios from "axios";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useToast } from "../../../context/toastContext";
import { useUserName } from "context/userContext";
import Loader from "@components/Parts/Loader";
import { useRouter } from "next/router";

const CommentURL = process.env.NEXT_PUBLIC_API_URL;

interface CommentFormProps {
  closeForm: () => void;
  parentId?: string | null;
  postId: string;
  onAddComment?: (newComment: any) => void;
  editComment?: any;
}

export default function CommentForm({
  closeForm,
  parentId = null,
  postId,
  onAddComment,
  editComment,
}: CommentFormProps) {
  //Toast Message
  const { showToast } = useToast();

  //Router
  const router = useRouter();

  //UserName
  const { userName } = useUserName();

  //Comment State
  const [comment, setComment] = useState({
    Author: userName,
    CommentBody: "",
    ParentId: parentId,
    PostId: postId,
  });

  //Loader State
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (editComment) {
      setComment((prevComment) => ({
        ...prevComment,
        ...editComment,
        Author: userName,
      }));
    }
  }, [editComment, userName]);

  const handleChangeComment = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      //Edit Comment
      if (editComment) {
        try {
          const response = await axios.put(
            `${CommentURL}/comment/${editComment._id}`,
            comment,
            {
              withCredentials: true,
            }
          );
          if (response.status === 200) {
            showToast({
              message: "modal.edit.comment",
              typeMessage: "success",
            });
            closeForm();
            window.location.reload();
          }
        } catch (error) {
          showToast({
            message: "modal.error.edit.comment",
            typeMessage: "error",
          });
        }
      } else {
        //Post comment
        try {
          const response = await axios.post(`${CommentURL}/comment`, comment, {
            withCredentials: true,
          });
          if (response.status === 201) {
            showToast({
              message: "modal.success.comment",
              typeMessage: "success",
            });
            if (onAddComment) {
              onAddComment(response.data.newComment);
            }
            closeForm();
          }
        } catch (error) {
          showToast({
            message: "modal.error.comment",
            typeMessage: "error",
          });
        }
      }
    } catch (error) {
      showToast({ message: "general.error", typeMessage: "error" });
    } finally {
      setLoader(false);
    }
  };

  //Lang Buttons
  const formButton = editComment ? "comment.form.edit" : "comment.form.send";
  const classButton = editComment
    ? "bg-yellow-500 hover:bg-yellow-600"
    : "bg-blue-500 hover:bg-blue-600";

  return (
    <>
      {loader && <Loader duration={3000} />}
      <form
        onSubmit={handleSubmit}
        className={`mt-4 p-4 bg-white rounded-lg shadow ${
          editComment ? "absolute top-full left-0 z-10 w-full md:w-96" : ""
        }`}
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            <FormattedMessage id="form.author" defaultMessage="Author: " />
            <input
              type="text"
              name="Author"
              value={userName}
              required
              readOnly
              onChange={handleChangeComment}
              className="mt-1 ml-2 px-3 py-2 bg-gray-100 border rounded-md w-full md:w-64"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            <FormattedMessage
              id="comment.form.body"
              defaultMessage="Comment: "
            />
            <textarea
              name="CommentBody"
              value={comment.CommentBody}
              onChange={handleChangeComment}
              required
              className="mt-1 px-3 py-2 w-full h-24 border rounded-md resize-none"
            />
          </label>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="submit"
            className={`px-4 py-2 text-white rounded-md hover:bg-gray-400 transition duration-300 ${classButton}`}
          >
            <FormattedMessage id={formButton} defaultMessage="Send" />{" "}
            {/* id="comment.form.send" */}
          </button>
          <button
            type="button"
            onClick={closeForm}
            className="px-4 py-2 text-white rounded-md hover:bg-gray-400 transition duration-300 bg-red-600"
          >
            <FormattedMessage id="form.cancel" defaultMessage="Cancel" />
          </button>
        </div>
      </form>
    </>
  );
}
