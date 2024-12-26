// 리스트 12.1 Message 컴포넌트가 데이터를 읽어오기 위해 함수를 호출한다.

function Message () {
  const data = getMessageOrThrow();
  return <p className="message">{data.message}</p>;
}