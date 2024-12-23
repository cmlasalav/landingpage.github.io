import AboutUs from "../components/Sections/aboutUs";
import Home from "../components/Sections/home";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/HeaderParts/Header";

export default function HomePage() {
  return (
    <div className="bg-[#f5f5f5]">
      <Header />
      <Home />
      <AboutUs />
      <Footer />
    </div>
  );
}
