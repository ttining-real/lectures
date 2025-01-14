# 섹션 1. JavaScript 기본

---

## 8. 연산자 II

### JavaScript의 특수한 연산자

#### 📌 null 병합 연산자

- 존재하는 값을 추려내는 기능을 한다.
- 피연산자 중, `null`이나 `undefined`가 아닌 첫 번째 값을 반환한다.
- 모든 피연산자가 `null` 또는 `undefined`라면, 마지막 값을 반환한다.
- 예시

  ```javascript
  let var1;
  let var2 = 10;
  let var3 = 20;

  let var4 = var1 ?? var2;
  console.log(var4); // 10

  let var5 = null ?? undefined ?? var3;
  console.log(var5); // 20
  ```

<br>

#### 📌 typeof 연산자

- 값의 타입을 문자열로 반환하는 기능을 한다.
- 주로 데이터 타입을 확인하거나 조건문에서 유용하게 사용된다.
- 예시

  ```javascript
  let var8 = 1;

  var8 = "hello";
  console.log(typeof var8); // string

  var8 = 20;
  console.log(typeof var8); // number

  var8 = true;

  let t1 = typeof var8;
  console.log(t1); // boolean

  // 객체와 함수의 경우
  const obj = {};
  const func = function () {};
  console.log(typeof obj); // "object"
  console.log(typeof func); // "function"
  ```

<br>

#### 📌 삼항 연산자

- 조건식의 참/거짓 여부에 따라 반환값을 다르게 지정할 수 있다.
- `조건식 ? 참일 때의 값 : 거짓일 때의 값`
- 예시

  ```javascript
  let var9 = 10;

  // 요구사항 : 변수 res에 var9의 값이 짝수 -> "짝", 홀수 -> "홀"
  let res = var9 % 2 === 0 ? "짝수" : "홀수";
  console.log(res);

  // 중첩 삼항 연산자의 예
  let score = 85;
  let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
  console.log(grade); // "B"
  ```

---
