// 리스트 7.3 useMemo를 사용한아나그램 앱

import React, {useState, useMemo} from "react";
import "./styles.css";
import {getAnagrams, getDistinct} from "./anagrams";

export default function App() {
  const [sourceText, setSourceText] = useState("ball");
  const [useDistinct, setUseDistinct] = useState(false);
  const [showAnagrams, setShowAnagrams] = useState(false);

  const anagrams = useMemo(
    () => getAnagrams(sourceText),
    [sourceText]
  );

  const distinct = useMemo(
    () => getDistinct(anagrams),
    [anagrams]
  );

  return ( /* UI */ )
}