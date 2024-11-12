// 리스트 2.6 UserPicker 컴포넌트

import data from "../../static.json";
const {users} = data;

export default function UserPicker () {
  return (
    <select>
      {users.map(u => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}