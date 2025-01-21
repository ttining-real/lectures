/* -------------------------------------------------------------------------- */
/*                       비동기 작업 처리하기 1️⃣ 콜백 함수                      */
/* -------------------------------------------------------------------------- */

// * 간단한 비동기 함수 + 콜백 함수
function task() {
  setTimeout(() => {
    console.log("안녕하세요!");
  }, 3000); // 3초 뒤 콘솔 출력
}

task(); // 안녕하세요!

function add(a, b) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
  }, 3000);
}

add(1, 2); // 3

// sum 변수를 밖에서 사용해보자.
function add2(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add2(1, 2, (value) => {
  console.log(value);
}); // 3

// * 활용 예제 - 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 사용
// 배달 어플로 음식 주문하는 상황

function orderFood(callback) {
  setTimeout(() => {
    const food = "꽈배기";
    callback(food);
  }, 3000);
}

// 음식을 식혀보자.
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

// * 콜백 헬(callback hell)
// indent가 점점 안으로 들어감
orderFood((food) => {
  console.log(food); // 꽈배기

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood); // 식은 꽈배기

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood); // 냉동된 식은 꽈배기
    });
  });
});

// 음식을 얼려보자.
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}
