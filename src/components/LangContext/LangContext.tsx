import React, { useState, createContext, useEffect } from "react";
import * as I18NEn from "../../i18n/en.json";
import * as I18NRu from "../../i18n/ru.json";
// import axios from "axios";

export const LangContext = createContext<any>({});

export const LangProvider = ({ children } : any) => {
  const defaultLang = localStorage.getItem("lang") || "en";
  const [lang, onChangeLang] = useState(defaultLang);

  const useLocale = () => checkLanguage(I18NEn, I18NRu);

  const checkLanguage = (en: any, ru: any) =>
    lang === "ru" ? ru.default : en.default;

  // const location = async () => {
  //   try {
  //     const { data: location } = await axios.get("http://ip-api.com/json/");
  //     const { data: country } = await axios.get(
  //       `https://restcountries.eu/rest/v2/name/${location.country}`
  //     );

  //     const lang = country[0].languages[0].iso639_1;

  //     if (localStorage.getItem("lang")) {
  //       onChangeLang(localStorage.getItem("lang"));
  //     } else if (lang === "uk") {
  //       localStorage.setItem("lang", "ru");
  //       onChangeLang("ru");
  //     } else if (lang === "ru") {
  //       localStorage.setItem("lang", "ru");
  //       onChangeLang("ru");
  //     } else if (lang === "en") {
  //       localStorage.setItem("lang", "en");
  //       onChangeLang("en");
  //     }
  //   } catch (exception) {
  //     console.error(exception);
  //   }
  // };

  // useEffect(() => {
  //   location();
  // }, []);

  return (
    <LangContext.Provider
      value={{
        lang,
        onChangeLang,
        useLocale,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};
