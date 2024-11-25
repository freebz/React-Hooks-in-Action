// 리스트 7.12 BookingsGrid 컴포넌트: 1. 변수

export default function BookingsGrid (
  {week, bookable, booking, setBooking}
) {
  const [bookings, setBookings] = useState(null);
  const [error, setError] = useState(false);

  const {grid, sessions, dates} = useMemo(

    () => bookable ? getGrid(bookable, week.start) : {},

    [bookable, week.start]
  );

  // 2. 효과들
  // 3. UI 도우미
  // 4. UI
}