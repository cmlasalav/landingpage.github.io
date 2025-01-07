import axios from "axios";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../../firebase-config"; //Check
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; //Check
import { useToast } from "../../context/toastContext";
import { useUserName } from "context/userContext";

const GoogleURL = process.env.NEXT_PUBLIC_API_URL;

export default function GoogleSignIn() {
  //Loader State
  const [loader, setLoader] = useState(false);

  //Toast Message
  const { showToast } = useToast();

  //UserName
  const { setUserName } = useUserName();

  //Router
  const router = useRouter();

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      //PopUp Google Sign In
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      //UserInfo
      const userName = result.user.displayName;
      const token = await result.user.getIdToken();
      //Token validation
      const response = await axios.post(
        `${GoogleURL}/google`,
        { token },
        { withCredentials: true }
      );

      if (response.status === 200) {
        showToast({ message: "login.success", typeMessage: "success" });
        router.push("/");
        localStorage.setItem("isAuthenticated", "true");
        setUserName(userName);
      } else {
        showToast({ message: "general.error", typeMessage: "error" });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorCode = error.response.data.errorInfo?.code;
        if (errorCode === "auth/invalid-input") {
          showToast({ message: "login.email.error", typeMessage: "error" });
        } else if (errorCode === "server/error") {
          showToast({ message: "signUp.google.error", typeMessage: "error" });
        }
      } else {
        if (error.code === "auth/popup-closed-by-user") {
          showToast({
            message: "signUp.google.error.popUp",
            typeMessage: "error",
          });
        } else {
          showToast({ messsage: "signUp.google.error", typeMessage: "error" });
        }
      }
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">
            <FormattedMessage id="auth.page.subtitle" defaultMessage="Or" />
          </span>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={handleGoogleLogin}
          className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
          </svg>
          <FormattedMessage
            id="signUp.google"
            defaultMessage="Sign Up with Google."
          />
        </button>
      </div>
    </div>
  );
}
