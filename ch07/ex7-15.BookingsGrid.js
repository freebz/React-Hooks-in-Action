// 리스트 7.15 BookingsGrid 컴포넌트: 4. UI

export default function BookingsGrid (
  {week, bookable, booking, setBooking}
) {
  // 1. 변수들
  // 2. 효과들
  // 3. UI 도우미

  if (!grid) {
    return <p>Loading...</p>
  }

  return (
    <Fragment>
      {error && (
        <p className="bookingError">
          {`There was a problem loading the bookings data (${error})`}
        </p>
      )}
      <table
        className={bookings ? "bookingsGrid active" : "bookingsGrid"}
      >
        <thead>
        <tr>
          <th>
            <span className="status">
              <Spinner/>
            </span>
          </th>
          {dates.map(d => (
            <th key={d}>
              {(new Date(d)).toDateString()}
            </th>
          ))}
        </tr>
        </thead>

        <tbody>
        {sessions.map(session => (
          <tr key={session}>
            <th>{session}</th>
            {dates.map(date => cell(session, date))}
          </tr>
        ))}
        </tbody>
      </table>
    </Fragment>
  );
}