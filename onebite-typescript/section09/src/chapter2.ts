/* -------------------------------------------------------------------------- */
/*                                    infer                                   */
/* -------------------------------------------------------------------------- */

// 조건부 타입 내에서 특정 타입만 추론해올 수 있다.

// * 개념 1
// type Func = () => string;

// type ReturnType<T> = T extends () => string ? string : never;

// type A = ReturnType<Func>; // string

// * 개념 2
// type FuncA = () => string;

// type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;

// type A = ReturnType<FuncA>; // string

// type B = ReturnType<FuncB>; // never

// * infer 사용하기
type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // number

type c = ReturnType<number>; // never

// * 예제
// 타입 변수에 제공한 Promise 타입에서 결과값의 타입만 가져오는 기능

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>; // number

type PromiseB = PromiseUnpack<Promise<string>>; // string
