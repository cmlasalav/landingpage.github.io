import React from "react";
import "../styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { AppProps } from "next/app";
import { LangProvider } from "../context/langContext";
import { UserProvider } from "../context/userContext";
import { ToastProvider } from "../context/toastContext";

import ToastMessage from "@components/Parts/ToastMessage";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <ToastProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
        <ToastMessage />
      </ToastProvider>
    </LangProvider>
  );
}
