// 리스트 11.2 디폴트와 이름 붙인 익스포트가 있는 모듈 만들기(helloModule.js)

export default function sayMessage (id, msg) {
  document.getElementById(id).innerHTML = msg;
}

export function sayHi (id) {
  sayMessage(id, "Hi");
}