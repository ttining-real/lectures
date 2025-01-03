/* -------------------------------------------------------------------------- */
/*                           프로미스 객체를 반환하는 delay 함수를              */
/*                                호출하는 start 함수                          */
/* -------------------------------------------------------------------------- */
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3초가 지났습니다.");
    }, ms);
  });
};

// const start = () => {
//   delay(3000).then((res) => {
//     console.log(res);
//   });
// };

// start();

/* -------------------------------------------------------------------------- */
/*                                  async 사용                                 */
/* -------------------------------------------------------------------------- */

// 어떠한 함수에 async 라는 키워드를 사용하면, 해당 함수는 항상 자동으로 프로미스 객체를 반환한다.
// const start = async () => {
//   delay(3000).then((res) => {
//     console.log(res);
//   });
// };

// start();

/* -------------------------------------------------------------------------- */
/*                                 await 사용                                  */
/* -------------------------------------------------------------------------- */

// const start = async () => {
//   let result = await delay(3000); // delay 함수의 프로미스 객체가 처리 완료될 때까지 기다린다. (코드 중단)

//   // 프로미스 객체가 처리 완료되면 코드가 순서대로 실행된다.
//   console.log(result);
// };

// start();

/* -------------------------------------------------------------------------- */
/*                                try catch 문                                */
/* -------------------------------------------------------------------------- */

const start = async () => {
  try {
    let result = await delay(3000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

start();