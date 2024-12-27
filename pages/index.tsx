import AboutUs from "@components/Sections/aboutUs";
import Blog from "@components/Sections/blog";
import Contact from "@components/Sections/ContactComponents/contact";
import Footer from "@components/Layout/Footer";
import Header from "@components/Layout/HeaderParts/Header";
import Home from "@components/Sections/home";
import Services from "../components/Sections/services";
import Testimonials from "@components/Sections/testimonials";

export default function HomePage() {
  return (
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
  );
}
