// 함수 선언
function funcA() {
  console.log("funcA");
}

let varA = funcA;

// console.log(varA);

// 함수 표현식 (호이스팅 X)
let varB = function () {
  // console.log("funcB");
};

varB();
// funcB();

// 화살표 함수
// let varC = (value) => value + 1;
let varC = (value) => {
  console.log("value: ", value);

  return value + 1;
};

console.log(varC(10));
