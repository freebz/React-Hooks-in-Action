// 리스트 11.9 지연 컴포넌트가 있는 앱 실행하기

import React, { lazy, useState } from "react";
import "./styles.css";

const module = {
  default: () => <div>Big Calendar</div>
};

function getPromise() {
  return new Promise(
    (resolve) => setTimeout(() => resolve(module), 3000)
  );
}

const LazyCalendar = lazy(getPromise);

function CalendarWrapper() {
  const [isOn, setIsOn] = useState(false);
  return isOn ? (
    <LazyCalendar />
  ) : (
    <div>
      <button onClick={() => setIsOn(true)}>Show Calendar</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <main>Main App</main>
      <aside>
        <CalendarWrapper />
        <CalendarWrapper />
      </aside>
    </div>
  );
}