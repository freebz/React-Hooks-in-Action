// 리스트 5.4 텍스트 박스와 Go 버튼이 추가된 WeekPicker

import {useReducer, useRef} from "react";
import reducer from "./weekReducer";
import {getWeek} from "../../utils/date-wrangler";
import {
  FaChevronLeft,
  FaCalendarDay,
  FaChevronRight,
  FaCalendarCheck
} from "react-icons/fa";

export default function WeekPicker ({date}) {
  const [week, dispatch] = useReducer(reducer, date, getWeek);
  const textboxRef = useRef();

  function goToDate () {
    dispatch({
      type: "SET_DATE",
      payload: textboxRef.current.value
    });
  }

  return (
    <div>
      <p className="date-picker">
        // Prev 버튼
        // Today 버튼

        <span>
          <input
            type="text"
            ref={textboxRef}
            placeholder="e.g. 2020-09-02"
            defaultValue="2020-06-24"
          />

          <button
            className="go btn"
            onClick={goToDate}
          >
            <FaCalendarCheck/>
            <span>Go</span>
          </button>
        </span>

        // Next 버튼
      </p>
      <p>
        {week.start.toDateString()} - {week.end.toDateString()}
      </p>
    </div>
  );
}