/* -------------------------------------------------------------------------- */
/*                                    자료형                                   */
/* -------------------------------------------------------------------------- */

// * 1. Number Type
let num1 = 27; // 정수
let num2 = 1.5; // 실수
let num3 = -20; // 음수

// 숫자형 타입은 사칙연산을 지원한다.
console.log(num1 + num2); // 28.5
console.log(num1 - num2); // 25.5
console.log(num1 * num2); // 40.5
console.log(num1 / num2); // 18
console.log(num1 % num2); // 0 (나머지 연산(모듈러 연산))

let inf = Infinity; // 양의 무한대
let minf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number (수치 연산에 실패했을 때 결과값)

console.log(1 * "hello"); // NaN

console.clear();

// * 2. String Type
let myName = "띠닝"; // 문자열은 따옴표 사용
let myLocation = "구로구";
let introduce = myName + myLocation; // 문자열은 덧셈 연산을 지원한다.

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; // 템플릿 리터럴 문법 : 백틱(`)을 사용하여 문자열 안에 변수의 값을 동적으로 넣을 수 있다.

console.log(introduce); // 띠닝구로구
console.log(introduceText); // 띠닝은 구로구에 거주합니다.

console.clear();

// * 3. Boolean Type
// 참 또는 거짓을 저장하는 타입 (주로 현재의 상태를 의미할 때 사용)
let isSwitchOn = true;
let isEmpty = false;

// * 4. Null Type (아무것도 없다.)
let empty = null; // empty 변수에 아무런 값도 담겨있지 않음을 표현

// * 5. Undefined Type
let none; // 변수를 선언하고 아무런 값을 할당하지 않았을 때, 자동으로 undefined가 할당된다.
console.log(none); // undefined

// null 🆚 undefined
// - null
//   - 개발자가 직접 명시적으로 할당
// - undefined
//   - 변수 선언 후, 값을 할당하지 않았을 때 자동으로 할당
//   - 초기화를 하지 못했거나, 존재하지 않는 값을 불러오려고 할 때 발생
