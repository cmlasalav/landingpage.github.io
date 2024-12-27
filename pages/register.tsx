import { FormattedMessage } from "react-intl";
import Register from "../components/AuthComponents/Register";

export default function register() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 mb-10 text-center text-3xl font-extrabold text-gray-900">
          <FormattedMessage
            id="auth.page.newAccount"
            defaultMessage="Create new account"
          />
        </h2>
        <Register />
      </div>
    </div>
  );
}
