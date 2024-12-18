// 리스트 10.2 BookablesPage 컴포넌트에 내포된 경로

import {Routes, Route} from "react-router-dom";

import BookablesView from "./BookablesView";
import BookableEdit from "./BookableEdit";
import BookableNew from "./BookableNew";

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