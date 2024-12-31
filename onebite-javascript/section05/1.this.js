/* -------------------------------------------------------------------------- */
/*                             전역 공간에서의 this                            */
/* -------------------------------------------------------------------------- */

// console.log(this);
// Window {window: Window, self: Window, document: document, name: '', location: Location, ...}

/* -------------------------------------------------------------------------- */
/*                               일반 함수 호출                                */
/* -------------------------------------------------------------------------- */
// function func() {
//   console.log(this);
// }

// func();

/* -------------------------------------------------------------------------- */
/*                                 메서드 호출                                 */
/* -------------------------------------------------------------------------- */
// # 1
// const cafe = {
//   brand: "메가커피",
//   menu: "아메리카노",
//   print: function () {
//     console.log(this);
//   },
// };

// cafe.print();

// # 2
// const cafe = {
//   brand: "메가커피",
//   menu: "아메리카노",
//   newCafe: {
//     brand: "메가커피",
//     menu: "라떼",
//     print: function () {
//       console.log(this);
//     },
//   },
// };

// cafe.newCafe.print();

// # 3
// const cafe = {
//   brand: "메가커피",
//   menu: "아메리카노",
//   print: function () {
//     console.log(this);
//   },
// };

// const myCafe = cafe.print;
// myCafe();

/* -------------------------------------------------------------------------- */
/*                               생성자 함수 호출                              */
/* -------------------------------------------------------------------------- */
// Cafe 함수 선언, 매개 변수로 menu를 받음
// function Cafe(menu) {
//   console.log(this);
//   this.menu = menu;
// }

// myCafe라는 변수에 new 키워드를 사용해 새로운 객체 생성
// let myCafe = new Cafe("latte");
// console.log(myCafe);

// let myCafe2 = Cafe("latte");
// console.log(myCafe2);

/* -------------------------------------------------------------------------- */
/*                                콜백 함수 호출                               */
/* -------------------------------------------------------------------------- */
const cafe = {
  brand: "메가커피",
  menu: "",
  setMenu: function (menu) {
    this.menu = menu;
  },
};

function getMenu(menu, callback) {
  callback(menu);
}

getMenu("핫초코", cafe.setMenu);

console.log(cafe);
