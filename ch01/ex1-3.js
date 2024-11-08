// 1.3.3 이미 만들어진, 잘 테스트된 기능을 제공하는 서드파티 훅들

// 리액트 라우터

URL:      /quiz/:title:/qnum
코드:     const {title, qnum} = useParams();


// 리덕스

const dispatch = useDispatch();
dispatch({type: "add question", payload: /* 질문 데이터 */});


// 리액트 스프링

const props = useSpring({opacity: 1, from: {opacity: 0}});