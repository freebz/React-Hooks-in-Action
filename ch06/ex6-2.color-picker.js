// 리스트 6.2 ColorChoiceText 컴포넌트

import React from "react";

export default function ColorChoiceText({color}) {
  return color ? (
    <p>The selected color is {color}!</p>
  ) : (
    <p>No color has been selected!</p>
  )
}