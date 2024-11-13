// 리스트 4.3 리스너를 제거하는 정리 함수 반환하기

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

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <p>Width: {size.width}, Height: {size.height}</p>
}