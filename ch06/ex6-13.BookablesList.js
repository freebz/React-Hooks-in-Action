// 리스트 6.13 BookablesList: 2. 효과

export default function BookablesList ({bookable, setBookable}) {
  // 1. 변수

  useEffect(() => {
    getData("http://localhost:3001/bookables")

      .then(bookables => {
        setBookable(bookables[0]);
        setBookables(bookables);
        setIsLoading(false);
      })

      .catch(error => {
        setError(error);
        setIsLoading(false);
      });

  }, [setBookable]);

  // 3. 핸들러 함수
  // 4. UI
}