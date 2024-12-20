"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link as ScrollLink } from "react-scroll";
import { langContext } from "../../context/langContext";
import Logo from "../../public/images/Logo.jpg";
//import Loading

export default function GeneraHome() {
  const [home, setHome] = useState({
    HomeTitle: "Consulting Group",
    HomeDescription_EN:
      "Welcome to Genera Consulting Group, your strategic partner in business transformation and innovation. Established in 2023, we specialize in providing expert consulting services to industry leaders, focusing on processes analysis and improvement, empowering technical infrastructure, security, compliance, cloud infrastructure architecture, data science, machine learning, fintech product development, and Insurtech solutions to drive sustainable growth and success.",
    HomeDescription_ES:
      "Bienvenido a Genera Consulting Group, su socio estratégico en transformación empresarial e innovación. Establecidos en 2023, nos especializamos en ofrecer servicios de consultoría experta a líderes de la industria, enfocándonos en el análisis y mejora de procesos, potenciación de infraestructura técnica, seguridad, cumplimiento, arquitectura de infraestructura en la nube, ciencia de datos, aprendizaje automático, desarrollo de productos fintech y soluciones Insurtech para impulsar el crecimiento y éxito sostenible.",
    HomeImg: Logo,
  });
  const { locale } = useContext(langContext);
  return (
    <section id="GeneraHome" className="mt-20 bg-white rounded-2xl">
      <div className="w-full flex flex-col items-center justify-center bg-[#aab3ab] rounded-2xl relative min-h-200">
        <div className="w-full h-60 bg-white pt-4 text-center absolute top-0 rounded-t-2xl z-10 "></div>
        <div className="max-w-[75rem] bg-white text-center mb-24 relative z-20 px-4">
          <div>
            {home.HomeImg && (
              <Image
                src={home.HomeImg}
                alt="Genera Technology"
                className="max-w-[30rem] z-30 mx-auto"
                priority
              />
            )}
            <p
              className="mb-16 text-5xl font-medium text-gray-800"
              id="genera-home-title"
            >
              {home.HomeTitle}
            </p>
            <p className="mx-16 text-lg text-gray-600 leading-relaxed">
              {locale === "es-MX"
                ? home.HomeDescription_ES
                : home.HomeDescription_EN}
            </p>
          </div>
        </div>
        <div className="w-full h-24 bg-white p-4 text-center absolute bottom-0 left-0 right-0 rounded-b-2xl">
          <ScrollLink to="GeneraContact" smooth={true} duration={500}>
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
