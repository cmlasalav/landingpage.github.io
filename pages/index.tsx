import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import { useToast } from "../context/toastContext";
import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";
import AboutUs from "@components/Sections/aboutUs";
import Blog from "@components/Sections/blog";
import Contact from "@components/Sections/ContactComponents/contact";
import Footer from "@components/Layout/Footer";
import Header from "@components/Layout/HeaderParts/Header";
import Home from "@components/Sections/home";
import Loader from "@components/Parts/Loader";
import Services from "../components/Sections/servicesSection";
import Testimonials from "@components/Sections/testimonials";
import ToastMessage from "@components/Parts/ToastMessage";

export default function HomePage() {
  //Loader State
  const [loader, setLoader] = useState(false);

  return (
    <>
      {loader && <Loader duration={3000} />}
      <div className="bg-[#f5f5f5]">
        <Header />
        <Home />
        <AboutUs />
        <Services />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
