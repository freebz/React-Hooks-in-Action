// 리스트 9.4 useRandomTitle 커스텀 훅은 useDocumentTitle을 호출한다.

import {useState} from "react";
import useDocumentTitle from "./useDocumentTitle";

const getRandomIndex = length => Math.floor(Math.random() * length);

export default function useRandomTitle (titles = ["Hello"]) {

  const [index, setIndex] = useState(
    () => getRandomIndex(titles.length)
  );

  useDocumentTitle(titles[index]);

  return () => setIndex(getRandomIndex(titles.length));
}