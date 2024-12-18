// 리스트 9.15 useGrid 훅

import {useMemo} from "react";
import {getGrid} from "./grid-builder";

export function useGrid (bookable, startDate) {
  return useMemo(
    () => bookable ? getGrid(bookable, startDate) : {},
    [bookable, startDate]
  );
}