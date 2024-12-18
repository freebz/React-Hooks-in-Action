// 리스트 9.13 BookablesList 컴포넌트에서 useFetch 훅을 사용하기

import {useEffect} from "react";
import {FaArrowRight} from "react-icons/fa";
import Spinner from "../UI/Spinner";

import useFetch from "../../utils/useFetch";

export default function BookablesList ({bookable, setBookable}) {

  const {data : bookables = [], status, error} = useFetch(
    "http://localhost:3001/bookables"
  );

  const group = bookable?.group;
  const bookablesInGroup = bookables.filter(b => b.group === group);
  const groups = [...new Set(bookables.map(b => b.group))];

  useEffect(() => {
    setBookable(bookables[0]);
  }, [bookables, setBookable]);

  function changeGroup (event) { /* 변경되지 않음 */ }
  function nextBookable () { /* 변경되지 않음 */ }

  if (status === "error") {
    return <p>{error.message}</p>
  }

  if (status === "loading") {
    return <p><Spinner/> Loading bookables...</p>
  }

  return ( /* UI는 변경되지 않음 */ );
}