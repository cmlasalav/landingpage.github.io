import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Register from "../components/AuthComponents/Register";
import Loader from "@components/Parts/Loader";

export default function register() {
  //Loader
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
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 mb-10 text-center text-3xl font-extrabold text-gray-900">
              <FormattedMessage
                id="auth.page.newAccount"
                defaultMessage="Create new account"
              />
            </h2>
            <Register />
          </div>
        </>
      )}
    </div>
  );
}
