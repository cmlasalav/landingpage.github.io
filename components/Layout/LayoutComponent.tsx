import axios from "axios";
import { useEffect, useState } from "react";

import { useToast } from "context/toastContext";
import { useUserName } from "context/userContext";
import Footer from "../Layout/Footer";
import Header from "../Layout/HeaderParts/Header";
import Loader from "@components/Parts/Loader";

const TokenURL = process.env.NEXT_PUBLIC_API_URL;

export default function LayoutComponent({ children }) {
  //Toast Message
  const { showToast } = useToast();

  //UserName
  const { setUserName } = useUserName();
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    const getUser = async () => {
      try {
        const response = await axios.get(`${TokenURL}/login`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUserAuthenticated(true);
        }
      } catch (error) {
        setUserAuthenticated(false);
      } finally {
        setLoader(false);
      }
    };
    getUser();
  }, []);

  const SignOutClick = async () => {
    setLoader(true);
    try {
      const response = await axios.delete(`${TokenURL}/login`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setUserAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
        setUserName(null);
        showToast({ message: "signOut.success", typeMessage: "success" });
      }
    } catch (error) {
      console.error("Error al cerrar sesión", error);
      showToast({ message: "general.error", typeMessage: "error" });
    } finally {
      setLoader(false);
    }
  };

  return (
    <div>
      {loader && <Loader duration={5000} />}
      <Header
        userAuthenticated={userAuthenticated}
        onSignOutClick={SignOutClick}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
