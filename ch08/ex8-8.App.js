// 리스트 8.8 App 컴포넌트에서 커스텀 프로바이더를 사용하는 방법

// useState 임포트 제거함
// 변경되지 않은 임포트문들

import {UserProvider} from "./Users/UserContext";

export default function App () {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <header>
            // 내비게이션

            <UserPicker/>
          </header>

          <Routes>
            // 경로들
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}