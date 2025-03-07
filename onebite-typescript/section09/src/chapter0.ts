/* -------------------------------------------------------------------------- */
/*                                 조건부 타입                                 */
/* -------------------------------------------------------------------------- */

// * 조건부 타입
// type A는 number
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// type B는 number
type B = ObjB extends ObjA ? number : string;

// * 제네릭 + 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

// text에 undefined 또는 null 타입이 오면, 문자열 메서드를 사용하지 못한다.
// 이때 if문을 이용해서 타입을 좁혀주고, ?. 옵셔널 체이닝을 사용할 수 있다.
// function removeSpaces(text: string | undefined | null) {
//   if (typeof text === "string") {
//     return text.replaceAll(" ", "");
//   } else {
//     return undefined;
//   }
// }

// let result = removeSpaces("hi im ttining");

// result?.toUpperCase();

// 제네릭 + 조건부 타입 + 오버로드 시그니처
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im ttining");
result.toUpperCase();

let result2 = removeSpaces(undefined);
