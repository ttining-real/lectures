# 섹션 1. JavaScript 기본

---

## 11. 함수

### 11-1. 함수(`Function`)란?

- 특정 작업을 수행하는 코드 블록으로, 재사용 가능한 코드 단위를 제공한다.
- 함수를 사용하면 코드의 중복을 줄이고, 가독성을 높이며, 유지보수를 쉽게 할 수 있다.

<br>

#### 📌 함수 선언과 호출

- 예시

  ```javascript
  // 함수 선언
  function greeting() {
    console.log("안녕하세요");
  }

  console.log("호출 전");

  // 함수 호출
  greeting();

  console.log("호출 후");
  ```

- 결과
  ```javascript
  호출 전
  안녕하세요
  호출 후
  ```
- 🌟중요
  > 함수 호출 시 반드시 `()`를 사용하여 호출해야 한다.
  >
  > - 예 : `greeting();`
  >   - `greeting;` → 함수 호출이 아닌 함수 참조

---

### 11-2. 함수의 매개변수와 인수

- **매개변수(Parameter)**: 함수를 정의할 때 데이터를 전달받는 변수
- **인수(Argument)**: 함수를 호출할 때 전달하는 값

<br>

#### 📌 직사각형의 너비를 구하는 함수

```javascript
function getArea1() {
  let width = 10;
  let height = 20;
  let area = width * height;

  console.log(area);
}

getArea1(); // 200
```

**⚠️ 문제점** : 다른 크기의 직사각형 너비를 계산하려면 함수 내부 코드를 매번 수정해야 한다.

<br>

#### 📌 매개변수를 사용한 함수 개선

```javascript
// 매개변수로 값을 전달받음
function getArea2(width, height) {
  let area = width * height;

  console.log(area);
}

// 호출 시 인수를 전달
getArea2(10, 20); // 출력: 200
getArea2(30, 20); // 출력: 600
getArea2(120, 200); // 출력: 24000
```

✅ 매개변수를 활용하면 함수가 다양한 입력값에 유연하게 대응할 수 있다.

<br>

---

### 11-3. `return` 문

- `return` : 함수가 실행을 마치고 결과값을 반환할 때 사용한다.
- `return` 이후의 코드는 실행되지 않는다.

<br>

#### 📌 반환값을 가진 함수

```javascript
function getArea(width, height) {
  // 중첩 함수
  function another() {
    console.log("another");
  }

  another(); // 중첩 함수 호출

  let area = width * height;

  return area; // 반환값
}

let area1 = getArea(10, 20);
let area2 = getArea(30, 20);
let area3 = getArea(120, 200);

console.log(area1, area2, area3); // 출력: 200 600 24000
```

**✅ 중첩 함수(Nested Function)**

- 함수 안에 선언된 또 다른 함수로, 외부 함수에서만 호출 가능하다.

---

### 11-4. 호이스팅(Hoisting)

- 호이스팅: 함수 선언이 코드의 최상단으로 끌어올려지는 현상을 의미한다.
- 함수 선언문은 코드 작성 위치와 관계없이 호출할 수 있다.

<br>

#### 📌 함수 선언문

- ✅ 함수 선언문은 호출 전에 선언하지 않아도 동작한다.

- **예시**

  ```javascript
  sayHello();

  function sayHello() {
    console.log("안녕하세요");
  }
  ```

- **결과**
  ```javascript
  안녕하세요;
  ```

<br>

#### 📌 함수 표현식

- ✅ 함수 표현식은 호이스팅되지 않습니다.
- ✅ 함수 표현식은 변수가 선언된 이후에만 호출할 수 있습니다.
- **예시**

  ```javascript
  // TypeError 발생
  sayHello();

  const sayHello = function () {
    console.log("안녕하세요");
  };
  ```
