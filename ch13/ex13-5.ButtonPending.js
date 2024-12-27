// 리스트 13.5 전환을 사용하는 ButtonPending 컴포넌트

import {useTransition} from "react";

import Spinner from "./Spinner";

export default function ButtonPending ({children, onClick, ...props}) {
  // 원서에서는 const [startTransition, isPending] = useTransition();
  const [isPending, startTransition] = useTransition();

  function handleClick () {
    startTransition(onClick);
  }

  return (
    <button onClick={handleClick} {...props}>
      {isPending && <Spinner/>}
      {children}
      {isPending && <Spinner/>}
    </button>
  );
}