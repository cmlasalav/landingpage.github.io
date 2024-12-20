import React from "react";
import "../styles/global.css";
import { AppProps } from "next/app";
import { LangProvider } from "../context/langContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  );
}
