// 리스트 12.8 ErrorBoundary에 onRest 프롭 추가하기

export default function App () {
  const [getMessage, setGetMessage] = useState(() => getFirstMessage);

  function next () {/* 변경되지 않음 */}

  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={next}
      >
        <Suspense
          fallback={<p className="loading">Loading message...</p>}
        >
          <Message getMessage={getMessage} next={next} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}