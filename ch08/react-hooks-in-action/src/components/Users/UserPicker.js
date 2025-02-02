// 리스트 8.5 UserPicker에서 사용자와 갱신 함수 받기

import {useState, useEffect, useContext} from "react";
import Spinner from "../UI/Spinner";

import UserContext from "./UserContext";
import {UserSetContext} from "./UserContext";

export default function UserPicker () {
  const [users, setUsers] = useState(null);

  const user = useContext(UserContext);
  const setUser = useContext(UserSetContext);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(resp => resp.json())
      .then(data => {
        setUsers(data);
        setUser(data[0]);
      });
  }, [setUser]);

  function handleSelect(e) {
    const selectedID = parseInt(e.target.value, 10);
    const selectedUser = users.find(u => u.id === selectedID);

    setUser(selectedUser);
  }

  if (users === null) {
    return <Spinner/>
  }
  
  return (
    <select
      className="user-picker"
      onChange={handleSelect}
      value={user?.id}
    >
      {users.map(u => (
        <option key={u.id} value={u.id}>{u.name}</option>
      ))}
    </select>
  );
}