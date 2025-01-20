# 섹션 2. JavaScript 심화

---

## 8. 배열 메서드 2️⃣ 순회와 탐색

### 📌 `forEach()`

- 배열의 각 요소에 대해 인수로 전달된 콜백 함수를 한 번씩 실행하는 메서드
- 반환값은 `undefined`이다.
- 예시

  ```javascript
  let arr1 = [1, 2, 3];

  arr1.forEach(function (item, idx, arr) {
    console.log(`${idx}: ${item * 2}`);
    // ✅ 결과
    // 0: 2
    // 1: 4
    // 2: 6
  });

  let doubledArr = [];

  arr1.forEach((item) => {
    doubledArr.push(item * 2);
  });

  console.log(doubledArr); // [2, 4, 6]
  ```

<br>

### 📌 `includes()`

- 배열에 특정 요소가 있는지 확인하는 메서드
- 포함되어 있으면 `true`, 아니면 `false`를 반환
- 예시

  ```javascript
  let arr2 = [1, 2, 3];
  let isInclude = arr2.includes(3);
  let isInclude2 = arr2.includes(10);

  console.log(isInclude); // true
  console.log(isInclude2); // false
  ```

<br>

### 📌 `indexOf()`

- 배열에서 특정 요소의 첫 번째 인덱스를 반환한다.
- 요소가 없으면 `-1`을 반환한다.
- 예시

  ```javascript
  let arr1 = [1, 2, 3];
  let index = arr1.indexOf(2);

  console.log(index); // 1

  // 동일 요소들이 있을 시, 가장 앞에 있는 인덱스를 반환
  let arr2 = [2, 2, 2];
  let index2 = arr2.indexOf(2);

  console.log(index2); // 0

  // 현재 배열에 존재하지 않는 값의 인덱스를 찾으려고 한다면 존재하지 않는다는 의미로 -1을 반환
  let arr3 = [2, 2, 2];
  let index3 = arr3.indexOf(20);

  console.log(index3); // -1
  ```

<br>

### 📌 `findIndex()`

- 배열을 순회하며 콜백 함수의 조건을 만족하는 **첫 번째 요소의 인덱스**를 반환한다.
- 조건을 만족하는 요소가 없으면 `-1`을 반환한다.
- 예시

  ```javascript
  let arr4 = [1, 2, 3];
  const findedIndex = arr4.findIndex((item) => {
    if (item === 2) return true;
  });

  console.log(findedIndex); // 1

  // 조건식만 반환하는 방법 (✨ 코드가 더 간결해진다.)
  const findedIndex2 = arr4.findIndex((item) => item % 2 !== 0);

  console.log(findedIndex2); // 0

  // 조건식을 만족하는 요소가 배열에 존재하지 않는다면, -1을 반환
  const findedIndex3 = arr4.findIndex((item) => item === 999);

  console.log(findedIndex3); // -1
  ```

<br>

#### 💡 `findIndex`가 필요한 이유

- `indexOf`는 배열에 원시 타입의 값이 있을 때 유용하지만, 객체 같은 복잡한 데이터에서는 정확히 요소를 찾을 수 없다. (얕은 비교)
  > ✨ **얕은 비교** : 객체 값은 참조 값을 기준으로 비교되며, 프로퍼티를 기준으로 비교가 이루어지지 않는다.
- `findIndex`는 객체 내부의 속성 값에 따라 요소를 찾을 수 있다.
- 예시

  ```javascript
  let objectArr = [{ name: "ttining" }, { name: "annggeol" }];

  console.log(objectArr.indexOf({ name: "ttining" })); // -1
  console.log(objectArr.findIndex((item) => item.name === "ttining")); // 0
  ```

  > 단순한 **원시 타입의 값**을 찾을 경우 : `indexOf`
  > 복잡한 객**체 타입의 값**을 찾을 경우 : `findIndex`

<br>

### 📌 `find()`

- 배열을 순회하며 조건을 만족하는 **첫 번째 요소 자체**를 반환한다.
- 조건을 만족하는 요소가 없으면 `undefined`를 반환한다.
- 예시

  ```javascript
  let arr5 = [{ name: "ttining" }, { name: "annggeol" }];

  const finded = arr5.find((item) => item.name === "ttining");

  // ✅ index가 아니라 요소 자체를 반환
  console.log(finded); // {name: 'ttining'}
  ```

---
