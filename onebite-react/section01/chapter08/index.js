// * 1. null 병합 연산자
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4); // 10

let var5 = var1 ?? var3;
console.log(var5); // 20

let var6 = var2 ?? var3;
console.log(var6); // 10 (둘 다 null 또는 undefined가 아닐 경우, 맨 앞의 값을 반환한다.)

let var7 = var3 ?? var2;
console.log(var7); // 20

// null 병합 연산자 활용하기기
let userName;
let userNickName = "ttining";

let displayName = userName ?? userNickName;
console.log(displayName); // ttining

console.clear();

// * 2. typeof 연산자
let var8 = 1;

var8 = "hello";
console.log(typeof var8); // string

var8 = 20;
console.log(typeof var8); // number

var8 = true;

let t1 = typeof var8;
console.log(t1); // boolean

console.clear();

// * 3. 삼항 연산자
let var9 = 10;

// 요구사항 : 변수 res에 var9의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var9 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
