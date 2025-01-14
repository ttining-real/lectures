// * 배열
// 여러 개의 값을 순차적으로 담을 수 있는 자료형

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴

let arrC = [
  1,
  2,
  3,
  true,
  "hello",
  null,
  undefined,
  () => {},
  {},
  [],
  function () {},
];

console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];
let item3 = arrC[2];

console.log(item1, item2, item3);

arrC[0] = "hello";
console.log(arrC);
