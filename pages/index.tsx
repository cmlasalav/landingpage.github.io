import { useState } from "react";
import AboutUs from "@components/Sections/aboutUs";
import Blog from "@components/Sections/blog";
import Contact from "@components/Sections/ContactComponents/contact";
import Home from "@components/Sections/home";
import LayoutComponent from "@components/Layout/LayoutComponent";
import Loader from "@components/Parts/Loader";
import Services from "../components/Sections/ServicesComponents/servicesSection";
import Testimonials from "@components/Sections/testimonials";

export default function HomePage() {
  const [loader, setLoader] = useState(true);
  return (
    <>
      <LayoutComponent>
        <Home />
        <AboutUs />
        <Services />
        <Testimonials />
        <Blog />
        <Contact />
      </LayoutComponent>
    </>
  );
}
