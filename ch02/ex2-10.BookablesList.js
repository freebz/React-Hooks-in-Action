// 리스트 2.10 선택한 방이 변경될 때 UI를 갱신하도록 하는 방법

import {useState} from "react";
import data from "../../static.json";
const {bookables} = data;

export default function BookablesList () {
  const group = "Rooms";
  const bookablesInGroup = bookables.filter(b => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(1);

  return (
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((b, i) => (
        <li
          key={b.id}
          className={i === bookableIndex ? "selected" : null}
        >
          <button
            className="btn"
            onClick={() => setBookableIndex(i)}
          >
            {b.title}
          </button>
        </li>
      ))}
    </ul>
  );
}