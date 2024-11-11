// 리스트 2.7 선택한 방이 하드코딩되어 있는 BookablesList 컴포넌트

import {bookables} from "../../static.json";

export default function BookablesList () {

  const group = "Rooms";

  const bookablesInGroup = bookables.filter(b => b.group === group);

  const bookableIndex = 1;

  return (
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((b, i) => (
        <li
          key={b.id}
          className={i === bookableIndex ? "selected" : null}
        >
          <button
            className="btn"
          >
            {b.title}
          </button>
        </li>
      ))}
    </ul>
  );
}