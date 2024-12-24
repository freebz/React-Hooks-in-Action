// 리스트 11.11 App에서 페이지 컴포넌트를 지연 적재한다.

import {lazy, Suspense} from "react";

// 세가지 페이지에 대한 기존 임포트를 삭제함

import PageSpinner from "./UI/PageSpinner";

const BookablesPage = lazy(() => import("./Bookables/BookablesPage"));
const BookingsPage = lazy(() => import("./Bookings/BookingsPage"));
const UsersPage = lazy(() => import("./Users/UsersPage"));

const queryClient = new QueryClient();

export default function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router>
          <div className="App">
            <header>
              <nav>
                {/* 변경되지 않음 */}
              </nav>

              <UserPicker/>
            </header>

            <Suspense fallback={<PageSpinner/>}>
              <Routes>
                <Route path="/bookings" element={<BookingsPage/>}/>
                <Route path="/bookables/*" element={<BookablesPage/>}/>
                <Route path="/users" element={<UsersPage/>}/>
              </Routes>
            </Suspense>
          </div>
        </Router>
      </UserProvider>
    </QueryClientProvider>
  );
}