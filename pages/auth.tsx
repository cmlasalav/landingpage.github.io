import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import Loader from "@components/Parts/Loader";
import Login from "@components/AuthComponents/Login";
import GoogleSignIn from "@components/AuthComponents/GoogleSignIn";
import Footer from "@components/Layout/Footer";

export default function AuthPage() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {loader ? (
        <Loader duration={500} />
      ) : (
        <>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              <FormattedMessage
                id="auth.page.title"
                defaultMessage="Sign in to your account"
              />
            </h2>

            <p className="mt-2 text-center text-sm text-gray-600">
              <FormattedMessage id="auth.page.subtitle" defaultMessage="Or" />{" "}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                <FormattedMessage
                  id="auth.page.newAccount"
                  defaultMessage="Create new account"
                />
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <Login />
            <GoogleSignIn />
          </div>
        </>
      )}
    </div>
  );
}
