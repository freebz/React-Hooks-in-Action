// 리스트 6.7 예약 가능 자원의 상태를 BookablesView 컴포넌트로 이동시키기

import {useReducer, Fragment} from "react";

import BookablesList from "./BookablesList";
import BookableDetails from "./BookableDetails";

import reducer from "./reducer";

const initialState = {
  group: "Rooms",
  bookableIndex: 0,
  bookables: [],
  isLoading: true,
  error: false
};

export default function BookablesView () {
  const [state, dispatch] = useReducer(reducer, initialState);

  const bookablesInGroup = state.bookables.filter(
    b => b.group === state.group
  );
  const bookable = bookablesInGroup[state.bookableIndex];

  return (
    <Fragment>
      <BookablesList state={state} dispatch={dispatch}/>
      <BookableDetails bookable={bookable}/>
    </Fragment>
  );
}