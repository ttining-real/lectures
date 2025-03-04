// * 함수 타입 표현식

// const add = (a: number, b: number): number => a + b;

// 타입 별칭
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// * 호출 시그니처 (콜 시그니처)

type Operation2 = {
  (a: number, b: number): number;
  name: string; // 프로퍼티를 추가로 정의할 수 있다.
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// add2();
// add2.name; // 점 표기법으로 마치 객체를 사용하듯이 사용할 수 있다.
