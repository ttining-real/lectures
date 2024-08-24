// *💡 Hook 관련 tip
import useInput from './../../hooks/useInput';

// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수 없다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.

function HookExam() {
  // 조건문 안에 훅 사용 ❌
  // if(true) {
  //   const state = useState();
  // }

  // 반복문 안에 훅 사용 ❌
  // for(;;){
  //   const ref = useRef()
  // }

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <p>Hook Example</p>
      <input type="text" value={input} onChange={onChange} />
      <input type="text" value={input2} onChange={onChange2} />
    </div>
  );
}

export default HookExam;
