// * 객체
// 원시 타입이 아닌 객체 타입의 자료형
// 여러가지 값을 동시에 저장할 수 있는 자료형을 의미함

// 1. 객체 생성
let obj1 = new Object(); // : 객체 생성자
// console.log(obj1);

let obj2 = {}; // : 객체 리터럴

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "띠닝",
  age: 30,
  hobby: "김앙걸",
  extra: {},
  10: 20,
  "like animal": false,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
// console.log(name);

let age = person["age"];
// console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "home protector";
person["favoriteFood"] = "떡볶이";

// 3-3. 프로퍼티를 수정하는 방법
person.job = "UI Developer";
person["favoriteFood"] = "라면";

// 3-4. 프로퍼티를 삭제하는 방법
delete person.favoriteFood;
delete person["like animal"];

console.log(person);

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "animal" in person;
console.log(result1);
console.log(result2);
