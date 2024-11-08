// 1.1.3 컴포넌트 유형 이해하기

const { useReducer } = require("react");

function MyComponent (props) {
    // 프롭을 어떤 방식으로든 활용할 수 있다.
    // 프롭 값을 포함하는 UI를 반환한다.
}



class MyComponent extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      // 여기서 상태를 설정한다.
    };
  }

  componentDidMount () {
    // 데이터 적재 등의 부수 효과를 수행한다.
  }

  render () {
    // 프롭 값과 상태에 따라 UI를 반환한다.
  }
}



function MyComponent (props) {
  // 지역 상태를 사용한다.
  const [value, setValue] = useState(initialValue);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // 부수 효과를 수행한다.
  });

  return (
    <p>{value} and {state.message}</p>
  );
}