// * 1. 콜백함수

// (1)
// function main(value) {
//   value();
// }

// function sub() {
//   console.log("i am sub");
// }

// main(sub); // i am sub

// (2)
function main(value) {
  console.log(1);
  console.log(2);
  value();
  console.log("end");
}

// function sub() {
//   console.log("i am sub");
// }

// main(sub); // i am sub

// (3)
main(function () {
  console.log("i am sub");
}); // i am sub

// (4)
main(() => {
  console.log("i am sub");
}); // i am sub

console.clear();

// * 2. 콜백함수의 활용

// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }

// repeat(5); // 1 2 3 4 5

// console.clear();

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

// repeatDouble(5); // 2 4 6 8 10

// function repeatTriple(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 3);
//   }
// }

// repeatTriple(5); // 2 4 6 8 10

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// repeat
repeat(5, (idx) => {
  console.log(idx); // 1 2 3 4 5
});

// repeatDouble
repeat(5, (idx) => {
  console.log(idx * 2); // 1 2 3 4 5
});

// repeatTriple
repeat(5, (idx) => {
  console.log(idx * 3); // 1 2 3 4 5
});
