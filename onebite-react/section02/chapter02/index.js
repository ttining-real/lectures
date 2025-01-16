// * 단락 평가

let varA = false;
let varB = true;

// AND 연산자
console.log(varA && varB); // false

// OR 연산자
console.log(varA || varB); // true

console.clear();

// 예제 (1)
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// console.log(returnFalse() && returnTrue()); // false
// console.log(returnTrue() && returnFalse()); // false

// console.log(returnFalse() || returnTrue()); // true
console.log(returnTrue() || returnFalse()); // true

console.clear();

// 예제 (2)
function returnFalse2() {
  console.log("False 함수");
  return undefined;
}

function returnTrue2() {
  console.log("True 함수");
  return 10;
}

console.log(returnTrue2() || returnFalse2()); // 10
console.log(returnFalse() || returnTrue()); // undefined

console.clear();

// 예제 (3)
function printName(person) {
  // (1)
  // if (!person) {
  //   console.log("person에 값이 없음");
  //   return;
  // }

  // console.log(person.name);

  // (2)
  // console.log(person && person.name);

  // (3)
  const name = person && person.name;
  console.log(name || "person에 값이 없음");
}

printName();
printName({ name: "ttining" });

// T || T (첫 번째 truthy한 값)
// T && T (두 번째 truthy한 값)
