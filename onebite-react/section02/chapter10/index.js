// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
let date2 = new Date("1994/09/16/10:10:10");

// let date2 = new Date("1994-09-16");
// let date2 = new Date("1994. 09. 16");
// let date2 = new Date(1994, 09, 16, 23, 59, 59);

console.log(date1); // Mon Jan 20 2025 14:54:17 GMT+0900 (한국 표준시)
console.log(date2); // Fri Sep 16 1994 10:10:10 GMT+0900 (한국 표준시)

console.clear();

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1); // 1737352789448

let date4 = new Date(ts1);
console.log(date4); // Mon Jan 20 2025 15:00:36 GMT+0900 (한국 표준시)

console.clear();

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // 연 추출
let month = date1.getMonth() + 1; // 월 추출
let date = date1.getDate(); // 일 추출

let hour = date1.getHours(); // 시간 추출
let minute = date1.getMinutes(); // 분 추출
let seconds = date1.getSeconds(); // 초 추출

console.log(year, month, date, hour, minute, seconds); // 2025 1 20 15 2 42

// 4. 시간 수정하기
date1.setFullYear(2025);
date1.setMonth(0);
date1.setDate(20);
date1.setHours(15);
date1.setMinutes(5);
date1.setSeconds(30);

console.log(date1); // Mon Jan 20 2025 15:05:30 GMT+0900 (한국 표준시)

console.clear();

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Mon Jan 20 2025
console.log(date1.toLocaleString()); // 2025. 1. 20. 오후 3:05:30
