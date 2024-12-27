// 리스트 13.6 UserDetails에게 지연된 값 전달하기

import {
  useState,
  useDeferredValue, // 원서에서는 unstable_useDeferredValue as useDeferredValue,
  Suspense
} from "react";

// 그 밖의 임포트들

export default function UsersPage () {
  const [loggedInUser] = useUser();
  const [selectedUser, setSelectedUser] = useState(null);
  const user = selectedUser || loggedInUser;
  const queryClient = useQueryClient();

  const deferredUser = useDeferredValue(user) || user;

  const isPending = deferredUser !== user;

  function switchUser (nextUser) {
    setSelectedUser(nextUser)

    queryClient.prefetchQuery(/* 사용자 상세 정보 미리 읽어오기 */);
    queryClient.prefetchQuery(/* 사용자 이미지 미리 읽어오기 */);
  }

  return user ? (
    <main className="users-page">
      <UsersList
        user={user}
        setUser={switchUser}
        isPending={isPending}
      />

      <Suspense fallback={<PageSpinner/>}>
        <UserDetails
          userID={deferredUser.id}
          isPending={isPending}
        />
      </Suspense>
    </main>
  ) : <PageSpinner/>;
}