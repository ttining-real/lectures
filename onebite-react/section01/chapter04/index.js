// * 1. 변수

// 변수 선언
let test;
// console.log(test); // undefined

// 변수 선언 및 초기화
let age = 100;
// console.log(age); // 100

// 재할당
age = 80;
// console.log(age); // 80

// * 2. 상수
// 초기값 없이 선언 불가
// const init; // 'const' declarations must be initialized.

// 상수 선언 및 초기화
const birth = "1925.01.13";

// 값 변경 불가
// birth = 940916; // Uncaught TypeError: Assignment to constant variable.

// console.log(birth); // 1925.01.13

// * 3. 변수 명명 규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
// let 1name; // 사용 불가
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// let let = 'value';

// * 4. 변수 명명 가이드
// 알아볼 수 없는 변수명 사용 ❌
// let a = 1;
// let b = 1;
// let c = a - b;

// 의미를 가진 변수명 사용 ⭕
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
