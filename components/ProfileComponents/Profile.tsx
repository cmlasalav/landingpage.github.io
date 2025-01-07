import axios from "axios";
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";
import { useToast } from "../../context/toastContext";
// import CommentUser from "./CommentsUser";
// import CommentsAdmin from "./UserPostComponents/AdminComponents/CommentsAdmin";
import Loader from "../Parts/Loader";
// import PostsAdmin from "./UserPostComponents/AdminComponents/PostsAdmin";
// import PostUser from "./UserPostComponents/PostUser";
// import TestimonialsAdmin from "./UserPostComponents/AdminComponents/TestimonialsAdmin";

const ProfileURL = process.env.NEXT_PUBLIC_API_URL;

export default function Profile() {
  //User State
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    role: "",
  });
  //Toast Message
  const { showToast } = useToast();
  //Editing
  const [editing, setEditing] = useState(false);
  //Loader State
  const [loader, setLoader] = useState(true);

  const handleEdit = async () => {
    if (editing) {
      try {
        const response = await axios.put(
          `${ProfileURL}/user`,
          {
            Body: {
              name: profile.fullName,
            },
          },
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          //setUserName(profile.name);
          showToast({ message: "modal.edit.user", typeMessage: "success" });
        }
      } catch (error) {
        showToast({ message: "modal.error.edit.user", typeMessage: "error" });
      }
    }
    setEditing(!editing);
  };

  useEffect(() => {
    const userProfile = async () => {
      try {
        const response = await axios.get(`${ProfileURL}/user`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          const userProfile = response.data;
          setProfile(userProfile);
        }
      } catch (error) {
        showToast({ message: "error.info.user", typeMessage: "error" });
      } finally {
        setLoader(false);
      }
    };

    userProfile();
  }, []);

  if (loader) {
    return <Loader duration={3000} />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          <FormattedMessage id="profile.title" defaultMessage="Profile" />
        </h1>
        <div className="space-y-4">
          <p className="flex items-center text-gray-700">
            <span className="font-medium mr-2">
              <FormattedMessage id="profile.name" defaultMessage="Name:" />
            </span>
            {editing ? (
              <input
                type="text"
                value={profile.fullName}
                onChange={(e) =>
                  setProfile({ ...profile, fullName: e.target.value })
                }
                className="border-2 border-blue-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              profile.fullName
            )}
          </p>
          <p className="text-gray-700">
            <span className="font-medium mr-2">
              <FormattedMessage id="profile.email" defaultMessage="Email:" />
            </span>
            {profile.email}
          </p>
          {profile.role !== "user" && (
            <p className="text-gray-700">
              <span className="font-medium mr-2">
                <FormattedMessage id="profile.role" defaultMessage="Role: " />
              </span>
              {profile.role}
            </p>
          )}
        </div>
        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={handleEdit}
        >
          <FormattedMessage
            id={editing ? "profile.edit.save.button" : "profile.edit.button"}
            defaultMessage={editing ? "Save changes" : "Edit profile"}
          />
        </button>
      </div>
    </div>
  );
}
