// 리스트 9.9 useLocalStorage 커스텀 훅

import {useEffect, useState} from "react";

export default function useLocalStorage (key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(key);

    if (storedValue) {
      setValue(storedValue);
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}