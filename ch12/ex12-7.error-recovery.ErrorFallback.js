// 리스트 12.7 ErrorFallback 컴포넌트에 버튼 추가하기

function ErrorFallback ({error, resetErrorBoundary}) {
  return (
    <>
      <p className="error">{error}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </>
  );
}