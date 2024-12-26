// 리스트 12.9 리액트 17 문서의 wrapPromise 함수

// 릴레이(Relay)와 같은 Suspense 통합은 리액트와 통합을 위해
// 이 코드 같은 계약을 구현한다.
// 실제 구현은 훨씬 더 복잡하므로 이 코드를 여러분의 프로젝트에
// 그대로 포함시키지는 마라!
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}