// 리스트 6.4 ColorPicker 컴포넌트

import React from "react";

export default function ColorPicker({colors = [], color, setColor}) {
  return (
    <ul>
      {colors.map(c => (
        <li
          key={c}
          className={color === c ? "selected" : null}
          style={{ background: c }}
          onClick={() => setColor(c)}
        >
          {c}
        </li>
      ))}
    </ul>
  );
}