import { useContext } from "react";
import Image from "next/image";
import { langContext } from "../../../context/langContext";
import ES from "../../../public/images/spain.png";
import EN from "../../../public/images/united-kingdom.png";

export default function LangHeader() {
  const language = useContext(langContext);

  return (
    <div className="flex items-center">
      <button
        className="mr-4 w-10 bg-transparent border-none cursor-pointer"
        onClick={() => language.Pagelanguage("es-MX")}
      >
        <Image
          src={ES}
          alt="Español"
          width={40}
          height={40}
          className="w-full"
        />
      </button>
      <button
        className="mr-14 w-10 bg-transparent border-none cursor-pointer"
        onClick={() => language.Pagelanguage("en-US")}
      >
        <Image
          src={EN}
          alt="English"
          width={40}
          height={40}
          className="w-full"
        />
      </button>
    </div>
  );
}
