"use-client";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";
import Journey from "../../public/images/Journey.jpg";
import Team from "../../public/images/Team.jpg";
import Achievements from "../../public/images/Achievements.jpg";
//import Loading from "../Parts/Loading";

const AboutUsURL = "http://localhost:5000/aboutUs";

export default function AboutUs(
  {
    //setModalMessage,
    //setErrorModal
  }
) {
  const [aboutUs, setAboutUs] = useState([]);
  const images = [Journey, Team, Achievements];
  const { locale } = useContext(langContext);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await axios.get(AboutUsURL);
        if (response.status === 200) {
          const AboutUs = response.data;
          setAboutUs(AboutUs);
        } else {
          console.log("Error");
          //setModalMessage("modal.AboutUs.error");
          //setErrorModal(true);
        }
      } catch (error) {
        console.log("Error", error);
        //setModalMessage("modal.general.error");
        //setErrorModal(true);
      }
    };
    fetchAboutUs();
  }, []);

  return (
    <section id="AboutUs" className="py-8">
      <h2 className="mb-8 ml-10">
        <span className="text-[#76829e] font-bold text-4xl">
          <FormattedMessage
            id="section.aboutUs.title1"
            defaultMessage="About"
          />{" "}
        </span>
        <span className="font-bold text-4xl">
          <FormattedMessage id="section.aboutUs.title2" defaultMessage="Us" />
        </span>
      </h2>
      {/*<Loading data={aboutUs} messageLoading="loading.information" />*/}
      <div className="flex flex-wrap gap-4 justify-center">
        {aboutUs.map((info, index) => (
          <div
            key={index}
            className="p-2 rounded-2xl w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] shadow-md bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="w-full max-w-[22rem] mx-auto">
              <p className="mt-4 mb-4 text-3xl font-bold">
                {locale === "es-MX"
                  ? info.AboutUsTitle_ES
                  : info.AboutUsTitle_EN}
              </p>
              <p className="text-lg">
                {locale === "es-MX"
                  ? info.AboutUsDescription_ES
                  : info.AboutUsDescription_EN}
              </p>
            </div>
            <div className="w-full mt-4">
              <Image
                src={images[index]}
                alt="About Us"
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
