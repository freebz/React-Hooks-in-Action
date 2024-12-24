// 리스트 11.4 import 함수를 사용해 코드를 동적으로 적재하기(index.js)

function handleClick() {
  import("./helloModule")
    .then((module) => {
      module.default("messagePara", "Hello World!");
      module.sayHi("hiPara");
    });
}

document
  .getElementById("btnMessages")
  .addEventListener("click", handleClick);