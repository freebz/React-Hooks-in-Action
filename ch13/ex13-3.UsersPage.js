// 리스트 13.3 전환 중 프로퍼티를 설정하기 위해 isPending 값 구조 분해하기

export default function UsersPage () {
  // 상태를 설정함
  
  // 원서에서는 const [startTransition, isPending] = useTransition();
  const [isPending, startTransition] = useTransition();

  function switchUser (nextUser) {
    startTransition(() => setSelectedUser(nextUser));

    // 사용자 상세 정보와 이미지를 미리 적재함
  }

  return user ? (
    <main className="users-page">
      <UsersList user={user} setUser={switchUser}/>

      <Suspense fallback={<PageSpinner/>}>
        <UserDetails userID={user.id} isPending={isPending}/>
      </Suspense>
    </main>
  ) : <PageSpinner/>;
}