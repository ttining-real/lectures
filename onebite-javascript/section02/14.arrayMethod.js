// 배열 메서드 - 1
// let arr = [1, 2, 3, 4, 5];

// let newArray = [];

// arr.forEach((elm) => {
//   console.log(elm);
// });

// for (let i = 0; i < arr.length; i++) {
//   newArray.push(arr[i] * 10);
// }

// let newArray = arr.map((elm) => {
//   return elm * 10;
// });

// console.log(newArray);

// let colors = ["green", "blue", "purple"];

// console.log(colors[2]); // purple

// 배열의 길이가 매우 길다면,
// 배열의 가장 마지막 요소를 찾기 위해
// colors.length - 1 이라는 코드를 작성해야 한다.
// console.log(colors[colors.length - 1]);

// console.log(colors.at(1));
// console.log(colors.at(-1));

// let colors = [
//   { id: 1, color: "green" },
//   { id: 2, color: "blue" },
//   { id: 3, color: "purple" },
// ];

// console.log(colors.indexOf("blue", 1)); // -1

// let idx = colors.findIndex((elm) => {
//   return elm.color === "purple";
// });

// colors.findIndex((elm, idx, arr) => {
//   return console.log(`${idx} 번째 값은 id: ${elm.id}, color: ${elm.color}`);
// });

// colors.findIndex((elm, idx, arr) => {
//   return console.log(arr);
// });

// console.log(idx);

// 일반
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};

// let c1 = colors.c1;
// let c2 = colors.c2;
// let c3 = colors.c3;

// console.log(c1);
// console.log(c2);
// console.log(c3);

// 객체 구조 분해 할당
// let { c1, c2, c3 } = colors;

// console.log(c1);
// console.log(c2);
// console.log(c3);

let c1 = colors.c1;
let c2 = colors.c2;
let c3 = colors.c3;

console.log(c1);
console.log(c2);
console.log(c3);
