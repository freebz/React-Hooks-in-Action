// 리스트 13.8 2개의 Suspense 컴포넌트를 SuspenseList로 감싸기

<SuspenseList
  revealOrder="forwards"
>
  <Suspense fallback={<p>Loading user bookings...</p>}>
    <UserBookings id={userID}/>
  </Suspense>

  <Suspense fallback={<p>Loading user todos...</p>}>
    <UserTodos id={userID}/>
  </Suspense>
</SuspenseList>