// 리스트 9.1 브라우저 제목 갱신하기

import React, {useState, useEffect} from "react";

function SayHello () {
  const greetings = ["Hello", "Ciao", "Hola", "こんにちは"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.title = greetings[index];
  }, [index]);

  function updateGreeting () {
    setIndex(Math.floor(Math.random() * greetings.length));
  }

  return <button onClick={updateGreeting}>Say Hi</button>
}