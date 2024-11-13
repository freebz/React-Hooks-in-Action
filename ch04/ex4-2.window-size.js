// 리스트 4.2 창 크기 조정하기

import React, { useState, useEffect } from "react";

export default function WindowSize () {
  const [size, setSize] = useState(getSize());

  function getSize () {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  useEffect(() => {
    function handleResize () {
      setSize(getSize());
    }
    window.addEventListener('resize', handleResize);
  }, []);

  return <p>Width: {size.width}, Height: {size.height}</p>
}