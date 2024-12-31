import axios from "axios";
import { useState, useEffect } from "react";
import { useToast } from "../context/toastContext";
import AboutUs from "@components/Sections/aboutUs";
import Blog from "@components/Sections/blog";
import Contact from "@components/Sections/ContactComponents/contact";
import Footer from "@components/Layout/Footer";
import Header from "@components/Layout/HeaderParts/Header";
import Home from "@components/Sections/home";
import Loader from "@components/Parts/Loader";
import Services from "../components/Sections/servicesSection";
import Testimonials from "@components/Sections/testimonials";

const TokenURL = process.env.NEXT_PUBLIC_API_URL;

export default function HomePage() {
  //Toast Message
  const { showToast } = useToast();

  //Loader State
  const [loader, setLoader] = useState(true);

  //User Authenticated State
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  //Check if user is authenticated
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

  //Sign Out
  const SignOutClick = async () => {
    try {
      const response = await axios.delete(`${TokenURL}/login`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setUserAuthenticated(false);
        showToast({ message: "signOut.success", typeMessage: "success" });
      }
    } catch (error) {
      showToast({ message: "general.error", typeMessage: "error" });;
    }
  };

  return (
    <>
      {loader && <Loader duration={5000} />}
      {!loader && (
        <div className="bg-[#f5f5f5]">
          <Header
            userAuthenticated={userAuthenticated}
            onSignOutClick={SignOutClick}
          />
          <Home />
          <AboutUs />
          <Services />
          <Testimonials />
          <Blog />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
