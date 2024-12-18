// 리스트 7.4 BookingsPage 컴포넌트

import {useState} from "react";
import BookablesList from "../Bookables/BookablesList";
import Bookings from "./Bookings";

export default function BookingsPage () {
  const [bookable, setBookable] = useState(null);

  return (
    <main className="bookings-page">
      <BookablesList
        bookable={bookable}
        setBookable={setBookable}
      />
      <Bookings
        bookable={bookable}
      />
    </main>
  );
}