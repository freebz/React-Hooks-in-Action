// 리스트 10.5 useBookingsParams 훅을 사용해 검색 파라미터에 접근하기

import {useSearchParams} from "react-router-dom";
import {shortISO, isDate} from "../../utils/date-wrangler";

export function useBookingsParams () {
  const [searchParams] = useSearchParams();

  const searchDate = searchParams.get("date");
  const bookableId = searchParams.get("bookableId");

  const date = isDate(searchDate)
    ? new Date(searchDate)
    : new Date();
  
  const idInt = parseInt(bookableId, 10);
  const hasId = !isNaN(idInt);
  return {
    date,
    bookableId: hasId ? idInt : undefined
  };
}