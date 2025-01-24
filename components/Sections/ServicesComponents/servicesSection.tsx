import axios from "axios";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "../../../context/langContext";
import ServiceLogo from "../../../public/images/Services.jpg";
import NoData from "../../Parts/NoData";
import { useToast } from "context/toastContext";

const ServicesURL = `${process.env.NEXT_PUBLIC_API_URL}/services`;

export default function Services() {
  //Services State
  const [services, setServices] = useState([]);

  //Language Context
  const { locale } = useContext(langContext);

  //Toast Message
  const { showToast } = useToast();

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await axios.get(ServicesURL);
        if (response.status === 201) {
          const services = response.data;
          setServices(services);
        }
      } catch (error) {
        showToast({message: "get.Services.error", typeMessage: "error"});
      }
    };

    getServices();
  }, []);

  return (
    <section id="Services" className="py-8 px-4">
      <h1 className="text-4xl font-bold mb-12 ml-10">
        <span className="text-[#76829e]">
          <FormattedMessage id="section.services.title1" defaultMessage="Our" />{" "}
        </span>
        <span>
          <FormattedMessage
            id="section.services.title2"
            defaultMessage="Services"
          />
        </span>
      </h1>
      <NoData data={services} messageLoading="loading.services" />
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] p-4 rounded-2xl shadow-md bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="w-full">
              {service.ServiceImage && (
                <Image
                  src={ServiceLogo}
                  alt="Service IMG"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              )}
            </div>
            <div className="mt-4 w-full max-w-[22rem] mx-auto">
              <p className="text-2xl font-bold mb-4">
                {locale === "es-MX"
                  ? service.ServicesName_ES
                  : service.ServicesName_EN}
              </p>
              <p className="text-lg">
                {locale === "es-MX"
                  ? service.ServiceDescription_ES
                  : service.ServiceDescription_EN}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
