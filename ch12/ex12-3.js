// 리스트 12.3 적절히 예외나 프로미스를 던지는 데이터 적재 함수를 반환하는 함수

export function makeThrower (promiseIn) {
  const checkStatus = getStatusChecker(promiseIn);

  return function () {
    const {promise, status, result} = checkStatus();

    if (status === "pending") throw promise;
    if (status === "error") throw result;
    return result;
  }
}