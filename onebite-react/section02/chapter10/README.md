# 섹션 2. JavaScript 심화

---

## 10. `Date` 객체와 날짜

### 10-1. Date 객체를 생성하는 방법

- 생성자 함수에 인수로 아무것도 전달하지 않으면, 현재 날짜와 시간을 출력한다.
- 문자열 형식에 따라서 다양한 방법으로 날짜를 생성할 수 있다.
- 예시
  ```javascript
  let date1 = new Date(); // 생성자 (현재 시간)
  let date2 = new Date("1994/09/16 10:10:10"); // 특정 날짜 (일반적인 문자열 형식)
  let date3 = new Date("1994-09-16"); // ISO 형식 날짜 (이 방식이 일반적으로 권장됨)
  let date4 = new Date(1994, 8, 16); // 연, 월, 일 (월은 0부터 시작)
  console.log(date1); // Mon Jan 20 2025 14:54:17 GMT+0900 (한국 표준시)
  console.log(date2); // Fri Sep 16 1994 10:10:10 GMT+0900 (한국 표준시)
  console.log(date3); // Fri Sep 16 1994 00:00:00 GMT+0900 (한국 표준시)
  console.log(date4); // Fri Sep 16 1994 00:00:00 GMT+0900 (한국 표준시)
  ```

<br>

### 10-2. 타임 스탬프

- 타임스탬프는 `1970년 1월 1일 00:00:00 UTC`를 기준으로 경과된 밀리초(ms) 단위의 값이다.
- **👉 활용 예시** : 서버 간 시간 동기화 및 날짜 차이 계산
- 예시

  ```javascript
  let ts1 = date1.getTime();
  console.log(ts1); // 1737352789448

  // 해당 타임스탬프를 다시 날짜로 변환
  let date4 = new Date(ts1);
  console.log(date4); // Mon Jan 20 2025 15:00:36 GMT+0900 (한국 표준시)
  ```

<br>

### 10-3. 시간 요소 추출하기

- `Date` 객체는 다양한 메서드를 통해 날짜와 시간 요소들을 추출할 수 있다.
- 월은 `0`부터 시작하므로 주의해야 한다.
- 예시

  ```javascript
  let date1 = new Date(); // 현재 날짜

  let year = date1.getFullYear(); // 연도 추출
  let month = date1.getMonth() + 1; // 월 추출 (월은 0부터 시작하므로 +1)
  let date = date1.getDate(); // 일 추출

  let hour = date1.getHours(); // 시간 추출
  let minute = date1.getMinutes(); // 분 추출
  let seconds = date1.getSeconds(); // 초 추출

  console.log(year, month, date, hour, minute, seconds); // 2025 1 20 15 2 42
  ```

<br>

### 10-4. 시간 수정하기

- `Date` 객체는 시간을 수정하는 다양한 메서드를 제공한다.
- 예를 들어, `setFullYear()`, `setMonth()`, `setDate()`, `setHours()` 등으로 값을 설정할 수 있다.
- `set~` 메서드는 **원본 `Date` 객체를 변경**한다.
- 예시

  ```javascript
  let date1 = new Date(); // 현재 시간

  date1.setFullYear(2025);
  date1.setMonth(0); // 1월 (0부터 시작)
  date1.setDate(20);
  date1.setHours(15);
  date1.setMinutes(5);
  date1.setSeconds(30);

  console.log(date1); // Mon Jan 20 2025 15:05:30 GMT+0900 (한국 표준시)
  ```

<br>

### 10-5. 시간을 여러 포맷으로 출력하기

- `Date` 객체를 다양한 형식으로 출력할 수 있는 메서드가 제공된다.
- `toDateString()` : 날짜만 로케일에 맞게 출력
- `toLocaleTimeString()` : 시간만 로케일에 맞게 출력
- `toISOString()` : ISO 8601 형식 (예: `"2025-01-20T06:05:30.000Z"`)
- 예시
  ```javascript
  console.log(date1.toDateString()); // Mon Jan 20 2025
  console.log(date1.toLocaleString()); // 2025. 1. 20. 오후 3:05:30
  console.log(date1.toLocaleDateString()); // 2025. 1. 20.
  console.log(date1.toLocaleTimeString()); // 오후 3:05:30
  console.log(date1.toISOString()); // 2025-01-20T06:05:30.000Z
  ```

<br>

### 10-6. `Date` 객체 활용

#### 📆 날짜 비교

```javascript
let date1 = new Date();
let date2 = new Date("2025-01-20");

if (date1.getTime() > date2.getTime()) {
  console.log("date1 is later than date2");
} else {
  console.log("date1 is earlier than or the same as date2");
}
```

<br>

#### 📆 날짜 차이 계산 (예: 일수 차이)

```javascript
let startDate = new Date("2025-01-01");
let endDate = new Date("2025-01-20");

let timeDiff = endDate - startDate; // 밀리초 차이
let daysDiff = timeDiff / (1000 * 3600 * 24); // 밀리초를 일수로 변환
console.log(daysDiff); // 19
```

**⚠️ 주의** : `Date` 객체 간 연산 시 밀리초 단위로 차이가 계산되므로 필요한 단위로 변환해야 한다.

<br>

---
