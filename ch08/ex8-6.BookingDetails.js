// 리스트 8.6 컨텍스트에서 사용자 정보를 읽는 BookingDetails 컴포넌트

import {useContext} from "react";

import {FaEdit} from "react-icons/fa";

import Booking from "./Booking";

import UserContext from "../Users/UserContext";

export default function BookingDetails ({booking, bookable}) {

  const user = useContext(UserContext);

  const isBooker = booking && user && (booking.bookerId === user.id);

  return (
    <div className="booking-details">
      <h2>
        Booking Details
        {isBooker && (
          <span className="controls">
            <button
              className="btn"
            >
              <FaEdit/>
            </button>
          </span>
        )}
      </h2>

      {booking ? (
        // 예약
      ) : (
        // 메시지
      )}
    </div>
  );
}