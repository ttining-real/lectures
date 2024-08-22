// * 단락 평가

// function returnFalse() {
//   console.log("False 함수");

//   // return false;
//   return undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   // return true;
//   return 10;
// }

// console.log(returnFalse() && returnTrue());
// console.log(returnTrue() && returnFalse());
// console.log(returnTrue() || returnFalse());

// function printName(person) {
//   if (!person) {
//     console.log("person에 값이 없음");
//     return;
//   }
//   console.log(person.name);
// }

// function printName(person) {
//   console.log(person && person.name);
// }

// printName();

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "띠닝" });

// T || T (첫 번째 truthy한 값)
// T && T (두 번째 truthy한 값)
