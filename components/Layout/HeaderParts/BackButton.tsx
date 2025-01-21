import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (router.pathname === "/profile") {
      router.push("/");
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-inherit hover:text-gray-600 transition-colors"
    >
      <ArrowLeft className="h-5 w-5" />
      <FormattedMessage id="header.back" defaultMessage="Go Back" />
    </button>
  );
}
