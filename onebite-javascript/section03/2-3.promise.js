/* -------------------------------------------------------------------------- */
/*               콜백 지옥을 promise 객체를 사용해 변경해보기                    */
/* -------------------------------------------------------------------------- */

const workA = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });

  return promise;
};
const workB = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  });

  return promise;
};
const workC = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });

  return promise;
};

// 콜백 지옥이랑 뭐가 다름...?
// workA(10).then((resA) => {
//   console.log(`workA : ${resA}`);
//   workB(resA).then((resB) => {
//     console.log(`workB : ${resB}`);
//     workC(resB).then((resC) => {
//       console.log(`workC : ${resC}`);
//     });
//   });
// });

// then 메서드를 조금 다른 방식으로 사용해 코드를 더 깔끔하게 작성해보자.
// 프로미스 체이닝
workA(10)
  .then((resA) => {
    console.log(`workA : ${resA}`);
    return workB(resA);
  })
  .then((resB) => {
    console.log(`workB : ${resB}`);
    return workC(resB);
  })
  .then((resC) => {
    console.log(`workC : ${resC}`);
  });
