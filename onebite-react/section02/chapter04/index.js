/* -------------------------------------------------------------------------- */
/*                              1. Spread 연산자                              */
/* -------------------------------------------------------------------------- */

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// 배열의 길이가 바뀔 수 있음
// let arr3 = [4, arr1[0], arr1[1], arr1[2], 5, 6];

// ✅ Spread 연산자 사용
let arr3 = [4, ...arr1, 5, 6];

console.log(arr3); // [4, 1, 2, 3, 5, 6]

console.clear();

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  // 번거로움
  // a: obj1.a,
  // b: obj1.b,

  // ✅ Spread 연산자 사용
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2); // [a: 1, b: 2, c: 3, d: 4]

console.clear();

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1); // 1 2 3

console.clear();

/* -------------------------------------------------------------------------- */
/*                              2. Rest 매개변수                              */
/* -------------------------------------------------------------------------- */
// → Rest는 나머지, 나머지 매개변수
// →

function funcB(...rest) {
  console.log(rest); // [1, 2, 3]
  console.log(...rest); // 1 2 3
}

funcB(...arr1);

function funcC(one, ...rest) {
  console.log(one); // 1
  console.log(rest); // [2, 3]
  console.log(...rest); // 2 3
}

funcC(...arr1);
