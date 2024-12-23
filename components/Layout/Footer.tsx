import Image from "next/image";
import Direction from "../Parts/Direction";
import FooterImg from "../../public/images/Footer.jpg";

export default function Footer() {
  return (
    <footer className="flex items-center bg-[#3a415a] text-white p-4 mt-8 min-h-[200px]">
      <Image
        src={FooterImg}
        alt="Genera Technology"
        priority
        width={192}
        height={192}
        className="w-48 h-auto "
      />
      <div className="flex flex-col ml-48">
        <Direction />
        <p>Trademak TM</p>
      </div>
    </footer>
  );
}
