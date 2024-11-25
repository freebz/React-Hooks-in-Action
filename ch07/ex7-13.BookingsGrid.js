// 리스트 7.13 BookingsGrid 컴포넌트: 2. 효과

export default function BookingsGrid (
  {week, bookable, booking, setBooking}
) {
  // 1. 변수들

  useEffect(() => {
    if (bookable) {
      let doUpdate = true;

      setBookings(null);
      setError(false);
      setBooking(null);

      getBookings(bookable.id, week.start, week.end)
        .then(resp => {
          if (doUpdate) {
            setBookings(transformBookings(resp));
          }
        })
        .catch(setError);
      
      return () => doUpdate = false;
    }
  }, [week, bookable, setBooking]);

  // 3. UI 도우미
  // 4. UI
}