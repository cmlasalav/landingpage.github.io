import { useState } from "react";
import axios from "axios";
import { FormattedMessage } from "react-intl";
import { useToast } from "context/toastContext";
import ConfirmationModal from "./ConfirmationModal";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export default function DeleteButton({ typeData, typeUser, _id, onDelete }) {
  //Loader
  const [isLoading, setIsLoading] = useState(false);

  //Modal
  const [isOpen, setIsOpen] = useState(false);

  //Toast Message
  const { showToast } = useToast();

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`${APIURL}/${typeUser}/${_id}`, {
        data: { typeData },
        withCredentials: true,
      });
      if (response.status === 200) {
        showToast({
          message: `${typeData}.deleted.success`,
          typeMessage: "success",
        });
      } else {
        showToast({
          message: `${typeData}.error.deleted`,
          typeMessage: "error",
        });
      }
      onDelete(_id);
    } catch (error) {
      showToast({ message: `${typeData}.error.deleted`, typeMessage: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        disabled={isLoading}
        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-xs transition duration-300"
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
            <FormattedMessage
              id="button.deleting"
              defaultMessage="Deleting..."
            />
          </span>
        ) : (
          <FormattedMessage
            id={`${typeData}.delete.button`}
            values={{ typeData }}
            defaultMessage="Delete {typeData}"
          />
        )}
      </button>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
        message={
          <FormattedMessage
            id="modal.confirm.question"
            defaultMessage="Are you sure you want to continue?"
          />
        }
      />
    </>
  );
}
