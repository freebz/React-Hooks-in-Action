// 리스트 12.4 Message 컴포넌트 사용하기

import React, {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";
import fetchMessage from ".api";
import {makeThrower} from "./utils";
import "./styles.css";

function ErrorFallback ({error}) {
  return <p className="error">{error}</p>
}

const getMessageOrThrow = makeThrower(fetchMessage());

function Message () {
  const data = getMessageOrThrow();
  return <p className="message">{data.message}</p>;
}

export default function App () {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense
          fallback={<p className="loading">Loading message...</p>}
        >
          <Message />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}