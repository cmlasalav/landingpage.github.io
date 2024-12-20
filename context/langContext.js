import { createContext, useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import SpanishMessages from "../lang/es-MX.json";
import EnglishMessages from "../lang/en-US.json";

const langContext = createContext();

const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState(EnglishMessages);
  const [locale, setLocale] = useState("en-US");

  useEffect(() => {
    // Accede a localStorage solo en el cliente
    const lang = typeof window !== "undefined" && localStorage.getItem("lang");
    if (lang) {
      setLocale(lang);
      setLanguage(lang === "es-MX" ? SpanishMessages : EnglishMessages);
    }
  }, []);

  //Switch case lang
  const Pagelanguage = (languagePage) => {
    switch (languagePage) {
      case "es-MX":
        setLanguage(SpanishMessages);
        setLocale("es-MX");
        if (typeof window !== "undefined") {
          localStorage.setItem("lang", "es-MX");
        }
        break;
      case "en-US":
        setLanguage(EnglishMessages);
        setLocale("en-US");
        if (typeof window !== "undefined") {
          localStorage.setItem("lang", "en-US");
        }
        break;
      default:
        setLanguage(EnglishMessages);
        setLocale("en-US");
    }
  };

  return (
    <langContext.Provider value={{ Pagelanguage, locale }}>
      <IntlProvider locale={locale} messages={language}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
