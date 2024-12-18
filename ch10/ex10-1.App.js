// 리스트 10.1 App 컴포넌트의 BookablesPage 경로 확장하기

// 임포트 부분

export default function App () {
  return (
    <UserProvider>
      <Router>
        <div className="App">

          <header>
            {/* 변경되지 않음 */}
          </header>

          <Routes>
            <Route path="/bookings" element={<BookingsPage/>}/>
            <Route path="/bookables/*" element={<BookablesPage/>}/>
            <Route path="/users" element={<UsersPage/>}/>
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}