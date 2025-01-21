# 섹션 2. JavaScript 심화

---

## 12. 비동기 작업 처리하기 1️⃣ 콜백 함수

### 12-1. 간단한 비동기 함수 + 콜백함수

- 3초 뒤, `안녕하세요!` 출력

  ```javascript
  function task() {
    setTimeout(() => {
      console.log("안녕하세요!");
    }, 3000);
  }

  task(); // 안녕하세요!
  ```

- 3초 뒤 `sum` 변수 출력

  ```javascript
  function add(a, b) {
    setTimeout(() => {
      const sum = a + b;
      console.log(sum);
    }, 3000);
  }

  add(1, 2); // 3
  ```

- `sum` 변수를 밖에서 사용해보기

  ```javascript
  function add(a, b, callback) {
    setTimeout(() => {
      const sum = a + b;
      callback(sum);
    }, 3000);
  }

  add(1, 2, (value) => {
    console.log(value);
  }); // 3
  ```

<br>

### 12-2. 활용 예제

- 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 사용하는 방법

  ```javascript
  // 배달 어플로 음식 주문하는 상황 (3초 소요)
  function orderFood(callback) {
    setTimeout(() => {
      const food = "꽈배기";
      callback(food);
    }, 3000);
  }

  // 음식을 식혀보자. (2초 소요)
  function cooldownFood(food, callback) {
    setTimeout(() => {
      const cooldownedFood = `식은 ${food}`;
      callback(cooldownedFood);
    }, 2000);
  }

  // 음식을 얼려보자. (1.5초 소요)
  function freezeFood(food, callback) {
    setTimeout(() => {
      const freezedFood = `냉동된 ${food}`;
      callback(freezedFood);
    }, 1500);
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
  ```
