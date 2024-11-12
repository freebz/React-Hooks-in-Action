// 리스트 3.2 카운터를 위한 간단한 리듀서

let count = 0;

function reducer (state, action) {
  if (action === "inc") {
    return state + 1;
  }
  if (action === "dec") {
    return state - 1;
  }
  return state;
}

count = reducer(count, "inc");
count = reducer(count, "inc");
count = reducer(count, "dec");