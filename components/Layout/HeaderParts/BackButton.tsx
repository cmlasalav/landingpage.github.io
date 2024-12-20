import { FormattedMessage } from "react-intl";

export default function BackButton({ onBack }) {
  return (
    <li>
      <button
        onClick={onBack}
        className="bg-white border border-[#0d98e2] text-[#0d98e2] cursor-pointer py-2 px-4 rounded-2xl mr-8 hover:scale-105 transition-transform"
      >
        ← <FormattedMessage id="header.home" defaultMessage="Home" />
      </button>
    </li>
  );
}
