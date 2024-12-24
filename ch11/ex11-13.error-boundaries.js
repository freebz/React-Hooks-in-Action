// 리스트 11.13 reactjs.org의 ErrorBoundary 컴포넌트

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 다음 랜더링 시 폴백 UI를 보여주도록 상태를 갱신함
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 오류 로그를 오류 보고 서비스에 전달할 수 있음
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 원하는 커스텀 폴백 UI를 랜더링할 수 있음
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}