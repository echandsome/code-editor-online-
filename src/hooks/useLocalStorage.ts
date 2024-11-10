import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, initialValue: unknown) { 
  const storageKey = `codepen-clone-${key}`;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(storageKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, value]);

  return [value, setValue];
}
