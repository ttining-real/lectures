import { Component } from "react";

class ClassComponent extends Component {
  state = {
    value: 0,
  };

  // 컴포넌트가 생성될 때 가장 먼저 실행
  constructor(props) {
    console.log("[Class] constructor");
    super(props);
    this.state = {
      value: 0,
    };
  }

  // 컴포넌트가 렌더링 되기 전에 실행
  // (return 값이 false면 렌더링 중단)
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Class] shouldComponentUpdate");
    return true;
  }

  // 컴포넌트의 마운트가 끝나면 실행
  componentDidMount() {
    console.log("[Class] componentDidMount");
  }

  // 컴포넌트가 업데이트 된 후 실행
  componentDidUpdate(prevProps, prevState) {
    console.log("[Class] componentDidUpdate");
  }

  // 컴포넌트 언마운트 되기 직전에 실행
  componentWillUnmount() {
    console.log("[Class] componentWillUnmount");
  }

  render() {
    console.log("[Class] render");

    return (
      <div>
        <h1>ClassComponent</h1>
        <h1>value: {this.state.value}</h1>
        <button
          onClick={() => {
            this.setState((state) => ({
              value: state.value + 1,
            }));
          }}
        >
          Increase value
        </button>
      </div>
    );
  }
}

export default ClassComponent;
