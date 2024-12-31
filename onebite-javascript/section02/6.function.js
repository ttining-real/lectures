/* -------------------------------------------------------------------------- */
/*                                    함수                                    */
/* -------------------------------------------------------------------------- */

//            매개 변수
// function add(num1, num2) {
//   console.log(num1 + num2);
// }

//   인수
// add(10, 15); // 25

/* -------------------------------------------------------------------------- */
/*                                 return 문                                  */
/* -------------------------------------------------------------------------- */
function add(num1, num2) {
  return num1 + num2;
  console.log("함수 호출"); // 실행되지 않음 (Early return pattern)
}

let result = add(10, 15);
console.log(`두 숫자를 더한 결과는 ${result} 입니다.`);

/* -------------------------------------------------------------------------- */
/*                            Early return pattern                            */
/* -------------------------------------------------------------------------- */

// 가독성 저하
// function compare(num) {
//   if (num === 0) {
//     console.log("num의 값이 0 입니다.");
//   } else if (num < 0) {
//     console.log("num의 값이 0 보다 작습니다.");
//   } else {
//     if (num >= 10) {
//       console.log("num의 값이 10 보다 크거나 같습니다.");
//     } else {
//       console.log("num의 값이 0 보다 크고 10보다 작습니다.");
//     }
//   }
// }

// compare(-1);

function compare(num) {
  if (num === 0) {
    return "num의 값이 0 입니다.";
  }
  if (num < 0) {
    return "num의 값이 0 보다 작습니다.";
  }
  if (num >= 10) {
    return "num의 값이 10 보다 크거나 같습니다.";
  }
  return "num의 값이 0 보다 크고 10 보다 작습니다.";
}

console.log(compare(-1));

// 함수의 실행 순서
function print() {
  console.log(1);
  console.log(2);
}

console.log(3);
print();
console.log(4);
