// * 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업 캐스팅

// * 객체 타입간의 호환성
// 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?

// 슈퍼 타입
type Animal = {
  name: string;
  color: string;
};

// 서브 타입
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "꽝꽝이",
  color: "brown",
  breed: "진도",
};

animal = dog; // 업 캐스팅

dog = animal; // 다운 캐스팅 (오류 발생)

// 슈퍼 타입
type Book = {
  name: string;
  price: number;
};

// 서브 타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js",
};

book = programmingBook; // 업 캐스팅

programmingBook = book; // 다운 캐스팅 (오류 발생)

// * 초과 프로퍼티 검사
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js", // 초과 프로퍼티 검사 (오류 발생)
};

let book3: Book = programmingBook;

function func(book: Book) {}

func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js", // 초과 프로퍼티 검사 (오류 발생)
});

func(programmingBook);

// 서브 타입 객체를 넣으려면, 변수에 저장해두었다가 인수로 전달해야 한다.
