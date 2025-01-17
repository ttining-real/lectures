/* -------------------------------------------------------------------------- */
/*                                  배열 순회                                  */
/* -------------------------------------------------------------------------- */

let arr = [1, 2, 3];

// * 1-1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1 2 3
}

console.clear();

let arr2 = [4, 5, 6, 7, 8];

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]); // 4 5 6 7 8
}

console.clear();

// * 1-2. for of 반복문 (배열 순회)
for (let item of arr) {
  console.log(item); // 1 2 3
}

console.clear();

/* -------------------------------------------------------------------------- */
/*                                  객체 순회                                 */
/* -------------------------------------------------------------------------- */
let person = {
  name: "ttining",
  age: 100,
  hobby: "🎵",
};

// * 2-1. Object.keys 사용
// ㄴ 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

console.log(keys); // ['name', 'age', 'hobby']

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]); // name age hobby
}

console.clear();

for (let key of keys) {
  // console.log(key); // name age hobby

  const value = person[key];
  console.log(key, value); // name ttining age 30 hobby 🎵
}

console.clear();

// * 2-2. Object.values
// ㄴ 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values); // ['ttining', '100', '🎵']

for (let value of values) {
  console.log(value); // ttining 100 🎵
}

console.clear();

// * 2-3. for in
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}

// for of : 배열에만 사용 가능
// for in : 객체에만 사용 가능

// console.log(person.name);
// console.log(person["name"]);
