# 섹션 1. JavaScript 기본

---

## 9. 조건문

### 조건문(Conditional Statement)이란?

- 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법이다.
- 대표적으로 `if`, `switch` 조건문이 존재한다.

<br>

### 📌 `if` 조건문

- 주어진 조건이 참(`true`)일 경우에만 해당 블록의 코드를 실행한다.
- 여러 개의 조건을 처리하기 위해 `else if` 문을 사용할 수 있다.
- 조건이 모두 거짓(`false`)일 경우, 마지막에 `else` 블록을 추가하여 기본 동작을 정의할 수 있다.
- ⚠️ `if` 문은 항상 조건으로 시작해야 하며, `else`는 선택적으로 사용할 수 있다.
- 예시

  ```javascript
  let num = 10;

  if (num >= 10) {
    console.log("num은 10 이상입니다.");
    console.log("조건이 참 입니다.");
  }

  // 결과 : num은 10 이상입니다.
  // 결과 : 조건이 참 입니다.

  num = 9;

  if (num >= 10) {
    console.log("num은 10 이상입니다.");
    console.log("조건이 참 입니다.");
  } else if (num >= 5) {
    console.log("num은 5 이상입니다.");
  } else if (num >= 3) {
    console.log("num은 3 이상입니다.");
  } else {
    console.log("조건이 거짓입니다.");
  }

  // 결과 : num은 5 이상입니다.
  ```

<br>

### 📌 `switch` 조건문

- 하나의 변수 값에 대해 여러 조건을 비교하고 처리할 때 사용하는 조건문이다.
- `if` 문과 기능적으로 동일하지만, 다수의 조건을 처리할 때 더 **간결하고 직관적**이다.
- `switch` 문의 소괄호 안에는 비교할 변수가 들어간다.
- 각 조건(`case`)에 해당하는 코드 실행 후 반드시 `break` 문을 사용하여 `switch` 문을 종료해야 한다.
  - `break`를 사용하지 않으면 다음 조건의 코드도 실행된다.
- `default` 블록은 모든 조건이 거짓일 때 실행된다.
- 예시

  ```javascript
  let animal = "cat";

  animal = "owl";

  switch (animal) {
    case "cat": {
      console.log("고양이");
      break;
    }
    case "dog": {
      console.log("강아지");
      break;
    }
    case "bear": {
      console.log("곰");
      break;
    }
    case "snake": {
      console.log("벰");
      break;
    }
    case "tiger": {
      console.log("호랑이");
      break;
    }
    default: {
      console.log("그런 동물 몰라용.");
    }
  }

  // 결과: 그런 동물 몰라용.
  ```

<br>

### 📌 `if` 🆚 `switch`

| 조건문 유형 | 주요 특징                                                                                     | 추천 사용 상황                        |
| ----------- | --------------------------------------------------------------------------------------------- | ------------------------------------- |
| `if`        | 여러 개의 조건을 처리할 수 있으며, 조건식이 복잡해도 적합                                     | 조건식이 복잡하거나 다양할 때         |
| `switch`    | 한 변수에 대해 다수의 값과 비교할 때 간결하게 작성 가능하며, 각 `case`가 독립적으로 처리 가능 | 값의 비교가 명확하고 조건이 단순할 때 |
