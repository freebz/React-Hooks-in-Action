// 리스트 5.1 상태를 갱신할 때 useState와 useRef의 차이

import React, { useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  const ref = useRef(1);

  const incCount = () => setCount(c => c + 1);

  const incRef = () => ref.current++;

  return (
    <div className="App">
      <button onClick={incCount}>count: {count}</button>
      <hr />
      <button onClick={incRef}>ref.current: {ref.current}</button>
    </div>
  );
}