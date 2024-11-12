// 리스트 3.9 BookingsPage 컴포넌트는 WeekPicker 컴포넌트를 사용한다.

import WeekPicker from "./WeekPicker";

export default function BookingsPage () {
  return (
    <main className="bookings-page">
      <p>Bookings!</p>
      <WeekPicker date={new Date()}/>
    </main>
  );
}