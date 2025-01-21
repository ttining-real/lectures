# 섹션 2. JavaScript 심화

---

## 14. 비동기 작업 처리하기 3️⃣ `Async` & `Await`

### `async`

- 어떤 함수를 비동기 함수로 만들어주는 키워드
- 함수가 프로미스를 반환하도록 변환해준다.
- 예시 1.

  ```javascript
  // async 키워드를 사용했기 때문에 getData() 함수는 비동기 함수로 바뀐다.
  // 객체를 반환하는 함수가 아닌, 프로미스를 반환하는 함수로 변환된다.
  async function getData() {
    return {
      name: "띠닝",
      id: "ttining",
    };
  }

  console.log(getData());

  // ✅ 결과
  // Promise {
  //  PromiseState: "fulfilled"
  //  promiseResult: Object
  // }
  ```

- 예시 2.

  ```javascript
  // 만약, getData() 함수가 애초에 프로미스를 반환하는 함수라면,
  // async는 별 다른 동작을 하지 않고 프로미스가 반환되도록 내버려둔다.
  async function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          naem: "띠닝",
          id: "ttining",
        });
      }, 1500);
    });
  }

  console.log(getData());

  // ✅ 결과
  // Promise {
  //  PromiseState: "fulfilled"
  //  promiseResult: Object
  // }
  ```

<br>

### `await`

- **오직 `async` 함수 내부에서만 사용 가능**한 키워드
  - `await` 키워드를 함수 외부에서 사용하려고 하면, 구문 오류가 발생한다.
- 비동기 함수가 다 처리되기를 기다리는 역할
- 예시 1. `await` 키워드를 사용하지 않은 `printData()`

  ```javascript
  function printData() {
    getData().then((result) => {
      console.log(result); // {name: '띠닝', id: 'ttining'}
    });
  }

  printData(); // {name: '띠닝', id: 'ttining'}
  ```

- 예시 2. `await` 키워드를 사용한 `printData()`

  ```javascript
  async function printData() {
    const data = await getData(); // 비동기 작업이 완료될 때까지 대기
    console.log(data); // {name: '띠닝', id: 'ttining'}
  }

  printData(); // {name: '띠닝', id: 'ttining'}
  ```

  - `then()` 메서드를 복잡하게 사용하지 않아도 된다.
