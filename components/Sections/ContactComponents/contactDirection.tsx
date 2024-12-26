import Image from "next/image";
import Direction from "../../Parts/Direction";
import DirectionIMG from "../../../public/images/Services.jpg";
const DirectionURL = "https://www.google.com/maps";

export default function ConnectDirection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-[50rem]">
      <Direction />
      <a href={DirectionURL} className="block mt-4">
        <Image
          src={DirectionIMG}
          alt="Direction"
          className="w-full h-auto rounded-lg"
        />
      </a>
    </div>
  );
}
