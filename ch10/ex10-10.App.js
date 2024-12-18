// 리스트 10.10 QueryClientProvider 컴포넌트로 앱을 감싸기

import {QueryClient, QueryClientProvider} from "react-query";

// 그 밖의 임포트들

const queryClient = new QueryClient();

export default function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router>
          {/* 변경되지 않은 JSX */}
        </Router>
      </UserProvider>
    </QueryClientProvider>
  );
}