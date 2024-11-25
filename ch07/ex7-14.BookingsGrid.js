// 리스트 7.14 BookingsGrid 컴포넌트: 3. UI 도우미

export default function BookingsGrid (
  {week, bookable, booking, setBooking}
) {
  // 1. 변수들
  // 2. 효과들

  function cell (session, date) {
    const cellData = bookings?.[session]?.[date]
      || grid[session][date];

    const isSelected = booking?.session === session
      && booking?.date === date;

    return (
      <td
        key={date}
        className={isSelected ? "selected" : null}
        onClick={bookings ? () => setBooking(cellData) : null}
      >
        {cellData.title}
      </td>
    );
  }

  // 4. UI
}