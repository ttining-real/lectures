// * 배열

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴
let arrC = [1, 2, 3];
console.log(arrC); // [1, 2, 3]

let arrD = [
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

console.log(arrD);

console.clear();

// 2. 배열 요소 접근
let item1 = arrD[0];
let item2 = arrD[1];
let item3 = arrD[2];

console.log(item1, item2, item3); // 1 2 3

arrD[0] = "hello";
console.log(arrD);
