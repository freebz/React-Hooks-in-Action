// 리스트 10.12 useQuery를 호출하는 useBookings

import {useQuery} from "react-query";

export function useBookings (bookableId, startDate, endDate) {
  const start = shortISO(startDate);
  const end = shortISO(endDate);

  const urlRoot = "http://localhost:3001/bookings";
  
  const queryString = `bookableId=${bookableId}` +
    `&date_gte=${start}&date_lte=${end}`;

  const query = useQuery(
    ["bookings", bookableId, start, end],
    () => getData(`${urlRoot}?${queryString}`)
  );

  return {
    bookings: query.data ? transformBookings(query.data) : {},
    ...query
  };
}