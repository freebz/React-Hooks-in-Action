// 리스트 7.9 transformBookings 함수

export function transformBookings (bookingsArray) {

  return bookingsArray.reduce((bookings, booking) => {

    const {session, date} = booking;

    if (!bookings[session]) {
      bookings[session] = {};
    }

    bookings[session][date] = booking;

    return bookings;
  }, {})
}