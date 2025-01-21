# 섹션 2. JavaScript 심화

---

## 13. 비동기 작업 처리하기 2️⃣ `Promise`

### 13-1. `Promise`란?

- 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
- `Promise`는 비동기 작업을 감싸는 객체로, 아래와 같은 역할을 한다.
  - 비동기 작업 실행
  - 비동기 작업 상태 관리
  - 비동기 작업 결과 저장
  - 비동기 작업 병렬 실행
  - 비동기 작업 재실행
  - 기타 등등

<br>

#### 📌 `Promise`의 3가지 상태

- **대기 (Pending)** : 비동기 작업이 아직 완료되지 않은 상태
- **성공 (Fulfilled)** : 비동기 작업이 성공적으로 완료된 상태
- **실패 (Rejected)** : 비동기 작업이 실패한 상태

<br>

#### 📌 상태 전환

- **해결 (Resolve)** : 대기 ➡️ 성공 상태로 전환
- **거부 (Reject)** : 대기 ➡️ 실패 상태로 전환

<br>

### 13-2. `Promise` 객체 생성

- `new Promise()` 생성자의 인수로는 콜백 함수가 오며, 이를 `executor`라고 부른다.
- `executor`는 비동기 작업을 실행하는 함수로, 두 가지 매개변수를 전달받는다.
  - `resolve` : 비동기 작업을 성공 상태로 변경하는 함수
  - `reject` : 비동기 작업을 실패 상태로 변경하는 함수
- 예시

  ```javascript
  const promise = new Promise(() => {
    setTimeout(() => {
      console.log("안녕?");
    }, 2000);
  });

  console.log(promise);

  // ✅ 결과
  // Promise { [[PromiseState]]: "pending", [[PromiseResult]]: undefined }
  // 안녕?
  ```

<br>

#### 📌 `resolve()` 호출하기

- `Promise` 객체의 비동기 작업이 성공적으로 완료되었을 때 `resolve()`를 호출하여 상태를 변경한다.
- 예시 1.

  ```javascript
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("안녕?");
      resolve();
    }, 2000);
  });

  setTimeout(() => {
    console.log(promise);
  }, 3000);

  // ✅ 결과
  // 안녕?
  // Promise { [[PromiseState]]: "fulfilled", [[PromiseResult]]: undefined }
  ```

- **💡 PromiseResult가 `undefined`인 이유**
  - `resolve()` 함수에 인수를 전달하지 않아서 결과 값이 없기 때문
- 예시 2. **resolve()** 에 값 전달하기

  ```javascript
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("안녕?");
      resolve("안녕");
    }, 2000);
  });

  setTimeout(() => {
    console.log(promise);
  }, 3000);

  // ✅ 결과
  // 안녕?
  // Promise { [[PromiseState]]: "fulfilled", [[PromiseResult]]: "안녕" }
  ```

<br>

#### 📌 `reject()` 호출하기

- 비동기 작업이 실패했을 경우 `reject()`를 호출하여 상태를 변경한다.
- 예시

  ```javascript
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("안녕?");
      reject("실패한 이유");
    }, 2000);
  });

  setTimeout(() => {
    console.log(promise);
  }, 3000);

  // ✅ 결과
  // 안녕?
  // ❌ Uncaught (in promise) 실패한 이유
  // Promise { [[PromiseState]]: "rejected", [[PromiseResult]]: "실패한 이유" }
  ```

<br>

### 13-3. `then()` 메서드

- 비동기 작업이 **성공**했을 때 실행되는 메서드
- `resolve()`로 전달된 결과 값을 사용할 수 있다.
- 항상 `Promise` 객체를 반환한다.
- 예시
  ```javascript
  promise.then((value) => {
    console.log(value);
  });
  ```

<br>

### 13-4. `catch()` 메서드

- 비동기 작업이 **실패**했을 때 실행되는 메서드
- `reject()`로 전달된 에러 메시지를 사용할 수 있다.
- 예시
  ```javascript
  promise.catch((error) => {
    console.log(error); // num이 숫자가 아닙니다.
  });
  ```

<br>

### 13-5. 프로미스 체이닝

- `then()`과 `catch()`를 연속적으로 연결하여 비동기 작업을 처리한다.
- 예시
  ```javascript
  promise
    .then((value) => {
      console.log(value); // 성공 값 출력
    })
    .catch((error) => {
      console.log(error); // 실패 이유 출력
    });
  ```

<br>

### 13-6. 활용

#### ⚠️ 문제점 : 콜백 지옥 발생

- 프로미스를 사용하지 않을 경우, 비동기 작업이 중첩되며 복잡도가 증가한다.
- 예시

  ```javascript
  function add10(num) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof num === "number") {
          resolve(num + 10);
        } else {
          reject("num이 숫자가 아닙니다.");
        }
      }, 2000);
    });

    return promise;
  }

  const p = add10(0);

  p.then((result) => {
    console.log(result); // 10

    const newP = add10(result);

    newP.then((result) => {
      console.log(result); // 20
    });
  });
  ```

<br>

#### 💡 개선 : 프로미스 체이닝 활용

- 프로미스를 체이닝하여 코드의 가독성을 높이고 유지보수를 용이하게 만든다.
- 예시

  ```javascript
  add10(0)
    .then((result) => {
      console.log(result); // 10
      return add10(result);
    })
    .then((result) => {
      console.log(result); // 20
      return add10(undefined);
    })
    .catch((error) => {
      console.log(error); // num이 숫자가 아닙니다.
    });
  ```
