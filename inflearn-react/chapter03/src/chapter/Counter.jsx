// - value를 state로 만들기
// - Increase 버튼 함수 만들기 (+함수형 인자로)
// - Reset 버튼 함수 만들기

import { useState } from "react";

function Counter() {
  // let value = 0;
  const [value, setValue] = useState(0);

  let increaseClick = () => {
    console.log("Increase Click 1", { value });
    setValue(value + 1);
    console.log("Increase Click 2", { value });
  };

  return (
    <div>
      <h1>value: {value}</h1>
      <button onClick={increaseClick}>Increase value</button>
      <button
        onClick={() => {
          setValue(0);
        }}
      >
        Reset value
      </button>
    </div>
  );
}

export default Counter;
