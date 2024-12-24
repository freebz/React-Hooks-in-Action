// 리스트 11.3 정적 임포트(index.js)

import showMessage, {sayHi} from "./helloModule";

function handleClick () {
  showMessage("messagePara", "Hello World!");
  sayHi("hiPara");
}

document
  .getElementById("btnMessages")
  .addEventListener("click", handleClick);