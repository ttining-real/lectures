/* -------------------------------------------------------------------------- */
/*                                   형 변환                                   */
/* -------------------------------------------------------------------------- */

// * 1. 묵시적 형 변환
// - 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str; // num 변수의 number 타입이 string 타입으로 묵시적 형 변환됨
console.log(result); // 1020 (문자열 간의 덧셈 연산 "10" + "20")

console.clear();

// * 2. 명시적 형 변환
// - 프로그래머가 내장 함수 등을 이용해서 직접 형 변환을 명시

// * 문자열 → 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(strToNum1); // 10
console.log(10 + strToNum1); // 20 (10 + 10)

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN (문자열 안에 숫자와 문자가 함께 있을 경우에는 Number 내장 함수 사용 불가)

let strToNum3 = parseInt(str2); // Number() 대신 parseInt()를 사용하면 된다.
console.log(strToNum3); // 10
console.log(10 + strToNum3); // 20

// "asdf10개" 이런 식으로 숫자가 아닌 문자가 앞에 올 경우, parseInt를 사용해도 NaN이 나온다.

console.clear();

// * 숫자 → 문자열
let num1 = 20;
let numToStr1 = String(num1); // (숫자 → 문자열로 형 변환)
console.log(numToStr1); // 20
console.log(numToStr1 + "입니다."); // 20입니다.
