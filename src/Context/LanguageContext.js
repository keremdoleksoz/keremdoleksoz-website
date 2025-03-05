import React, { createContext, useContext, useState, useEffect } from "react";
import en from "./en.json";
import tr from "./tr.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("appLanguage") || "en";
  });
  
  
  useEffect(() => {
    localStorage.setItem("appLanguage", language);
  }, [language]);

  const content = language === "en" ? en : tr;

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ content, language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
