// 리스트 4.1 브라우저 제목 갱신하기

import React, { useState, useEffect } from "react";

export default function SayHello () {
  const greetings = ["Hello", "Ciao", "Hola", "こんにちは"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.title = greetings[index];
  });

  function updateGreeting () {
    setIndex(Math.floor(Math.random() * greetings.length));
  }

  return <button onClick={updateGreeting}>Say Hi</button>
}