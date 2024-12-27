// 리스트 13.2 UsersPage에서 UX를 개선하기 위해 전환 사용하기

import {
  useState,
  useTransition,  // 원서에서는 unstable_useTransition as useTransition,
  Suspense
} from "react";

// 변경되지 않은 임포트

export default function UsersPage () {
  const [loggedInUser] = useUser();
  const [selectedUser, setSelectedUser] = useState(null);
  const user = selectedUser || loggedInUser;
  const queryClient = useQueryClient();

  // 원서에서는 const [startTransition] = useTransition();
  const [isPending, startTransition] = useTransition();

  function switchUser (nextUser) {
    startTransition(() => setSelectedUser(nextUser));

    queryClient.prefetchQuery(
      ["user", nextUser.id],
      () => getData(`http://localhost:3001/users/${nextUser.id}`)
    );

    queryClient.prefetchQuery(
      `http://localhost:3001/img/${nextUser.img}`,
      () => new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = `http://localhost:3001/img/${nextUser.img}`;
      })
    );
  }

  return user ? (
    <main className="users-page">
      <UsersList user={user} setUser={switchUser}/>

      <Suspense fallback={<PageSpinner/>}>
        <UserDetails userID={user.id}/>
      </Suspense>
    </main>
  ) : <PageSpinner/>;
}