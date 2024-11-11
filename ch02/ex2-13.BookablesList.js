// 리스트 2.13 세 변수를 추적하는 BookablesList 컴포넌트

import {useState, Fragment} from "react";
import data from "../../static.json";
import {FaArrowRight} from "react-icons/fa";
const {bookables, sessions, days} = data;

export default function BookablesList () {
  const [group, setGroup] = useState("Kit");
  const bookablesInGroup = bookables.filter(b => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(0);
  const groups = [...new Set(bookables.map(b => b.group))];

  const bookable = bookablesInGroup[bookableIndex];

  const [hasDetails, setHasDetails] = useState(false);

  function nextBookable () {
    setBookableIndex(i => (i + 1) % bookablesInGroup.length);
  }

  return (
    <Fragment>
      <div>
        /* 예약 가능 자원의 목록을 표시하는 UI(변경되지 않음) */
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
                  onChange={() => setHasDetails(has => !has)}
                />
                Show Details
              </label>
            </span>
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