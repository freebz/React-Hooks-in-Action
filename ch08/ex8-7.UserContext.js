// 리스트 8.7 사용자 컨텍스트와 함께 커스텀 프로바이더를 익스포트하기

import {createContext, useState} from "react";

const UserContext = createContext();
export default UserContext;

export function UserProvider ({children}) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}