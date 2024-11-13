// 리스트 4.4 지역 저장소 사용하기

import React, { useState, useEffect } from "react";

export default function UserStorage () {
  const [user, setUser] = useState("Sanjiv");

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user", user);
  }, [user]);

  return (
    <select value={user} onChange={e => setUser(e.target.value)}>
      <option>Jason</option>
      <option>Akiko</option>
      <option>Clarisse</option>
      <option>Sanjiv</option>
    </select>
  );
}