// 반복문

// * for 문
// for (초기식; 조건식; 증감식) {
//   console.log('반복');
// }

for (let idx = 1; idx <= 10; idx++) {
  // console.log("반복");
  console.log(idx); // 1 2 3 4 5 6 7 8 9 10
}

console.clear();

for (let idx = 1; idx <= 10; idx++) {
  // console.log("반복");

  // 반복의 특정 회차 건너뛰기
  if (idx % 2 === 0) {
    continue; // 1 3 5
  }

  console.log(idx); // 1 2 3 4 5

  // 조건식이 거짓이 되지 않았을 때 강제로 종료하기
  if (idx >= 5) {
    break;
  }
}
