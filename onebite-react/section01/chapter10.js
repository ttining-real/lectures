// 반복문 (for 문)
for (let idx = 1; idx <= 10; idx++) {
  // 특정 조건 건너뛰기
  if (idx % 2 === 0) {
    continue;
  }

  console.log(idx);

  // 특정 조건에서 반복 종료
  if (idx >= 5) {
    break;
  }
}
