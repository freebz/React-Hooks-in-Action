// 리스트 4.6 리듀서에서 적재 및 오류 상태 관리하기

export default function reducer (state, action) {
  switch (action.type) {
    case "SET_GROUP": return { /* 변경되지 않음 */ }
    case "SET_BOOKABLE": return { /* 변경되지 않음 */ }
    case "TOGGLE_HAS_DETAILS": return { /* 변경되지 않음 */ }
    case "NEXT_BOOKABLE": return { /* 변경되지 않음 */ }

    case "FETCH_BOOKABLES_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: false,
        bookables: []
      };

    case "FETCH_BOOKABLES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        bookables: action.payload
      };

    case "FETCH_BOOKABLES_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}