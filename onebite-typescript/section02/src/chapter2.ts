// * 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "ttining"];

let boolArr: Array<boolean> = [true, false, true]; // 제네릭 문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"]; // 유니온 타입

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// * 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // 지정된 길이를 초과할 수 없다.
// tup1 = ['1', '2']; // 지정된 길이에 알맞더라도 타입을 다르게 설정할 수 없다.

let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = ['2', 1, true]; // 순서를 다르게 넣으면 오류 발생
// tup2 = [1]; // 길이를 다르게 넣으면 오류 발생

// 자바스크립트 코드로 컴파일되어 변환될 때는 배열로 변환된다.
// 따라서 배열 메서드를 사용할 수 있다.
// 배열 메서드를 사용할 때는 튜플의 길이 제한이 발동하지 않는다.
// => 어차피 자바스크립트의 배열이라고 생각하기 때문
// tup1.push(1);
// tup1.pop();

const users: [string, number][] = [
  ["띠닝", 1],
  ["앙걸", 2],
  ["지잉짱", 3],
  ["앙걸쿤", 4],
  // [5, "꽝꽝이"], // 오류 발생
];
