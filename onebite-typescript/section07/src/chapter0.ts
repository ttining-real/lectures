// * 제네릭
// 일반적인, 포괄적인

// * 제네릭 함수
// 모든 타입을 포괄적으로 사용할 수 있는 범용적인 함수
// <T> : 타입 변수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUpperCase();
// num.toFixed();

if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);

let str = func("string");

// let arr = func([1, 2, 3]);

// T → 튜플 타입으로 추론
// let arr = func([1, 2, 3] as [number, number, number]);

let arr = func<[number, number, number]>([1, 2, 3]);
