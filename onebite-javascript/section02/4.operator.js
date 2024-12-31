// 연산자

/* -------------------------------------------------------------------------- */
/*                                 산술 연산자                                 */
/* -------------------------------------------------------------------------- */
let num1 = 10;
let num2 = 5;

// 사칙 연산자
console.log(num1 + num2); // 15
console.log(num1 - num2); // 5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 2

// 나머지 연산자
console.log(num1 % 2); // 0
console.log(num2 % 2); // 1

// let num = 10;

// 증감 연산자 (증가/감소 연산자)
// 후위 연산 : 특정 변수의 값에 1을 더하거나 빼기 바로 직전의 값을 출력
// 전위 연산 : 특정 변수의 값에 1을 더하거나 뺀 결과 값을 출력
let num = 10;

// 후위 연산
console.log(num++); // 10
console.log(num);

// 전위 연산
console.log(++num); // 12
console.log(num);

console.log(num--); // 12
console.log(num); // 11
console.log(--num); // 10

console.clear();

/* -------------------------------------------------------------------------- */
/*                               대입 연산자 (=)                               */
/* -------------------------------------------------------------------------- */
// 변수에 특정 값을 대입
let any = 10;
any = any + 5;

console.log(any); // 15

// 복합 대입 연산자 (+=, -=, *=, /=, %=)
let any2 = 10;
any2 += 5;
console.log(any2);

console.clear();

/* -------------------------------------------------------------------------- */
/*                                 비교 연산자                                 */
/* -------------------------------------------------------------------------- */
// 두 개의 값이 일치 & 불일치 하는지 비교 (==, ===, !=, !==)
// 두 개의 값을 대소 비교 (<, >, <=, >=)

// 일치 (==, ===)
let qwe1 = 10;
let qwe2 = "10";

console.log(qwe1 == qwe2); // true
console.log(qwe1 === qwe2); // false

// 불일치 (!=, !==)
console.log(qwe1 != qwe2); // false
console.log(qwe1 !== qwe2); // true

console.clear();

// 대소비교
let a = 10;
let b = 20;
let c = 30;

console.log(a < b); // true
console.log(a > b); // false
console.log(b >= c); // false
console.log(a <= c); // true

/* -------------------------------------------------------------------------- */
/*                                 연결 연산자                                 */
/* -------------------------------------------------------------------------- */
let price = 10000;
console.log("가격: " + price + "원");

/* -------------------------------------------------------------------------- */
/*                                 논리 연산자                                 */
/* -------------------------------------------------------------------------- */
// true or false - NOT(!), OR(||), AND(&&)
let isClicked = true;
let isOpened = false;

// NOT (!)
console.log(!isClicked); // false
console.log(!isOpened); // true

console.clear();

// OR (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// AND (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

/* -------------------------------------------------------------------------- */
/*                               null 병합 연산자                              */
/* -------------------------------------------------------------------------- */
// A ?? B
// 기호의 왼쪽 값이 null이거나 undefined일 경우, 오른쪽 값 반환
// 기호의 왼쪽 값이 null 또는 undefined가 아닐 경우, 왼쪽 값 반환

let asd1;
let asd2 = 10;

console.log(asd1 ?? 20); // 20
console.log(asd2 ?? 20); // 10

/* -------------------------------------------------------------------------- */
/*                                 삼항 연산자                                 */
/* -------------------------------------------------------------------------- */
// A ? B : C
let zxc = 100;
let result = zxc % 2 === 0 ? "짝수" : "홀수";

console.log(result); // 짝수
