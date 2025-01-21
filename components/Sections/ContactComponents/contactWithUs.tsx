import { FormattedMessage } from "react-intl";

const XURL = "https://www.x.com";
const FacebookURL = "https://www.facebook.com";

export default function ConnectWithUs() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">
        <FormattedMessage
          id="socialmedia.title"
          defaultMessage="Connect with us"
        />
      </h2>
      <p className="text-gray-600 mb-6">
        <FormattedMessage
          id="socialmedia.paragraph"
          defaultMessage="Stay connected and follow us on social media for updates and industry news."
        />
      </p>
      <div className="flex space-x-4">
        <a
          href={XURL}
          className="text-gray-600 hover:text-blue-500 transition duration-300"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.5 2H16.8L12 10.3 7.2 2H2.5L10.3 12 2.5 22H7.2L12 13.7 16.8 22H21.5L13.7 12 21.5 2Z" />
          </svg>
        </a>

        <a
          href={FacebookURL}
          className="text-gray-600 hover:text-blue-500 transition duration-300"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
