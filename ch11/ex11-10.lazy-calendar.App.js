// 리스트 11.10 2개의 달력 영역을 각각 Suspense 컴포넌트로 감싼다.

<div className="App">
  <main>Main App</main>
  <aside>
    <Suspense fallback={<div>Loading...</div>}>
      <CalendarWrapper />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <CalendarWrapper />
    </Suspense>
  </aside>
</div>