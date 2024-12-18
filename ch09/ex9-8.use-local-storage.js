// 리스트 9.8 지역 저장소를 사용하는 사용자 피커 컴포넌트

import React from "react";
import useLocalStorage from "./useLocalStorage";

export default function UserPicker () {
  const [user, setUser] = useLocalStorage("user", "Sanjiv");

  return (
    <select value={user} onChange={e => setUser(e.target.value)}>
      <option>Jason</option>
      <option>Akiko</option>
      <option>Clarisse</option>
      <option>Sanjiv</option>
    </select>
  );
}