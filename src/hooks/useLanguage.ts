import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import useLocalStorage from "./useLocaleStorage";

const useLanguage = () => {
  const path = usePathname();

  const [language, setLanguage] = useLocalStorage("language", "GE");

  useEffect(() => {
    if (path === "/ge") {
      setLanguage("GE");
    } else {
      setLanguage("EN");
    }
  }, [language, path]);

  return { language };
};

export default useLanguage;
