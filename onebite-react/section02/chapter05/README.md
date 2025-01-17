# 섹션 2. JavaScript 심화

---

## 5. 원시 타입 🆚 객체 타입

### 5-1. 원시 타입과 객체 타입으로 나뉘는 이유

- 원시 타입과 객체 타입은 값이 저장되거나 복사되는 과정이 다르기 때문이다.
- **원시 타입** : 값 자체로 변수에 저장되고 복사된다. (`Number`, `String`, `Boolean` 등)
- **객체 타입** : 참조값(메모리 주소)을 통해 변수에 저장되고 복사된다. (`Object`, `Array`, `Function` 등)

<br>

### 5-2. 원시 타입

- **불변값**
  변수에 저장된 값은 수정되지 않고, 값이 변경되면 새로운 메모리 공간에 저장된다.
  (실제 메모리의 값은 수정되지 않음)

  ```javascript
  let p1 = 1; // 원시 타입 숫자
  let p2 = p1; // p1의 값을 복사

  p2 = 2; // p2만 변경, p1은 그대로 유지
  console.log(p1); // 1
  console.log(p2); // 2
  ```

<br>

---

### 5-3. 객체 타입

- **가변값**
  참조값을 복사하므로, 동일한 참조값을 공유하는 모든 변수가 영향을 받는다.
  (메모리의 값이 수정됨)

  ```javascript
  let o1 = { name: "ttining" };
  let o2 = o1; // 참조값 복사
  let o3 = { ...o1 }; // 깊은 복사

  o2.name = "dudu"; // o2를 수정했지만, o1도 영향을 받음
  console.log(o1.name); // "dudu"
  console.log(o1 === o2); // true (같은 참조값)
  console.log(o1 === o3); // false (다른 참조값)
  ```

<br>

---

### ⚠️ 주의 사항

#### 1️⃣ 의도치 않게 값이 수정될 수 있다.

- **얕은 복사**
  - 객체의 참조값만 복사하므로, 한 객체를 수정하면 원본 객체에도 영향을 미친다.
    ```javascript
    let o1 = { name: "ttining" };
    let o2 = o1;
    ```
- **깊은 복사**

  - 객체를 새로 생성하고 프로퍼티를 복사하므로, 원본 객체에 영향을 주지 않는다.
    ```javascript
    let o1 = { name: "ttining" };
    let o2 = { ...o1 };
    ```
  - 중첩 객체의 깊은 복사는 스프레드 문법만으로 해결되지 않을 수 있다.
    이를 위해 `lodash`의 `cloneDeep` 같은 라이브러리를 사용할 수 있다.

    ```javascript
    import cloneDeep from "lodash/cloneDeep";

    let nested = { info: { name: "ttining" } };
    let deepCopy = cloneDeep(nested);

    deepCopy.info.name = "dudu";
    console.log(nested.info.name); // "ttining" (원본 유지)
    ```

<br>

#### 2️⃣ 객체 간 비교는 참조값을 기준으로 이루어진다.

- **얕은 비교**

  - 객체의 참조값을 비교한다.

    ```javascript
    let o1 = { name: "ttining" };
    let o2 = o1;

    console.log(o1 === o2); // true (참조값이 동일)
    ```

- **깊은 비교**

  - 객체의 내용 자체를 비교하려면 `JSON.stringify`를 사용할 수 있다.

    ```javascript
    let o1 = { name: "ttining" };
    let o2 = { name: "ttining" };

    console.log(JSON.stringify(o1) === JSON.stringify(o2)); // true
    ```

  - ⚠️ 단, `JSON.stringify`는 함수와 `undefined`를 처리하지 못한다.

    ```javascript
    let o1 = { func: () => {} };
    let o2 = { func: () => {} };

    console.log(JSON.stringify(o1) === JSON.stringify(o2)); // false
    ```

<br>

#### 3️⃣ 배열과 함수도 사실 객체이다.

- **배열** : 배열은 객체의 특성을 가지며, 참조값을 기준으로 복사된다.

  ```javascript
  let arr1 = [1, 2, 3];
  let arr2 = arr1;

  arr2.push(4); // arr2를 수정했지만
  console.log(arr1); // [1, 2, 3, 4] (arr1도 수정됨)
  ```

- **함수** : 함수 역시 객체로 취급되며 참조값을 기준으로 복사된다.

  ```javascript
  function greet() {
    console.log("Hello!");
  }

  let func1 = greet;
  let func2 = func1;

  func2(); // "Hello!"
  console.log(func1 === func2); // true (같은 참조값)
  ```
