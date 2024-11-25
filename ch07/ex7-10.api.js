// 리스트 7.10 getBookings API 함수

import { shortISO } from "./date-wrangler";

export function getBookings (bookableId, startDate, endDate) {

  const start = shortISO(startDate);
  const end = shortISO(endDate);

  const urlRoot = "http://localhost:3001/bookings";

  const query = `bookableId=${bookableId}` +
    `&date_gte=${start}&date_lte=${end}`;
  
  return getData(`${urlRoot}?${query}`);
}