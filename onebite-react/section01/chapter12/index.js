// 함수 선언
function funcA() {
  console.log("funcA");
}

let varA = funcA;

console.log(varA);
//funcA() {
//   console.log("funcA");
// }

let varB = funcA();
console.log(varB); // funcA

// * 함수 표현식 (호이스팅 X)
let varC = function () {
  console.log("익명 함수");
};

varC(); // 익명 함수

console.clear();

// * 화살표 함수

// let varD = () => {
//   return 1;
// };

let varD = () => 1;

console.log(varD()); // 1

let varE = (value) => value + 1;

console.log(varE(10)); // 11

let varF = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varF(10)); // 10 11
