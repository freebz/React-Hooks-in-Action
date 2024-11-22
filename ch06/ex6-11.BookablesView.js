// 리스트 6.11 선택된 예약 가능 자원을 BookablesView 컴포넌트 안에 넣기

import {useState, Fragment} from "react";

import BookablesList from "./BookablesList";
import BookableDetails from "./BookableDetails";

export default function BookablesView () {
  const [bookable, setBookable] = useState();
  
  return (
    <Fragment>
      <BookablesList bookable={bookable} setBookable={setBookable}/>
      <BookableDetails bookable={bookable}/>
    </Fragment>
  );
}