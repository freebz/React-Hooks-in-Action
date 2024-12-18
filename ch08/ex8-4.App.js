// 리스트 8.4 컨텍스트 객체를 임포트하고 App에서 값을 제공하기

import {useState} from "react";

// 변경되지 않은 임포트들

import UserContext from "./Users/UserContext";

export default function App () {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={user}>
      <Router>
        <div className="App">
          <header>
            <nav>
              // 변경되지 않은 내비게이션
            </nav>

            <UserPicker user={user} setUser={setUser}/>
          </header>

          <Routes>
            // 변경되지 않은 경로들
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}