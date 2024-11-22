// 리스트 6.3 ColorSample 컴포넌트

import React from "react";

export default function ColorSample({color}) {
  return color ? (
    <div
      className="colorSample"
      style={{ background: color }}
    />
  ) : null;
}