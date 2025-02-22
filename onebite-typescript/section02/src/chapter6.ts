// * any
// 특정 변수의 타입을 확실히 모를 때 사용하는 타입

let anyVar: any = 10;
// anyVar = "hello";
// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed;

let num: number = 10;
num = anyVar;

// * Unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // any 타입과 다르게 모든 타입의 변수에 할당할 수 없다.

// unknownVar.toUpperCase(); // any 타입과 다르게 메서드를 사용할 수 없다.

if (typeof unknownVar === "number") {
  num = unknownVar;
}
