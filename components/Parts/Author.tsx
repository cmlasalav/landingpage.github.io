import axios from "axios";
import { useState, useEffect } from "react";
import { useToast } from "context/toastContext";

const UserURL = process.env.NEXT_PUBLIC_API_URL;

export default function AuthorName({ authorToken }) {
  //Toast Message
  const { showToast } = useToast();
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const getAuthor = async () => {
      try {
        //Author name
        const response = await axios.get(`${UserURL}/user/${authorToken}`);
        if (response.status === 200) {
          const name = response.data;
          setUserName(name);
        } else {
          showToast({ message: "error.info.user", typeMessage: "error" });
          setUserName("user");
        }
      } catch (error) {
        showToast({ message: "error.info.user", typeMessage: "error" });
        setUserName("user");
      }
    };

    if (authorToken) {
      getAuthor();
    }
  }, [authorToken]);

  return <span>{userName}</span>;
}
