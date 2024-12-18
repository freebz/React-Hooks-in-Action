// 리스트 10.8 useBookingsParams에서 검색 파라미터를 설정할 수 있는 방법 제공하기

export function useBookingsParams () {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchDate = searchParams.get("date");
  const bookableId = searchParams.get("bookableId");

  const date = isDate(searchDate)
    ? new Date(searchDate)
    : new Date();
  
  const idInt = parseInt(bookableId, 10);
  const hasId = !isNaN(idInt);

  function setBookingsDate (date) {
    const params = {};

    if (hasId) {params.bookableId = bookableId}
    if (isDate(date)) {params.date = date}

    if (params.date || params.bookableId !== undefined) {
      setSearchParams(params, {replace: true});
    }
  }

  return {
    date,
    bookableId: hasId ? idInt : undefined,
    setBookingsDate
  };
}