// 리스트 4.7 데이터 읽기 함수

export default function getData (url) {

  return fetch(url)
    .then(resp => {

      if (!resp.ok) {
        throw Error("There was a problem fetching data.");
      }

      return resp.json();
    });
}