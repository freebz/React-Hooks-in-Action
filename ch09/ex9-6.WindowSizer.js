// 리스트 9.6 창 너비와 높이를 표시하는 간결한 컴포넌트

import React from "react";
import useWindowSize from "./useWindowSize";

export default function WindowSizer () {
  const {width, height} = useWindowSize();

  return <p>Width: {width}, Height: {height}</p>
}