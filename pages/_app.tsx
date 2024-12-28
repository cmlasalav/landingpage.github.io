import React from "react";
import "../styles/global.css";
import { AppProps } from "next/app";
import { LangProvider } from "../context/langContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastProvider } from "../context/toastContext";

import ToastMessage from "@components/Parts/ToastMessage";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <ToastProvider>
        <Component {...pageProps} />
        <ToastMessage />
      </ToastProvider>
    </LangProvider>
  );
}
