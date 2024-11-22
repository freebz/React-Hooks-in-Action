// 리스트 6.8 BookablesList: 1. 변수

import {useEffect, useRef} from "react";
import {FaArrowRight} from "react-icons/fa";
import Spinner from "../UI/Spinner";
import getData from "../../utils/api";

export default function BookablesList ({state, dispatch}) {
  const {group, bookableIndex, bookables} = state;
  const {isLoading, error} = state;

  const bookablesInGroup = bookables.filter(b => b.group === group);
  const groups = [...new Set(bookables.map(b => b.group))];

  const nextButtonRef = useRef();

  // 2. 효과
  // 3. 핸들러 함수
  // 4. UI
}