# 섹션 1. JavaScript 기본

---

## 7. 연산자 I

### 7-1. 연산자 (Operator)란?

연산자는 프로그래밍에서 데이터를 처리하거나 조작하는 데 사용하는 기호 또는 키워드로, 산술 계산, 논리 연산, 대입 등의 작업을 수행한다.

---

### 7-2. 연산자의 종류

- **1️⃣ 대입 연산자**
- **2️⃣ 산술 연산자**
- **3️⃣ 복합 대입 연산자**
- **4️⃣ 증감 연산자**
- **5️⃣ 논리 연산자**
- **6️⃣ 비교 연산자**

<br>

#### 1️⃣ 대입 연산자 `=`

- 값을 변수에 할당하거나 업데이트할 때 사용하는 연산자
- 가장 기본적인 연산자이며, 등호(`=`)를 사용한다.
- 사용 예시
  ```javascript
  let x = 10; // x에 10을 대입
  let y = x + 5; // x의 값(10)에 5를 더해 y에 대입
  console.log(x); // 결과: 10
  console.log(y); // 결과: 15
  ```
- ⚠️ 순서 중요
  - 대입 연산자는 오른쪽에서 왼쪽으로 값을 할당한다.
  ```javascript
  let a = 5;
  let b = (a = 10); // a에 10이 대입되고, 그 값을 b에 대입
  console.log(a); // 결과: 10
  console.log(b); // 결과: 10
  ```
- ⚠️ 값을 덮어씀
  - 대입 연산자는 기존 값을 덮어쓰기 때문에, 이전 값은 사라진다.
  ```javascript
  let num = 100;
  num = 200; // 기존 값 100은 사라지고 200으로 대체
  console.log(num); // 결과: 200
  ```
- 표현식 가능
  - 대입 연산자의 오른쪽에는 단순한 값뿐 아니라 표현식도 올 수 있다.
  ```javascript
  let num1 = 5;
  let num2 = 10;
  let result = num1 + num2 * 2; // 우선순위에 따라 num2 * 2가 먼저 계산
  console.log(result); // 결과: 25
  ```

---

#### 2️⃣ 산술 연산자 `+`, `-`, `*`, `/`, `%`

**`+` : 덧셈 연산자**

- 두 값을 더하는 연산자
- 사용 예시
  ```javascript
  let sum = 3 + 2; // 5
  console.log(sum); // 결과: 5
  ```

**`-` : 뺄셈 연산자**

- 두 값을 빼는 연산자
- 사용 예시
  ```javascript
  let difference = 3 - 2; // 1
  console.log(difference); // 결과: 1
  ```

**`*` : 곱셈 연산자**

- 두 값을 곱하는 연산자
- 사용 예시
  ```javascript
  let product = 3 * 2; // 6
  console.log(product); // 결과: 6
  ```

**`/` : 나눗셈 연산자**

- 값을 나누는 연산자
- 사용 예시
  ```javascript
  let quotient = 3 / 2; // 1.5
  console.log(quotient); // 결과: 1.5
  ```

**`%` : 나머지 연산자** (모듈러 연산자)

- 나머지를 구하는 연산자
- 사용 예시
  ```javascript
  let remainder = 3 % 2; // 1
  console.log(remainder); // 결과: 1
  ```

<br>

**💡우선 순위 : `*`, `/`, `%` > `+`, `-`**

- 곱셈, 나눗셈, 나머지 연산자가 덧셈, 뺄셈 연산자보다 우선 순위가 높다.
- 우선 순위가 낮은 부분을 먼저 연산하고 싶을 경우, 해당 부분을 소괄호로 묶어주면 된다.
- 예시

  ```javascript
  let num6 = 1 + 2 * 10;
  console.log(num6); // 21

  let num7 = (1 + 2) * 10;
  console.log(num7); // 30 ()
  ```

---

#### 3️⃣ 복합 대입 연산자 `+=`, `-=`, `*=`, `/=`, `%=`, `**=`

- 산술 연산자와 대입 연산자를 결합하여 사용
- 기존 값에 연산 결과를 대입하는 방식으로, 변수를 두 번 작성할 필요가 없다.
- 코드 간결화에 유용하다.
- 사용 예시

  ```javascript
  let num8 = 10;
  // num8 = num8 + 20; // 변수명을 2번 작성

  // += : 기존 값에 더하기
  num8 += 20;
  console.log(num8); // 30

  // -= : 기존 값에서 빼기
  num8 -= 20;
  console.log(num8); // 10

  // *= : 기존 값에 곱하기
  num8 *= 20;
  console.log(num8); // 200

  // /= : 기존 값을 나누기
  num8 /= 20;
  console.log(num8); // 10

  // %= : 기존 값을 나머지로 계산
  num8 %= 10;
  console.log(num8); // 0

  // **= : 기존 값을 거듭제곱으로 계산
  num8 = 2;
  num8 **= 3;
  console.log(num8); // 8 (2의 3제곱)
  ```

---

#### 4️⃣ 증감 연산자

- 값을 1씩 증가하거나 1씩 감소시킬 때 사용하는 연산자
- 전위 연산자(`++num`, `--num`)와 후위 연산자(`num++`, `num--`)가 있다.
- 전위 연산자 : 값 변경 후 반환
- 후위 연산자 : 값 반환 후 변경
- 예시 : `++`

  ```javascript
  let num9 = 10;

  // 전위 연산 (++num9): 증가 후 값을 반환
  console.log(++num9); // 11

  // 후위 연산 (num9++): 값을 반환한 뒤 증가
  console.log(num9++); // 11 (여기서는 반환값이 증가 전의 값)

  // 후위 연산의 결과 반영
  console.log(num9); // 12
  ```

- 예시 : `--`

  ```javascript
  let num9 = 10;
  console.log(--num9); // 9 (전위 연산)
  console.log(num9--); // 9 (후위 연산)

  // 라인이 바뀌고 num9가 1 감소함
  console.log(num9); // 8
  ```

---

#### 5️⃣ 논리 연산자

- Boolean 값을 조합하거나 반전시킬 때 사용하는 연산자
- 주로 조건문에서 활용된다.

<br>

**📌 OR 연산자 : `||`**

- 두 값 중 하나라도 참이면 참
- 예시

  ```javascript
  let or = true || false;
  console.log(or); // true
  ```

  ```javascript
  let isWeekend = true;
  let hasHoliday = false;
  if (isWeekend || hasHoliday) {
    console.log("쉬는 날입니다!"); // 출력: 쉬는 날입니다!
  }
  ```

<br>

**📌 AND 연산자 : `&&`**

- 두 값 모두 참이어야 참
- 예시

  ```javascript
  let and = true && false;
  console.log(and); // false
  ```

  ```javascript
  let isLoggedIn = true;
  let isAdmin = false;
  if (isLoggedIn && isAdmin) {
    console.log("관리자 페이지에 접속 가능합니다.");
  } else {
    console.log("접근 권한이 없습니다."); // 출력: 접근 권한이 없습니다.
  }
  ```

<br>

**📌 NOT 연산자 : `!`**

- 참과 거짓을 반전시킴
- 예시

  ```javascript
  // NOT 연산자 (!): 참을 거짓으로, 거짓을 참으로 반전
  let not = !true;
  console.log(not); // false
  ```

  ```javascript
  let isUserActive = false;
  if (!isUserActive) {
    console.log("사용자가 비활성화 상태입니다."); // 출력: 사용자가 비활성화 상태입니다.
  }
  ```

---

#### 6️⃣ 비교 연산자

- 두 값을 비교하여 참(`true`) 또는 거짓(`false`)을 반환하는 연산자
- 조건문에서 자주 사용된다.

**📌 동등 연산자 : `===`, `==`**

- `===` : 값과 자료형 모두 비교 (권장)
- `==` : 값만 비교
- 예시

  ```javascript
  // 일치 연산자 (===): 값과 자료형 비교
  console.log(1 === "1"); // false (자료형이 다르므로)
  ```

  ```javascript
  // 동등 연산자 (==): 값만 비교
  console.log(1 == "1"); // true (값만 비교하므로)
  ```

  ```javascript
  let comp_test1 = 1 === "1"; // false (값과 자료형을 비교)
  let comp_test2 = 1 == "1"; // true (값만 비교)
  console.log(comp_test1, comp_test2); // false true
  ```

  ```javascript
  // 권장: 항상 ===를 사용하는 것이 좋다!
  let value = "10";
  if (value === 10) {
    console.log("동일합니다.");
  } else {
    console.log("값 또는 자료형이 다릅니다."); // 출력: 값 또는 자료형이 다릅니다.
  }

  // typeof를 활용한 자료형 비교
  if (typeof value === "string") {
    console.log("value는 문자열입니다."); // 출력: value는 문자열입니다.
  }
  ```

<br>

**📌 비동등 연산자 : `!==`, `!=`**

- `!==` : 값과 자료형이 모두 다른 경우 참
- 예시
  ```javascript
  let comp2 = 1 !== 2;
  console.log(comp2); // true
  ```

<br>

**📌 대소 비교 연산자 : `>`, `<`, `>=`, `<=`**

- `>` : 초과
- `<` : 미만
- `>=` : 이상
- `<=` : 이하
- 예시

  ```javascript
  let comp3 = 2 > 1;
  let comp4 = 2 < 1;
  let comp5 = 2 >= 2;
  let comp6 = 2 <= 2;

  console.log(comp3); // true
  console.log(comp4); // false
  console.log(comp5); // true
  console.log(comp6); // true
  ```

---
