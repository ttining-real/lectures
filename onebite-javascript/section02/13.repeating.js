// 반복문

/* -------------------------------------------------------------------------- */
// (1) for 문
// 1, 2, 3, 4, 5
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// 1, 2, 3, 4, 5
// for (let i = 1; i < 6; i++) {
//   console.log(i);
// }

// 5, 4, 3, 2, 1
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }

/* -------------------------------------------------------------------------- */
// (2) while 문
// let i = 1;

// while (i < 6) {
//   console.log(i);
//   i++;
// }

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

/* -------------------------------------------------------------------------- */
// (3) for 문을 이용해 배열 요소 순회하기
// let arr = [1, 2, 3, 4, 5];

// console.log(arr.length); // 5
// console.log(arr[0]); // 1

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let person = {
//   name: "홍길동",
//   age: 25,
//   height: 180,
// };

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let newArray = Object.keys(person); // ['name', 'age', 'height']

// for (let i = 0; i < newArray.length; i++) {
//   let nowKey = newArray[i];
//   // console.log(person[nowKey]); // 홍길동, 25, 180이 순차적으로 출력
//   console.log(`key: ${nowKey}, values: ${person[nowKey]}`);
// }

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["height"]);

// let newArray = Object.values(person);
// for (let i = 0; i < newArray.length; i++) {
//   console.log(newArray[i]);
// }

// let newArray = Object.entries(person);
// console.log(newArray);

// for (let i = 0; i < newArray.length; i++) {
//   let nowArray = newArray[i];
//   console.log(`${nowArray[0]}: ${nowArray[1]}`);
// }
// for (let i = 0; i < newArray.length; i++) {
//   console.log(`${newArray[i][0]}: ${newArray[i][1]}`);
// }

/* -------------------------------------------------------------------------- */
// (4) for of 문
let arr = [1, 2, 3, 4, 5];

for (let i of arr) {
  console.log(i);
}
