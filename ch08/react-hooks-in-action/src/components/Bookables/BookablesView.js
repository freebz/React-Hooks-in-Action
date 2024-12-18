// 리스트 6.17 useCallback 훅을 써서 함수의 정체성 유지하기

import {useState, useCallback, Fragment} from "react";

import BookablesList from "./BookablesList";
import BookableDetails from "./BookableDetails";

export default function BookablesView () {
  const [bookable, setBookable] = useState();

  const updateBookable = useCallback(selected => {
    if (selected) {
      selected.lastShown = Date.now();
      setBookable(selected);
    }
  }, []);
  
  return (
    <Fragment>
      <BookablesList bookable={bookable} setBookable={updateBookable}/>
      <BookableDetails bookable={bookable}/>
    </Fragment>
  );
}