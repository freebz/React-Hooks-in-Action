// 리스트 9.11 UserPicker 컴포넌트에서 useUser 훅 호출하기

import {useState, useEffect} from "react";
import Spinner from "../UI/Spinner";

import {useUser} from "./UserContext";

export default function UserPicker () {
  const [user, setUser] = useUser();
  const [users, setUsers] = useState(null);
  
  useEffect(() => {
    // 변경되지 않음
  }, [setUser]);

  function handleSelect(e) { /* 변경되지 않음 */ }

  if (users === null) {
    return <Spinner/>
  }
  
  return ( /* UI는 변경되지 않음 */ );
}