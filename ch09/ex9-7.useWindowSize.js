// 리스트 9.7 useWindowSize 커스텀 훅

import {useState, useEffect} from "react";

function getSize () {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

export default function useWindowSize () {
  const [size, setSize] = useState(getSize());
  useEffect(() => {
    function handleResize () {
      setSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}