// * 객체

// * 1. 객체 생성
let obj1 = new Object(); // : 객체 생성자
console.log(obj1); // {}

let obj2 = {}; // : 객체 리터럴
console.log(obj2); // {}

console.clear();

// * 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "ttining",
  age: 100,
  hobby: ["🎵", "🖥️"],
  ex1: false,
  ex2: {},
  ex3: function () {},
  10: 20,
  "like coffee": true,
};

// * 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // ttining

let age = person["age"];
console.log(age); // 100

let property = "hobby";
let hobby = person[property];
console.log(hobby); // ['🎵', '🖥️']

console.clear();

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "home protector";
person["favoriteFood"] = "떡볶이";
console.log(person); // {name: 'ttining', ... job: 'home protector', favoriteFood: '떡볶이'}

console.clear();

// 3-3. 프로퍼티를 수정하는 방법
person.job = "UI Developer";
person["favoriteFood"] = "라멘";
console.log(person); // {name: 'ttining', ... job: 'UI Developer', favoriteFood: '라멘'}

console.clear();

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
console.log(person);

delete person["favoriteFood"];
console.log(person);

console.clear();

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "animal" in person;
console.log(result1); // true
console.log(result2); // false
