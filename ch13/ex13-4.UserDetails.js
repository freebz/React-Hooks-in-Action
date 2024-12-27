// 리스트 13.4 UserDetails에서 isPending을 써서 클래스 이름 설정하기

export default function UserDetails ({userID, isPending}) {
  const {data: user} = useQuery(/* 사용자 상세 정보 읽어오기 */);

  return (
    <div
      className={isPending ? "item user user-pending" : "item user"}
    >
      {/* 변경되지 않은 UI */}
    </div>
  );
}