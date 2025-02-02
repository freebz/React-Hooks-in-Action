// 리스트 7.8 격자 생성기

import {sessions as sessionNames} from "../../static.json";
import {addDays, shortISO} from "../../utils/date-wrangler";

export function getGrid (bookable, startDate) {

  const dates = bookable.days.sort().map(
    d => shortISO(addDays(startDate, d))
  );

  const sessions = bookable.sessions.map(i => sessionNames[i]);

  const grid = {};

  sessions.forEach(session => {
    grid[session] = {};
    dates.forEach(date => grid[session][date] = {
      session,
      date,
      bookableId: bookable.id,
      title: ""
    });
  });

  return {
    grid,
    dates,
    sessions
  }
}