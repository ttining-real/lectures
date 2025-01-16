// * Truthy & Falsy

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("Falsy"); // Falsy
}

console.clear();

// 2. Truthy한 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("Truthy"); // Truthy
}

console.clear();

// 3. 활용 사례
function printName(person) {
  // 1️⃣ Truthy & Falsy를 이용하지 않을 경우
  // if (person === undefined || person === null) {
  //   console.log("person의 값이 없음");
  //   return;
  // }

  // 2️⃣ Truthy & Falsy를 이용할 경우
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }

  console.log(person.name);
}

let person = { name: "ttining" };
// let person;
// let person = null;

printName(person); // ttining
