import { useEffect, useState } from "react";

const useLocalStorage = <T>(key: string, fallback: T) => {
  const initialValue = () => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        return JSON.parse(storedValue);
      } else {
        return fallback;
      }
    } catch (error) {
      console.error(`Error parsing JSON for key '${key}':`, error);
      return fallback;
    }
  };
  const [value, setValue] = useState<T>(initialValue());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
