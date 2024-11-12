// 리스트 3.3 더 많은 액션을 추가하고 추가 값 지정하기

let count = 0;

function reducer (state, action) {
  if (action.type === "inc") {
    return state + 1;
  }

  if (action.type === "dec") {
    return state - 1;
  }

  if (action.type === "add") {
    return state + action.payload;
  }

  if (action.type === "sub") {
    return state - action.payload;
  }

  if (action.type === "set") {
    return action.payload;
  }

  return state;
}

count = reducer(count, { type: "add", payload: 3 });
count = reducer(count, { type: "sub", payload: 10 });
count = reducer(count, { type: "set", payload: 41 });
count = reducer(count, { type: "inc" });