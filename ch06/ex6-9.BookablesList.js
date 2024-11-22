// 리스트 6.9 BookablesList: 2. 효과

export default function BookablesList ({state, dispatch}) {
  // 1. 변수

  useEffect(() => {
    dispatch({type: "FETCH_BOOKABLES_REQUEST"});

    getData("http://localhost:3001/bookables")
      .then(bookables => dispatch({
        type: "FETCH_BOOKABLES_SUCCESS",
        payload: bookables
      }))
      .catch(error => dispatch({
        type: "FETCH_BOOKABLES_ERROR",
        payload: error
      }));
  }, [dispatch]);

  // 3. 핸들러 함수
  // 4. UI
}