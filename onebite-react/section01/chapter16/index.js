// 1. 상수 객체
const animal = {
  type: "고슴도치",
  name: "두더지",
  color: "black",
};

// animal = { a: 1 };
animal.age = 2; // 추가
animal.name = "꽝꽝이"; // 수정
delete animal.color; // 삭제

// console.log(animal);

// 2. 메서드
// ㄴ 값이 함수인 프로퍼티를 말함
// ㄴ 객체의 동작을 정의할 때 사용
const person = {
  name: "띠닝",
  // 메서드
  // sayHi: function () {
  //   console.log("안녕!");
  // },

  // 메서드 (화살표 함수)
  // sayHi: () => {
  //   console.log("안녕!");
  // },

  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
