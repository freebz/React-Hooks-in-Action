// 리스트 5.2 프레젠테이션 모드의 타이머 ID를 저장하기 위해 참조객체 사용하기

import {useReducer, useEffect, useRef, Fragment} from "react";
import data from "../../static.json";
import {FaArrowRight} from "react-icons/fa";
import Spinner from "../UI/Spinner";
import reducer from "./reducer";
import getData from "../../utils/api";

const {sessions, days} = data;

const initialState = { /* 변경되지 않음 */ };

export default function BookablesList () {

  // 변경되지 않은 변수 설정들

  const timerRef = useRef(null);

  useEffect(() => { /* 데이터 적재 */ }, []);

  useEffect(() => {

    timerRef.current = setInterval(() => {
      dispatch({ type: "NEXT_BOOKABLE" });
    }, 3000);

    return stopPresentation;

  }, []);

  function stopPresentation () {
    clearInterval(timerRef.current);
  }
  
  function changeGroup (e) { /* 변경되지 않음 */ }
  function changeBookable (selectedIndex) { /* 변경되지 않음 */ }
  function nextBookable () { /* 변경되지 않음 */ }
  function toggleDetails () { /* 변경되지 않음 */ }

  // 오류 처리와 적재 중 처리를 위한, 변경되지 않은 UI

  return (
    <Fragment>
      <div>
        { /* 예약 가능 자원 목록 */ }
      </div>

      {bookable && (
        <div className="bookable-details">
          <div className="item">
            <h2>
              {bookable.title}
            </h2>
            <span className="controls">
              <label>
                <input
                  type="checkbox"
                  checked={hasDetails}
                  onChange={toggleDetails}
                />
                Show Details
              </label>
              <button
                className="btn"
                onClick={stopPresentation}
              >
                Stop
              </button>
            </span>
          </div>

          { /* 더 자세한 세부 사항 */ }
        </div>
      )}
    </Fragment>
  );
}