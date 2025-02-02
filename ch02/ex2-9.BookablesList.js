// 리스트 2.9 BookablesList 컴포넌트에 이벤트 핸들러 추가

import data from "../../static.json";
const {bookables} = data;

export default function BookablesList () {
  const group = "Rooms";
  const bookablesInGroup = bookables.filter(b => b.group === group);

  let bookableIndex = 1;

  function changeBookable (selectedIndex) {
    bookableIndex = selectedIndex;
    console.log(selectedIndex);
  }

  return (
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((b, i) => (
        <li
          key={b.id}
          className={i === bookableIndex ? "selected" : null}
        >
          <button
            className="btn"
            onClick={() => changeBookable(i)}
          >
            {b.title}
          </button>
        </li>
      ))}
    </ul>
  );
}