import { useState, useEffect, useRef } from "react";

export function useSessionStorage<T>(key: string, initialValue: T) {
  const isFirstLoad = useRef(true);

  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const raw = window.sessionStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error("Error while writing to session storage.\n" + e);
        
    }
  }, [key, value]);

  return [value, setValue] as const;
}
