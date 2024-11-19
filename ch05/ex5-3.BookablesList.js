// 리스트 5.3 참조 객체를 사용해 포커스 설정하기

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
  const nextButtonRef = useRef();

  useEffect(() => { /* 데이터 읽어오기 */ }, []);

  // 타이머 효과와 stopPresentation 함수를 제거
  
  function changeGroup (e) { /* 변경되지 않음 */ }

  function changeBookable (selectedIndex) {
    dispatch({
      type: "SET_BOOKABLE",
      payload: selectedIndex
    });
    nextButtonRef.current.focus();
  }

  function nextBookable () { /* 변경되지 않음 */ }
  function toggleDetails () { /* 변경되지 않음 */ }

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <p><Spinner/> Loading bookables...</p>
  }

  return (
    <Fragment>
      <div>
        <select value={group} onChange={changeGroup}>
          {groups.map(g => <option value={g} key={g}>{g}</option>)}
        </select>

        <ul className="bookables items-list-nav">
          { /* 변경되지 않음 */ }
        </ul>
        <p>
          <button
            className="btn"
            onClick={nextBookable}
            ref={nextButtonRef}
            autoFocus
          >
            <FaArrowRight/>
            <span>Next</span>
          </button>
        </p>
      </div>

      {bookable && (
        <div className="bookable-details">
          <div className="item">
            { /* Stop 버튼 제거됨 */ }
          </div>

          <p>{bookable.notes}</p>

          {hasDetails && (
            <div className="item-details">
              <h3>Availability</h3>
              <div className="bookable-availability">
                <ul>
                  {bookable.days
                    .sort()
                    .map(d => <li key={d}>{days[d]}</li>)
                  }
                </ul>
                <ul>
                  {bookable.sessions
                    .map(s => <li key={s}>{sessions[s]}</li>)
                  }
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
}