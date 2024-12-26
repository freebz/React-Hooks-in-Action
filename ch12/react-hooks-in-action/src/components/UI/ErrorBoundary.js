// 리스트 11.14 간단하면서도 커스텀화가 가능한 ErrorBoundary 컴포넌트

import {Component} from "react";

export default class ErrorBoundary extends Component {
  constructor (props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError () {
    return {hasError: true};
  }

  render() {
    const {
      children,
      fallback = <h1>Something went wrong.</h1>
    } = this.props;

    return this.state.hasError ? fallback : children;
  }
}