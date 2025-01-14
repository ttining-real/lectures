// * 1. 대입 연산자
let var1 = 1;

// * 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

console.log(num1); // 5
console.log(num2); // 1
console.log(num3); // 6
console.log(num4); // 1.5
console.log(num5); // 1

console.clear();

// 연산자 우선 순위
let num6 = 1 + 2 * 10;
console.log(num6); // 21

let num7 = (1 + 2) * 10;
console.log(num7); // 30 (우선 순위가 낮은 부분을 먼저 연산하고 싶을 경우, 해당 부분을 소괄호로 묶어주면 된다.)

console.clear();

// * 3. 복합 대입 연산자
let num8 = 10;

// num8 = num8 + 20; // 변수명을 2번 작성

num8 += 20;
console.log(num8); // 30

num8 -= 20;
console.log(num8); // 10

num8 *= 20;
console.log(num8); // 200

num8 /= 20;
console.log(num8); // 10

num8 %= 10;
console.log(num8); // 0

console.clear();

// * 4. 증감 연산자
let num9 = 10;
console.log(++num9); // 11 (전위 연산)
console.log(num9++); // 11 (후위 연산)
// 라인이 바뀌고 num9가 1 증가함
console.log(num9); // 12

console.clear();

// * 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

console.log(or, and, not); // true false false

console.clear();

// * 6. 비교 연산자
// `===` : 동등 비교 연산자
let comp1 = 1 === 2;
console.log(comp1); // false

// `!==` : 비동등 비교 연산자
let comp2 = 1 !== 2;
console.log(comp2); // true

let comp_test1 = 1 === "1"; // false (값과 자료형을 비교)
let comp_test2 = 1 == "1"; // true (값 자체만 비교)
console.log(comp_test1, comp_test2); // false true

console.clear();

// 대소 비교
// 미만, 초과
let comp3 = 2 > 1;
let comp4 = 2 < 1;

console.log(comp3); // true
console.log(comp4); // false

// 이하, 이상 (같거나 크다, 작거나 같다)
let comp5 = 2 >= 2;
let comp6 = 2 <= 2;

console.log(comp5); // true
console.log(comp6); // true
