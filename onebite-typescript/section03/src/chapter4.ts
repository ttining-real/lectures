// * 대수 타입
// 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재한다.

// * 합집합 - Union 타입
// let a: string | number; // string number union 타입
let a: string | number | boolean;

a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// 객체 타입을 이용한 Union 타입
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

// Dog
let union1: Union1 = {
  name: "",
  color: "string",
};

// Person
let union2: Union1 = {
  name: "",
  language: "",
};

// Dog | Person
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 오류 발생 (Union1에 해당하지 않음)
let union4: Union1 = {
  name: "",
};

// * 교집합 - Intersection 타입
let variable: number & string; // never 타입

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
