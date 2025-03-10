/* -------------------------------------------------------------------------- */
/*                                   Exclude                                  */
/* -------------------------------------------------------------------------- */

// * Exclude<T, U>
// 제네릭 타입
// 제외하다, 추방하다
// T에서 U를 제거하는 타입

// * Exclude 직접 구현해보기
type Exclude<T, U> = T extends U ? never : T;

// 0단계
// Exclude<string, boolean>
// Exclude<boolean, boolean>

// 1단계
// Exclude<string, boolean> | Exclude<boolean, boolean>

// 2단계
// string
// never

// 3단계
// string | never
// 합집합에서 never는 공집합이기 때문에 제거되어 string 타입이 된다.

type A = Exclude<string | boolean, boolean>; // type A = string

/* -------------------------------------------------------------------------- */
/*                                   Extract                                  */
/* -------------------------------------------------------------------------- */

// * Extract<T, U>
// T에서 U를 추출하는 타입

// * Extract 직접 구현해보기
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>; // type B = boolean

/* -------------------------------------------------------------------------- */
/*                                 ReturnType                                 */
/* -------------------------------------------------------------------------- */

// * ReturnType<T>
// 함수의 반환값 타입을 추출하는 타입

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

// * ReturnType 직접 구현해보기
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

type ReturnA = ReturnType<typeof funcA>; // type ReturnA = string
type ReturnB = ReturnType<typeof funcB>; // type ReturnB = number
