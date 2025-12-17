"use strict";

// (1)
// let person = {
//   fullname: "안쥐",
//   age: 20,
//   printThis: function () {
//     // console.log(this); // person 객체
//     // console.log(this === person); // true
//     // console.log(this.fullname); // 안쥐

//     console.log(this); // window 객체
//     // console.log(this.age); // 20
//     console.log("this === person: ", this === person); // false
//     console.log(this === window); // true
//   },
// };

// // person.printThis();
// let printThis = person.printThis;
// printThis(); // window 객체

// (2)
// function printThis() {
//   console.log(this); // default this -> window
// }

// printThis();

// let person1 = {
//   name: "홍길동1",
//   printThis: printThis, // default this -> person1
// };

// person1.printThis();

// let person2 = {
//   name: "홍길동2",
//   printThis: printThis, // default this -> person2
// };

// person2.printThis();

// (3) window
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(this); // button 요소
  console.log(this === btn); // true
});

// (4) ES5 bind = this 설정
function printThis() {
  console.log(this); // default this -> window
}

printThis();

// let person1 = {
//   name: "홍길동1",
// };

// let person2 = {
//   name: "홍길동2",
// };

// let printThis1 = printThis.bind(person1);
// printThis1(); // 홍길동 1

// let printThis2 = printThis1.bind(person2);
// printThis2(); // 홍길동 1

// bind는 한번만 사용할 수 있다.

// (5) setTimeout

// setTimeout(function () {
//   alert("hello");
// }, 3000);

// let person = {
//   name: "안쥐",
//   age: 20,
// hello: function () {
//   console.log(this); // person

//   setTimeout(
//     function () {
//       console.log(this);
//       console.log(this.name);
//       console.log(this.age);
//     }.bind(this),
//     3000
//   );
// },

//   hello: function () {
//     function printHello() {
//       console.log(this);
//       console.log(this.name);
//       console.log(this.age);
//     }

//     setTimeout(printHello.bind(this), 3000);
//   },
// };

// person.hello();

// (6) arrow function
// let person = {
//   name: "띠닝",
//   hello: function () {
//     console.log(this); // person 객체

//     // setTimeout(function () {
//     //   console.log(this); // window 객체
//     // }, 3000);

//     setTimeout(() => {
//       console.log(this); // person 객체
//     }, 3000);
//   },
// };

// 화살표 함수가 없던 시절,,
// let person = {
//   name: "띠닝",
//   hello: function () {
//     let that = this;

//     setTimeout(() => {
//       console.log(this); // person 객체
//       console.log(that.name);
//     }, 1000);
//   },
// };

// person.hello();
