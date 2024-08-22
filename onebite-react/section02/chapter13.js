function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수
    // executor

    setTimeout(() => {
      // console.log("안녕");

      // resolve("안녕");
      // reject("실패 이유");

      // const num = 10;

      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 1000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// then 메서드 (→ 그 후에)
// promise의 비동기 작업이 성공했을 때만 실행되는 메서드
// promise.then((value) => {
//   console.log(value);
// });

// catch
// 실패 버전의 then 메서드
// promise.catch((error) => {
//   console.log(error);
// });

// then 메서드는 프로미스 객체를 반환한다.
// 프로미스 체이닝
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
