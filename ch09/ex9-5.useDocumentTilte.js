// 리스트 9.5 별도의 파일에서 익스포트하는 useDocumentTitle 훅

import {useEffect} from "react";

export default function useDocumentTilte (title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}