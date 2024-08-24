// 커스텀 훅 (커스텀 훅 함수의 이름은 use로 시작해야 함)
import { useState } from 'react';

function useInput() {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
