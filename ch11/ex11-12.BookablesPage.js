// 리스트 11.12 BookablesPage의 중첩된 컴포넌트를 지연 적재하기

import {lazy} from "react";
import {Routes, Route} from "react-router-dom";

const BookablesView = lazy(() => import("./BookablesView"));
const BookableEdit = lazy(() => import("./BookableEdit"));
const BookableNew = lazy(() => import("./BookableNew"));

export default function BookablesPage () {
  return (
    <Routes>
      <Route path="/:id">
        <BookablesView/>
      </Route>
      <Route path="/">
        <BookablesView/>
      </Route>
      <Route path="/:id/edit">
        <BookableEdit/>
      </Route>
      <Route path="/new">
        <BookableNew/>
      </Route>
    </Routes>
  );
}