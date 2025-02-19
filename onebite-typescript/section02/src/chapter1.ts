// TODO 원시 타입
// * number
// : number → 타입 주석(annotation)
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1 = 'hello'; → 오류 발생
// 문자 타입 메서드 사용 시 오류 발생

// * string
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = `hello ${num1}`;

// str1 = 123; → 오류 발생
// 숫자 타입 메서드 사용 시 오류 발생

// * boolean
let bool1: boolean = true;
let bool2: boolean = false;

// * null
let null1: null = null;

// * undefined
let unde1: undefined = undefined;

// number 타입이 아닌 null 같은 다른 타입의 값을 넣어야 할 경우
// let numA: number = null;

// TODO 리터럴 타입
// 리터럴 → 값

let numA: 10 = 10;
// numA = 12; → 오류 발생

let strA: "hello" = "hello";

let boolA: true = true;
// let boolB: true = false; → 오류 발생
