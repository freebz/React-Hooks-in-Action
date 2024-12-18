// 리스트 9.3 제목을 설정하는 간결한 SayHello 컴포넌트

import React from "react";
import useRandomTitle from "./useRandomTitle";

const greetings = ["Hello", "Ciao", "Hola", "こんにちは"];

export default function SayHello (){
  const nextTitle = useRandomTitle(greetings);

  return <button onClick={nextTitle}>Say Hi</button>
}