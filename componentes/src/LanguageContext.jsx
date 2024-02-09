import { createContext, useContext } from "react";

export const LanguageContext = createContext('en');

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export default LanguageContext;
