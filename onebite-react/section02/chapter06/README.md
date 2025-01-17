# 섹션 2. JavaScript 심화

---

## 6. 반복문으로 배열과 객체 순회하기

### 6-1. **순회(Iteration)** 란?

- 데이터를 반복적으로 처리하는 프로세스를 말한다.
- 주로 배열, 객체, 문자열 등의 데이터를 대상으로 하나씩 요소를 읽거나 처리하는 데 사용된다.
- 예시

  ```javascript
  let numbers = [1, 2, 3];

  let person = {
    name: "ttining",
    age: 100,
    hobby: "🎵",
  };

  // 배열 순회
  for (let value of numbers) {
    console.log(value); // 1 2 3
  }

  // 객체 순회
  for (let key in person) {
    const value = person[key];
    console.log(key, value);
    // name ttining
    // age 100
    // hobby 🎵
  }
  ```

<br>

---

### 6-2. 배열 순회

> `arr.length` : `arr` 배열의 길이

<br>

#### 1️⃣ 배열의 인덱스를 사용한 순회

- 예시

  ```javascript
  let arr = [1, 2, 3];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1 2 3
  }
  ```

<br>

#### 2️⃣ `for...of` 반복문 사용

- `for...of`는 배열, 문자열, `Map`, `Set` 등 **반복 가능한(iterable)** 객체에서 요소를 하나씩 꺼내어 순회하는 반복문이다.
- ⚠️배열이나 반복 가능한 객체에서만 사용할 수 있으며, 객체에서 직접 사용하면 오류가 발생한다.
- 예시

  ```javascript
  let arr = [1, 2, 3];

  for (let item of arr) {
    console.log(item); // 1 2 3
  }
  ```

<br>

---

### 6-3. 객체 순회

#### 1️⃣ `Object.keys`

- 주어진 객체의 `key` 값만 추출하여 새로운 배열로 반환한다.
- 반환된 배열은 `key`의 삽입 순서를 따른다.
- 예시

  ```javascript
  let person = {
    name: "ttining",
    age: 100,
    hobby: "🎵",
  };

  // Object.keys
  let keys = Object.keys(person);
  console.log(keys); // ['name', 'age', 'hobby']

  for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]); // name age hobby
  }

  for (let key of keys) {
    // console.log(key); // name age hobby

    const value = person[key];
    console.log(key, value);
    // name ttining
    // age 30
    // hobby 🎵
  }
  ```

<br>

#### 2️⃣ `Object.values`

- 주어진 객체의 `value` 값만 추출하여 새로운 배열로 반환한다.
- 반환된 배열은 `value`의 삽입 순서를 따른다.
- 예시

  ```javascript
  let person = {
    name: "ttining",
    age: 100,
    hobby: "🎵",
  };

  // Object.values
  let values = Object.values(person);
  console.log(values); // ['ttining', '100', '🎵']

  for (let value of values) {
    console.log(value); // ttining 100 🎵
  }
  ```

<br>

#### 3️⃣ `for...in`

- `for...in`은 객체의 모든 **열거 가능한(enumerable)** 속성을 순회하기 위한 반복문이다.
- ⚠️ 객체 전용이 아니라 배열에서도 사용할 수 있지만, 배열의 순서를 보장하지 않고 **배열 인덱스가 문자열로 반환**되므로 권장하지 않는다.
- 예시

  ```javascript
  let person = {
    name: "ttining",
    age: 100,
    hobby: "🎵",
  };

  for (let key in person) {
    const value = person[key];
    console.log(key, value);
    // name ttining
    // age 100
    // hobby 🎵
  }
  ```

  <br>

---

### 6-4. 차이점

| 반복문 / 메서드   | 대상             | 반환 결과             | 사용 추천 대상             |
| ----------------- | ---------------- | --------------------- | -------------------------- |
| `for...of`        | 반복 가능한 객체 | 각 요소               | 배열, 문자열, `Set`, `Map` |
| `Object.keys()`   | 객체             | 키 배열               | 객체                       |
| `Object.values()` | 객체             | 값 배열               | 객체                       |
| `for...in`        | 객체, 배열       | 키 (열거 가능한 속성) | 객체                       |
