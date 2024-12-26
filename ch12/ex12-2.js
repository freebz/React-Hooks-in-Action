// 리스트 12.2 프로미스의 상태에 접근할 수 있는 함수 얻기

export function getStatusChecker (promiseIn) {
  let status = "pending";
  let result;

  const promise = promiseIn
    .then((response) => {
      status = "success";
      result = response;
    })

    .catch((error) => {
      status = "error";
      result = error;
    });
  
  return () => ({promise, status, result});
}