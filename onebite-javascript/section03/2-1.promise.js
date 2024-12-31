/* -------------------------------------------------------------------------- */
/*                               then ~ catch 구문                             */
/* -------------------------------------------------------------------------- */
/*              resolve와 reject 함수에 전달된 단어를 출력하는 코드              */
/* -------------------------------------------------------------------------- */
/*   콜백 함수에 전달된 값은 프로미스 객체의 then 메서드를 사용해 출력할 수 있다.   */
/* -------------------------------------------------------------------------- */

const executor = (resolve, reject) => {
  setTimeout(() => {
    resolve("성공");
    reject("실패");
  }, 3000);
};

const promise = new Promise(executor);

// (1) then 구문
// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// (2) then ~ catch 구문
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
