// 리스트 13.7 UserDetails에 예약과 할 일 추가하기

import {Suspense} from "react";
// 그 밖의 임포트들
import UserBookings from "./UserBookings";
import UserTodos from "./UserTodos";

export default function UserDetails ({userID, isPending}) {
  const {data: user} = useQuery(/* 사용자 정보 읽어오기 */);

  return (
    <div className={isPending ? "item user user-pending" : "item user"}>
      <div className="item-header">
        <h2>{user.name}</h2>
      </div>

      <Avatar
        src={`http://localhost:3001/img/${user.img}`}
        fallbackSrc="http://localhost:3001/img/avatar.gif"
        alt={user.name}
      />

      <div className="user-details">
        <h3>{user.title}</h3>
        <p>{user.notes}</p>
      </div>

      <Suspense fallback={<p>Loading user bookings...</p>}>
        <UserBookings id={userID}/>
      </Suspense>

      <Suspense fallback={<p>Loading user todos...</p>}>
        <UserTodos id={userID}/>
      </Suspense>
    </div>
  );
}