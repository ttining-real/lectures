// 자료형과 형 변환

// 숫자형
let num1 = 123;
let num2 = 10.1254;
let num3 = Infinity;
let num4 = 100 / 0;
let num5 = NaN;
let num6 = "javascript" / 10;

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);
console.log(num3); // Infinity
console.log(typeof num4);
console.log(num4); // Infinity
console.log(typeof num5);
console.log(num5); // NaN
console.log(typeof num6);
console.log(num6); // NaN

// BigInt
let bigNum1 = 999999999999999999n;
let bigNum2 = BigInt("999999999999999999");

console.log(typeof bigNum1); // bigInt
console.log(typeof bigNum2); // bigInt

// string
let name = "ttining";
console.log(name);
console.log(typeof name);

let intro = `제 이름은 ${name} 입니다.`; // 템플릿 리터럴
console.log(intro);
console.log(typeof intro);

// boolean
// true or false
let isClicked = false;

console.log(isClicked);
console.log(typeof isClicked);

if (isClicked) {
  console.log("클릭 O");
} else {
  console.log("클릭 X");
}

// Null
// 존재하지 않음, 알 수 없는 값
let num = null;
console.log(typeof num); // object
console.log(num === null); // true

// Undefined
// 값이 할당되지 않은 상태
let empty;
console.log(typeof empty); // undefined

// 묵시적 형 변환
let ex1 = "15";
let ex2 = 5;

console.log(ex1 / ex2); // 3

// 명시적 형 변환
let number1 = "15";
let number2 = 5;

console.log(number1 + number2); // 155
console.log(parseInt(number1) + number2); // 20
