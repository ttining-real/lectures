# 섹션 1. JavaScript 기본

---

## 4. 변수와 상수

> 값을 저장하는 박스
> 데이터를 저장하고 필요할 때 꺼내 사용할 수 있도록 도와준다.

<br>

### 4-1. 변수와 상수 정의

#### 📌 변수(Variable)

- **의미** : 값이 변할 수 있는 저장 공간
- **선언 방법** : `let` 또는 `var` 키워드를 사용하여 선언
- **특징**
  - 값을 저장한 후, 필요에 따라 변경 가능
  - `let` 키워드를 사용하는 것이 권장된다.
- **예시**
  ```javascript
  let name = "ttining"; // 변수 선언 및 초기화
  name = "띠닝"; // 값 변경 가능
  console.log(name); // 출력: 띠닝
  ```

<br>

#### 📌 상수(Constant)

- **의미** : 값이 변하지 않는 저장 공간
- **선언 방법** : `const` 키워드를 사용하여 선언
- **특징**
  - 값을 한 번 설정하면 변경 불가
  - 변경되지 않는 고정값을 저장할 때 사용
- **예시**
  ```javascript
  const pi = 3.14; // 상수 선언 및 초기화
  // pi = 3.15; // 오류 발생: 상수는 값을 변경할 수 없음
  console.log(pi); // 출력: 3.14
  ```

---

### 4-2. 변수와 상수를 사용하는 이유

- **데이터를 재사용**할 수 있어 효율적인 프로그래밍이 가능
- 코드의 **가독성**과 **유지 보수성**을 높임

---

### 4-3. 변수 🆚 상수 차이점 비교

| 구분          | 변수 (`let`, `var`)          | 상수 (`const`)     |
| ------------- | ---------------------------- | ------------------ |
| **값 변경**   | 가능                         | 불가능             |
| **재선언**    | `var`는 가능, `let`은 불가능 | 불가능             |
| **사용 목적** | 변할 수 있는 데이터 저장     | 고정된 데이터 저장 |

---

### 4-4. 변수 명명 규칙(Naming Rules)

#### 1️⃣ 변수 이름은 문자, 숫자, `$`, `_`만 사용할 수 있다.

- 숫자로 시작할 수 없다.
  ```javascript
  let name1 = "ttining"; // 가능
  let 1name = "ttining"; // 불가능
  ```

<br>

#### 2️⃣ 변수 이름은 대소문자를 구분한다.

- `name`과 `Name`은 서로 다른 변수로 취급된다.

  ```javascript
  let name = "ttining";
  let Name = "bonobono";
  console.log(name); // ttining
  console.log(Name); // bonobono
  ```

<br>

#### 3️⃣ 예약어는 변수 이름으로 사용할 수 없다.

- 예시: `let`, `const`, `class`, `return` 등
  ```javascript
  let let = "value"; // 오류 발생
  ```

<br>

#### 4️⃣ 공백이 포함될 수 없다.

- 변수 이름에는 공백을 사용할 수 없습니다.
  ```javascript
  let user name = "ttining"; // 오류 발생
  ```

---

### 4-5. 변수 명명 가이드(Naming Guidelines)

> 규칙은 아니지만, 더 나은 가독성과 유지보수를 위해 지켜야 할 권장사항

<br>

#### 1️⃣ 의미 있는 이름 사용하기

- 변수의 역할이 명확히 드러나도록 이름을 짓는다.
  ```javascript
  let x = 10; // 불명확한 이름
  let userAge = 10; // 명확한 이름
  ```

<br>

#### 2️⃣ 카멜 케이스(Camel Case) 사용하기

- 소문자로 시작하고, 단어가 바뀔 때마다 첫 글자를 대문자로 쓴다.
  ```javascript
  let userAge = 25;
  let totalScore = 100;
  ```

<br>

#### 3️⃣ 상수는 대문자와 밑줄(스네이크 케이스) 사용하기

- 고정된 값은 대문자와 밑줄(`_`)을 사용하여 상수임을 표시한다.
  ```javascript
  const MAX_USERS = 100;
  const API_URL = "https://example.com";
  ```

<br>

#### 4️⃣ 축약형 사용 피하기

- 축약형은 가독성을 떨어뜨릴 수 있다.
  ```javascript
  let usrNm = "ttining"; // 불명확
  let userName = "ttining"; // 명확
  ```

<br>

#### 5️⃣ 부정형 접두사 사용하기

- 불리언 값을 나타내는 변수는 `is`, `has`, `can` 등의 접두사를 사용한다.

  ```javascript
  let isLoggedIn = true;
  let hasPermission = false;
  ```

<br>

#### 6️⃣ 일관성 유지하기

- 프로젝트 내에서 변수 작명 스타일을 일관되게 유지한다.
- 예시 ⭕
  ```javascript
  let userName = "ttining"; // 카멜 케이스 사용
  const MAX_SCORE = 100; // 상수는 대문자로 선언
  let isAvailable = true; // 불리언 값은 접두사를 사용
  ```
- 예시 ❌
  ```javascript
  let x = 25; // 의미 없는 변수명
  const maxscore = 100; // 상수는 대문자 사용 권장
  let user_name = "ttining"; // 일관성 부족 (스네이크 케이스 사용)
  ```

<br>

---
