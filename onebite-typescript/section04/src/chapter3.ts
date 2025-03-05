// * 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라
// 여러가지 버전으로 만드는 문법

// 하나의 함수 : func
// 모든 매개변수의 타입 : number
// ver1. 매개변수가 1개 : 이 매개변수에 20을 곱한 값 출력
// ver2. 매개변수가 3개 : 이 매개변수들을 다 더한 값을 출력

// TypeScript에서 함수 오버로딩을 구현하기 위해서는
// 이 함수에 어떤 버전들이 있는지 알려줘야 한다.

// * 오버로드 시그니처 (버전들)
// 함수의 구현부 없이 선언식만 써놓은 것
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// * 구현 시그니처 (실제 구현부)
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(); // 오류 발생
func(1);
func(1, 2); // 오류 발생
func(1, 2, 3);
