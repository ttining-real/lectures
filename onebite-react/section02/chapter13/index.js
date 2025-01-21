/* -------------------------------------------------------------------------- */
/*                      비동기 작업 처리하기 2️⃣ `Promise`                      */
/* -------------------------------------------------------------------------- */

// * (1)
// const promise = new Promise((resolve, reject) => {
//   // executor : 비동기 작업을 실행하는 함수
//   setTimeout(() => {
//     console.log("안녕?");
//     // resolve("안녕");
//     reject("실패한 이유");
//   }, 2000);
// });

// // console.log(promise);
// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// * (2)
// const promise = new Promise((resolve, reject) => {
//   // executor : 비동기 작업을 실행하는 함수
//   setTimeout(() => {
//     const num = null;
//     if (typeof num === "number") {
//       resolve(num + 10);
//     } else {
//       reject("num이 숫자가 아닙니다.");
//     }
//   }, 2000);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// * then 메서드
// promise의 비동기 작업이 성공했을 때만 실행되는 메서드
// promise.then((value) => {
//   console.log(value);
// });

// * catch 메서드
// promise의 비동기 작업이 실패했을 때만 실행되는 메서드
// promise.catch((error) => {
//   console.log(error); // num이 숫자가 아닙니다.
// });

// * 프로미스 체이닝 : then + catch
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// * (3)
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // executor : 비동기 작업을 실행하는 함수
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

// const p = add10(0);

// 콜백 지옥이 예상됨
// p.then((result) => {
//   console.log(result); // 10
//   const newP = add10(result);
//   newP.then((result) => {
//     console.log(result); // 20
//   });
// });

// 개선
add10(0)
  .then((result) => {
    console.log(result); // 10
    return add10(result);
  })
  .then((result) => {
    console.log(result); // 20
    return add10(undefined);
  })
  .then((result) => {
    console.log(result); // num이 숫자가 아닙니다.
  })
  .catch((error) => {
    console.log(error);
  });
