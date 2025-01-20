# 섹션 2. JavaScript 심화

---

## 9. 배열 메서드 3️⃣ 배열 변형

### 📌 `filter()`

- 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
- `filter((현재 요소, 반복 카운트, 원본 배열) => {})`
- **👉 활용 예시** : 특정 조건에 의해 검색하는 기능, 카테고리별 필터 등등
- 예시

  ```javascript
  let arr1 = [
    { name: "ttining", hobby: "테니스" },
    { name: "anggeol", hobby: "테니스" },
    { name: "꽝꽝이", hobby: "깡-" },
  ];

  const tennisPeople = arr1.filter((item) => {
    if (item.hobby === "테니스") return true;
  });

  console.log(tennisPeople);
  // ✅ 결과
  // 0: {name: 'ttining', hobby: '테니스'}
  // 1: {name: 'anggeol', hobby: '테니스'}

  // 조건식만 반환하는 방법 (✨ 코드가 더 간결해진다.)
  const tennisPeople2 = arr1.filter((item) => item.hobby === "테니스");
  console.log(tennisPeople2);
  ```

<br>

### 📌 `map()`

- 배열의 모든 요소를 순회하면서, 각각 콜백 함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
- `map((현재 요소, 반복 카운트, 원본 배열) => {})`
- 예시

  ```javascript
  let arr2 = [1, 2, 3];

  arr2.map((item, index, arr) => {
    console.log(index, item);
    // ✅ 결과
    // 0 1
    // 1 2
    // 2 3
  });

  // 반환값 설정
  const mapResult = arr2.map((item, index, arr) => {
    return item * 2;
  });

  console.log(mapResult); // [2, 4, 6]
  ```

<br>

#### 💡 활용

- `arr1` 배열의 객체 값에서 `name` 프로퍼티에 있는 이름만 새로운 배열에 담아 반환하기
- 활용 코드

  ```javascript
  let arr1 = [
    { name: "ttining", hobby: "테니스" },
    { name: "anggeol", hobby: "테니스" },
    { name: "꽝꽝이", hobby: "깡-" },
  ];

  let names = arr1.map((item) => item.name);

  console.log(names); // ['ttining', 'anggeol', '꽝꽝이']
  ```

<br>

### 📌 `sort()`

- 배열을 사전순으로 정렬하는 메서드 (원본 배열 정렬)
- 예시

  ```javascript
  let arr3 = ["b", "c", "a"];

  arr3.sort();
  console.log(arr3); // ['a', 'b', 'c']
  ```

<br>

#### ⚠️ 주의

- 숫자로 이루어진 배열의 경우, 대소 비교가 아닌 사전 순으로 정렬하기 때문에 정상적으로 정렬하지 않은 것처럼 보인다.
- 이를 해결하기 위해 콜백 함수에서 비교 방식을 지정해줘야 한다.

<br>

#### 1️⃣ 오름차순 정렬

- 예시

  ```javascript
  arr4.sort((a, b) => {
    if (a > b) {
      // b가 a 앞에 위치
      return 1; // → b, a 배치
    } else if (a < b) {
      // a가 b 앞에 위치
      return -1; // → a, b 배치
    } else {
      // 두 값의 자리를 바꾸지 않고 위치
      return 0; // → a, b 자리를 그대로 유지
    }
  });

  console.log(arr4); // [3, 5, 10]
  ```

<br>

#### 2️⃣ 내림차순 정렬

- 예시

  ```javascript
  arr4.sort((a, b) => {
    if (a > b) {
      // a가 b 앞에 위치
      return -1;
    } else if (a < b) {
      // b가 a 앞에 위치
      return 1;
    } else {
      // 두 값의 자리를 바꾸지 않고 유지
      return 0;
    }
  });

  console.log(arr4); // [10, 5, 3]
  ```

<br>

### 📌 `toSorted()`

- `sort` 메서드와 똑같이 배열을 정렬하지만, `toSorted`는 원본 배열을 변경하지 않고 새롱운 정렬된 배열을 반환한다.
  - `sort` : 원본 배열 정렬
  - `toSorted` : 원본 배열 유지, 새로운 배열 반환
- 정렬된 새로운 배열을 반환하는 메서드
- 예시

  ```javascript
  let arr5 = ["c", "a", "b"];
  const sorted = arr5.toSorted();

  console.log(arr5); // ['c', 'a', 'b']
  console.log(sorted); // ['a', 'b', 'c']
  ```

<br>

### 📌 `join()`

- 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
- `join(바꾸고 싶은 구분자)` (기본값은 `,`로 구분된다.)
- 예시

  ```javascript
  let arr6 = ["hi", "im", "ttining"];
  let joined = arr6.join();
  let joined2 = arr6.join(" ");

  console.log(joined); // hi,im,ttining
  console.log(joined2); // hi im ttining
  ```

<br>

#### ⚠️ 주의 사항

- `join()` 메서드는 원본 배열을 변경하지 않으며 **각 요소들을 결합한 새로운 문자열**을 반환한다.
- 배열의 요소가 `undefined`나 `null`일 경우, `join()` 메서드는 이를 **빈 문자열**로 취급한다

<br>

---
