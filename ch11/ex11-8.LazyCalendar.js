// 리스트 11.8 가짜 모듈을 만들고 컴포넌트를 지연 컴포넌트로 만들기

const moudle = {
  default: () => <div>Big Calendar</div>
};

function getPromise() {
  return new Promise(
    (resolve) => setTimeout(() => resolve(module), 3000)
  );
}

const LazyCalendar = lazy(getPromise);