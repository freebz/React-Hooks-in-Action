// 리스트 6.12 BookablesList: 1. 변수

import {useState, useEffect, useRef} from "react";
import {FaArrowRight} from "react-icons/fa";
import Spinner from "../UI/Spinner";
import getData from "../../utils/api";

export default function BookablesList ({bookable, setBookable}) {
  const [bookables, setBookables] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const group = bookable?.group;

  const bookablesInGroup = bookables.filter(b => b.group === group);
  const groups = [...new Set(bookables.map(b => b.group))];

  const nextButtonRef = useRef();

  // 2. 효과
  // 3. 핸들러 함수
  // 4. UI
}