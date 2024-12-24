// 리스트 11.15 오류 경계가 있는 App

// Fragment를 포함하는 그 밖의 임포트들

import ErrorBoundary from "./UI/ErrorBoundary";

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
            <header>{/* 변경되지 암ㅎ음 */}</header>
            
            <ErrorBoundary
              fallback={
                <Fragment>
                  <h1>Something went wrong!</h1>
                  <p>Try reloading the page.</p>
                </Fragment>
              }
            >
              <Suspense fallback={<PageSpinner/>}>
                <Routes>
                  <Route path="/bookings" element={<BookingsPage/>}/>
                  <Route path="/bookables/*" element={<BookablesPage/>}/>
                  <Route path="/users" element={<UsersPage/>}/>
                </Routes>
              </Suspense>
            </ErrorBoundary>
            
          </div>
        </Router>
      </UserProvider>
    </QueryClientProvider>
  );
}