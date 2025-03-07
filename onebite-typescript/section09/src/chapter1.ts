/* -------------------------------------------------------------------------- */
/*                             분산적인 조건부 타입                             */
/* -------------------------------------------------------------------------- */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number>;
// StringNumberSwitch<string>;
// → StringNumberSwitch<number> | StringNumberSwitch<string>이 된다.

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number
// string
// number

// 결과
// number | string

// * 실용적인 예제
// 분산적 조건부 타입의 기능을 이용하여
// 유니온에서 특정 타입만 제거하는 타입을 만들어보자.

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | never | boolean
// 유니온 타입에 never 타입이 포함되어 있으면,
// never는 결국 사라진다.

// * 예제 2
// Exclude와 반대되는 Extract 타입을 만들어보자.

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 결과
// string

// * 조건부 타입이 분산적으로 작동하지 않게 하는 방법
// extends 양 옆의 타입을 []로 묶어준다.
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;
