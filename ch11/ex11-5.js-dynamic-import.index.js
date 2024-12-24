// 리스트 11.5 동적으로 임포트한 모듈 프로퍼티 구조 분해하기

function handleClick() {
  import("./helloModule")
    .then(({default: showMessage, sayHi}) => {
      showMessage("messagePara", "Hello World!");
      sayHi("hiPara");
    });
}

document
  .getElementById("btnMessages")
  .addEventListener("click", handleClick);