// 리스트 9.2 useDocumentTilte 훅으로 효과 추출하기

import React, {useState, useEffect} from "react";

function useDocumentTilte (title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function SayHello () {
  const greetings = ["Hello", "Ciao", "Hola", "こんにちは"];
  const [index, setIndex] = useState(0);

  function updateGreeting () {
    setIndex(Math.floor(Math.random() * greetings.length));
  }

  useDocumentTilte(greetings[index]);

  return <button onClick={updateGreeting}>Say Hi</button>
}