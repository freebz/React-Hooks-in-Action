// 리스트 10.11 useQuery를 사용하는 BookablesView

import {Link, useParams} from "react-router-dom";
import {FaPlus} from "react-icons/fa";

import {useQuery} from "react-query";
import getData from "../../utils/api";

import BookablesList from "./BookablesList";
import BookableDetails from "./BookableDetails";
import PageSpinner from "../UI/PageSpinner";

export default function BookablesView () {
  const {data: bookables = [], status, error} = useQuery(
    "bookables",
    () => getData("http://localhost:3001/bookables")
  );

  const {id} = useParams();
  const bookable = bookables.find(
    b => b.id === parseInt(id, 10)
  ) || bookables[0];

  /* 변경되지 않은 UI */
}