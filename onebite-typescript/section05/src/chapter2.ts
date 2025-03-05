// * 선언 합침

interface Person {
  name: string;
}

interface Person {
  // name: number; // 오류 발생 (충돌)
  name: string;
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 100,
};

// * 모듈 보강

interface Lib {
  a: number;
  b: number;
}

// 인터페이스 선언 합침
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello", // 프로퍼티 추가
};
