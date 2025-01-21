import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Edit } from "lucide-react";
import CommentForm from "../BlogComponents/CommentComponents/CommentForm";
import { useRouter } from "next/router";

interface EditButtonProps {
  typeData: "post" | "comment";
  item: any;
}

export default function EditButton({ typeData, item }: EditButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleEdit = () => {
    if (typeData === "post") {
      router.push({
        pathname: "/newPost",
        query: { post: JSON.stringify(item) },
      });
    } else {
      setIsEditing(true);
    }
  };

  const handleCloseForm = () => {
    setIsEditing(false);
  };

  return (
    <>
      <button
        onClick={handleEdit}
        disabled={isLoading}
        className="absolute gap-2 px-2 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
      >
        {isLoading ? (
          <span className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <FormattedMessage id="button.editing" defaultMessage="Editing..." />
          </span>
        ) : (
          <>
            <Edit size={12} />
            <FormattedMessage
              id={`${typeData}.edit.button`}
              defaultMessage="Edit"
            />
          </>
        )}
      </button>
      {isEditing && typeData === "comment" && (
        <CommentForm
          closeForm={handleCloseForm}
          parentId={item.ParentId}
          postId={item.PostId}
          editComment={item}
        />
      )}
    </>
  );
}
