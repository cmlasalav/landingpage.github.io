import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { PlusCircle } from "lucide-react";

export default function NewPostButton() {
  return (
    <>
      <Link href="/newPost" className="inline-block">
        <button className="group flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <PlusCircle className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          <span>
            <FormattedMessage id="newpost.button" defaultMessage="New Post" />
          </span>
        </button>
      </Link>
    </>
  );
}
