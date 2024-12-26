// 리스트 12.5 App 컴포넌트는 현재 getMessage 함수를 상태로 유지한다.

const getFirstMessage = makeThrower(fetchMessage());

export default function App () {
  const [getMessage, setGetMessage] = useState(() => getFirstMessage);

  function next () {
    const nextPromise = fetchNextMessage();
    const getNextMessage = makeThrower(nextPromise);
    setGetMessage(() => getNextMessage);
  }

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense
          fallback={<p className="loading">Loading message...</p>}
        >
          <Message
            getMessage={getMessage}
            next={next}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}