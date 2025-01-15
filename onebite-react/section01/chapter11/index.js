// * 함수 선언
function greeting() {
  console.log("안녕하세요");
}

console.log("호출 전");

// * 함수 호출
greeting();

console.log("호출 후");

// 직사각형의 너비를 구하는 함수
// 문제 : 항상 고정된 직사각형의 너비만 계산한다.
function getArea1() {
  let width = 10;
  let height = 20;
  let area = width * height;

  console.log(area);
}

getArea1(); // 200

// 매개변수
function getArea2(width, height) {
  let area = width * height;

  console.log(area);
}

// 인수
getArea2(10, 20); // 200
getArea2(30, 20); // 600
getArea2(120, 200); // 24000

// return 문 사용
// function getArea(width, height) {
//   // 중첩 함수
//   function another() {
//     console.log("another");
//   }

//   another();

//   let area = width * height;

//   return area; // 반환값
//   // return문 아래의 코드는 실행되지 않는다.
// }

// 인수
let area1 = getArea(10, 20); // 200
let area2 = getArea(30, 20); // 600
let area3 = getArea(120, 200); // 24000

console.log(area1, area2, area3); // 200 600 24000

// 호이스팅 (끌어올리다)
function getArea(width, height) {
  // 중첩 함수
  function another() {
    console.log("another");
  }

  another();

  let area = width * height;

  return area; // 반환값
  // return문 아래의 코드는 실행되지 않는다.
}
