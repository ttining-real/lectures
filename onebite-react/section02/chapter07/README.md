# 섹션 2. JavaScript 심화

---

## 7. 배열 메서드 1️⃣ 요소 조작

### 📌 `push()`

- 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
- 인수로 전달된 요소를 추가한 후, 배열의 **변경된 길이**를 반환한다.
- 예시

  ```javascript
  let arr1 = [1, 2, 3];
  const newLength = arr1.push(4, 5, 6, 7);

  console.log(arr1); // [1, 2, 3, 4, 5, 6, 7]
  console.log(newLength); // 7
  ```

- **👉 활용 예시** : 동적으로 배열에 데이터를 추가하며, 배열의 길이를 추적해야 하는 경우

<br>

### 📌 `pop()`

- 배열의 맨 뒤 요소를 제거하고, 제거된 요소를 반환
- 배열이 **빈 경우** `undefined`를 반환
- 예시

  ```javascript
  let arr2 = [1, 2, 3];
  const popedItem = arr2.pop();

  console.log(arr2); // [1, 2]
  console.log(popedItem); // 3

  let emptyArr = [];
  console.log(emptyArr.pop()); // undefined
  ```

<br>

### 📌 `shift()`

- 배열의 맨 앞 요소를 제거하고 반환
- **빈 배열**일 경우 `undefined`를 반환
- `push()`, `pop()` 보다 느리게 동작한다.
- 예시

  ```javascript
  let arr3 = [1, 2, 3];
  const shiftedItem = arr3.shift();

  console.log(arr3); // [2, 3]
  console.log(shiftedItem); // 1

  let emptyArr = [];
  console.log(emptyArr.shift()); // undefined
  ```

<br>

### 📌 `unshift()`

- 배열의 맨 앞에 새로운 요소 추가
- 추가 후 배열의 **변경된 길이**를 반환
- `push()`, `pop()` 보다 느리게 동작한다.
- 예시

  ```javascript
  const arr4 = [1, 2, 3];
  const newLength2 = arr4.unshift(0);

  console.log(arr4); // [0, 1, 2, 3]
  console.log(newLength2); // 4
  ```

<br>

### 📌 `slice()`

- 배열의 특정 범위를 잘라 새로운 배열로 반환
- **✨ 원본 배열은 변경되지 않는다.**
- `slice(시작 인덱스, 끝 인덱스)`로 사용하며, **끝 인덱스는 제외된 범위**
- 예시

  ```javascript
  let arr5 = [1, 2, 3, 4, 5];
  let sliced = arr5.slice(1, 4); // 인덱스 1~3까지 반환
  let sliced2 = arr5.slice(3); // 끝 인덱스를 생략하면 끝까지 반환
  let sliced3 = arr5.slice(-3); // 음수는 뒤에서부터 계산

  console.log(arr5); // [1, 2, 3, 4, 5]
  console.log(sliced); // [2, 3, 4]
  console.log(sliced2); // [4, 5]
  console.log(sliced3); // [3, 4, 5]
  ```

<br>

### 📌 `concat()`

- 두 배열을 합치거나, 배열에 값을 추가하여 새 배열 반환
- **✨ 원본 배열은 변경되지 않는다.**
- 예시

  ```javascript
  let arr6 = [1, 2];
  let arr7 = [3, 4];

  let concatedArr = arr6.concat(arr7);
  let withValues = arr6.concat(5, [6, 7]);

  console.log(concatedArr); // [1, 2, 3, 4]
  console.log(withValues); // [1, 2, 5, 6, 7]
  ```

<br>

### 📌 정리

#### 배열 메서드

| 메서드      | 동작 설명                                       | 반환값                                | 원본 배열 변경 여부 | 추가 설명                                   |
| ----------- | ----------------------------------------------- | ------------------------------------- | ------------------- | ------------------------------------------- |
| `push()`    | 배열의 **맨 뒤에 요소 추가**                    | 변경된 배열의 길이                    | ✅                  | 여러 개의 요소를 한 번에 추가 가능          |
| `pop()`     | 배열의 **맨 뒤 요소 제거**                      | 제거된 요소 (빈 배열이면 `undefined`) | ✅                  | 제거 후 배열의 길이가 감소                  |
| `shift()`   | 배열의 **맨 앞 요소 제거**                      | 제거된 요소 (빈 배열이면 `undefined`) | ✅                  | 제거 후 배열의 나머지 요소가 이동됨         |
| `unshift()` | 배열의 **맨 앞에 요소 추가**                    | 변경된 배열의 길이                    | ✅                  | 여러 개의 요소를 한 번에 추가 가능          |
| `slice()`   | 배열의 **특정 범위를 잘라 새 배열을 반환**      | 잘라낸 새로운 배열                    | ❌                  | 음수 인덱스를 사용하여 뒤에서부터 계산 가능 |
| `concat()`  | 배열을 **합치거나 값 추가 후 새로운 배열 반환** | 새로운 배열                           | ❌                  | 배열 외에도 값 추가 가능 (`arr.concat(값)`) |

<br>

#### 배열 메서드 사용 예시

```javascript
let arr = [1, 2, 3];
```

| 메서드      | 코드 예시                 | 반환값                             | 결과 배열                          |
| ----------- | ------------------------- | ---------------------------------- | ---------------------------------- |
| `push()`    | `arr.push(4, 5)`          | `5` (변경된 길이)                  | `[1, 2, 3, 4, 5]`                  |
| `pop()`     | `let last = arr.pop()`    | `3` (제거된 요소)                  | `[1, 2]`                           |
| `shift()`   | `let first = arr.shift()` | `1` (제거된 요소)                  | `[2, 3]`                           |
| `unshift()` | `arr.unshift(0)`          | `4` (변경된 길이)                  | `[0, 1, 2, 3]`                     |
| `slice()`   | `arr.slice(1, 3)`         | `[2, 3]` (새로운 배열)             | `[1, 2, 3, 4, 5]` (원본 배열 유지) |
| `concat()`  | `arr.concat([4, 5], 6)`   | `[1, 2, 3, 4, 5, 6]` (변경된 길이) | `[1, 2, 3]` (원본 배열 유지)       |

---
