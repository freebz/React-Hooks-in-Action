// 리스트 13.1 동시성 모드 사용하기

import ReactDOM from 'react-dom/client'; // 원서에서는 import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById("root");
ReactDOM
  .createRoot(root)  // 원서에서는 unstable_createRoot(root)
  .render(<App />);