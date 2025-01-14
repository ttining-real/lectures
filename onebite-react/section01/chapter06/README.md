# 섹션 1. JavaScript 기본

---

## 6. 형 변환

### 6-1. 형 변환이란?

- 어떤 값의 타입을 다른 타입으로 변경하는 것을 말한다.
- 예시
  ```javascript
  Number Type --- 형 변환 (Type Casting) --→ String Type
       10     --- 형 변환 (Type Casting) --→    "10"
  ```

---

### 6-2. 형 변환의 종류

#### 📌 묵시적 형 변환 🤫 (암묵적 형 변환)

- 개발자가 직접 설정하지 않아도 자바스크립트 엔진이 자동으로 형 변환을 수행하는 것을 말한다.
- 예시
  ```javascript
  const result = 10 + "20"; // "1020" (숫자 10이 문자열로 변환됨)
  ```

<br>

#### 📌 명시적 형 변환 🫵

- 개발자가 직접 함수 등을 이용해 형 변환을 수행하는 것을 말한다.
- 예시

  ```javascript
  // Number → String
  const num = 10;
  const str = String(num); // "10"

  // String → Number
  const str = "100";
  const num = Number(str); // 100
  ```

---
