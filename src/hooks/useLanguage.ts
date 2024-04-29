import { usePathname } from "next/navigation";
import { useEffect } from "react";
import useLocalStorage from "./useLocaleStorage";

const useLanguage = () => {
  const path = usePathname();

  const [language, setLanguage] = useLocalStorage("language", "EN");

  useEffect(() => {
    if (path === "/en") {
      setLanguage("EN");
    } else {
      setLanguage("GE");
    }
  }, [language, path]);

  return { language };
};

export default useLanguage;
