// 리스트 4.5 데이터를 읽어오는 UserPicker 컴포넌트

import {useState, useEffect} from "react";
import Spinner from "../UI/Spinner";

export default function UserPicker () {
  const [users, setUsers] = useState(null);

  useEffect(() => {

    fetch("http://localhost:3001/users")
      .then(resp => resp.json())
      .then(data => setUsers(data));

  }, []);

  if (users === null) {
    return <Spinner/>
  }
  
  return (
    <select>
      {users.map(u => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}