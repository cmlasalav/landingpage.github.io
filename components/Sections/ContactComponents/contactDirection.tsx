import Image from "next/image";
import Direction from "@components/Parts/Direction";
import Logo from "../../../public/images/Services.jpg";

export default function ContactDirection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <div className="space-y-4 mb-6">
        <Direction />
      </div>
      <div className="relative w-full h-[500px]">
        <Image
          src={Logo}
          alt="Services"
          style={{ border: 0 }}
          loading="lazy"
          className="rounded-lg"
        ></Image>
      </div>
    </div>
  );
}
