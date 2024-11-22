// 리스트 6.16 상태를 설정하기 전에 BookablesView에서 값의 유효성을 검사하고 개선하기

import {useState, Fragment} from "react";

import BookablesList from "./BookablesList";
import BookableDetails from "./BookableDetails";

export default function BookablesView () {
  const [bookable, setBookable] = useState();

  function updateBookable (selected) {
    if (selected) {
      selected.lastShown = Date.now();
      setBookable(selected);
    }
  }
  
  return (
    <Fragment>
      <BookablesList bookable={bookable} setBookable={updateBookable}/>
      <BookableDetails bookable={bookable}/>
    </Fragment>
  );
}