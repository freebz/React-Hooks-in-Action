// 리스트 8.1 BookingDetails 정보 컴포넌트는 예약 정보나 안내 메시지를 보여준다.

import Booking from "./Booking";

export default function BookingDetails ({booking, bookable}) {
  return (
    <div className="booking-details">
      <h2>Booking Details</h2>

      {booking ? (
        <Booking
          booking={booking}
          bookable={bookable}
        />
      ) : (
        <div className="booking-details-fields">
          <p>Select a booking or a booking slot.</p>
        </div>
      )}
    </div>
  );
}