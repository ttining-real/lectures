/* -------------------------------------------------------------------------- */
/*                        5가지 요소 순회 및 탐색 메서드                        */
/* -------------------------------------------------------------------------- */

// * 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(`${idx}: ${item * 2}`);
  // ✅ 결과
  // 0: 2
  // 1: 4
  // 2: 6
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr); // [2, 4, 6]

console.clear();

// * 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
let isInclude2 = arr2.includes(10);

console.log(isInclude); // true
console.log(isInclude2); // false

console.clear();

// * 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

console.log(index); // 1
// let arr3 = [2, 2, 2]; // 0
// let arr3 = [20, 20, 20]; // -1

console.clear();

// * 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];

const findedIndex = arr4.findIndex((item) => {
  if (item === 2) return true;
});

console.log(findedIndex); // 1

const findedIndex2 = arr4.findIndex((item) => item % 2 !== 0);

console.log(findedIndex2); // 0

const findedIndex3 = arr4.findIndex((item) => item === 999);

console.log(findedIndex3); // -1

console.clear();

let objectArr = [{ name: "ttining" }, { name: "annggeol" }];

console.log(objectArr.indexOf({ name: "ttining" })); // -1
console.log(objectArr.findIndex((item) => item.name === "ttining")); // 0

console.clear();

// * 5. find
// 모든 요소를 순회하면서, 콜백함수를 만족하는 요소를 그대로 반환

let arr5 = [{ name: "ttining" }, { name: "annggeol" }];

const finded = arr5.find((item) => item.name === "ttining");
console.log(finded); // {name: 'ttining'}
