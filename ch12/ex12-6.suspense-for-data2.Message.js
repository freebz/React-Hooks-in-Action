// 리스트 12.6 데이터 적재를 위한 프롭을 Message에게 전달한다.

function Message ({getMessage, next}) {
  const data = getMessage();
  return (
    <>
      <p className="message">{data.message}</p>
      <button onClick={next}>Next</button>
    </>
  );
}