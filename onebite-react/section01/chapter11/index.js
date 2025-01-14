// 함수 선언
function greeting() {
  console.log("안녕하세요");
}

console.log("호출 전");

// 함수 호출
greeting();

console.log("호출 후");

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(20, 20);
console.log(area2);

getArea(60, 20);

// 호이스팅 (끌어올리다)
function getArea(width, height) {
  // let width = 10;
  // let height = 20;

  // 중첩 함수
  function another() {
    console.log("another");
  }

  another();

  let area = width * height;

  // console.log(area);
  return area;
  console.log("반환 안됨");
}
