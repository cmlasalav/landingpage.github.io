"use client";

import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { FormattedMessage } from "react-intl";
import { Link as ScrollLink } from "react-scroll";
import { langContext } from "../../context/langContext";
import Logo from "../../public/images/Logo-White.jpg";
//import Loading

const HomeURL = `${process.env.NEXT_PUBLIC_API_URL}/home`;

export default function GeneraHome() {
  const [home, setHome] = useState([]);
  const { locale } = useContext(langContext);

  useEffect(() => {
    const getHome = async () => {
      try {
        const response = await axios.get(HomeURL);
        if (response.status === 201) {
          const homeData = response.data;
          setHome(homeData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getHome();
  }, []);

  return (
    <section id="Home" className="mt-0 bg-white rounded-2xl">
      <div className="w-full flex flex-col items-center justify-center bg-[#aab3ab] rounded-2xl relative min-h-200">
        <div className="w-full h-60 bg-white pt-4 text-center absolute top-0 rounded-t-2xl z-10 "></div>
        <div className="max-w-[75rem] bg-white text-center mb-24 relative z-20 px-4">
          {home.map((info, index) => (
            <div key={index}>
              <Image
                src={Logo}
                alt="Example Group"
                className="max-w-[30rem] z-30 mx-auto"
                priority
              />

              <p
                className="mb-16 text-5xl font-medium text-gray-800"
                id="genera-home-title"
              >
                {info.HomeTitle}
              </p>
              <p className="mx-16 text-lg text-gray-600 leading-relaxed">
                {locale === "es-MX"
                  ? info.HomeDescription_ES
                  : info.HomeDescription_EN}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full h-24 bg-white p-4 text-center absolute bottom-0 left-0 right-0 rounded-b-2xl">
          <ScrollLink to="Contact" smooth={true} duration={500}>
            <button className="bg-[#0d98e2] text-white border-none rounded-2xl px-6 py-3 mt-6 cursor-pointer hover:bg-[#0b86c9] transition-colors">
              <FormattedMessage
                id="message.button"
                defaultMessage="Send Message"
              />
            </button>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
