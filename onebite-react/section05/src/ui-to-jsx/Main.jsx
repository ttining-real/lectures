// ⚠️ JSX 문법 사용 시 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.

function Main() {
  const number = 10;
  const obj = { a: 1 };

  return (
    <main>
      <h1>main</h1>
      <h2>{number}</h2>
      <h2>{number + 10}</h2>
      <h2>{number % 2 === 0 ? '짝수' : '홀수'}</h2>
      <p>{1}</p>
      <p>{'안녕'}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{[1, 2, 3]}</p>
      <p>{null}</p>
      {/* 객체 자체 렌더링은 안됨 */}
      {/* <p>{obj}</p> */}
      <p>{obj.a}</p>
      <p>{obj['a']}</p>
    </main>
  );
}

export default Main;
