const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workA");
    }, 5000);
  });
};

const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workB");
    }, 3000);
  });
};

const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workC");
    }, 10000);
  });
};

// const start = async () => {
//   try {
//     let resultA = await workA();
//     let resultB = await workB();
//     let resultC = await workC();

//     console.log(resultA);
//     console.log(resultB);
//     console.log(resultC);
//   } catch (err) {
//     console.log(err);
//   }
// };

// start(); // 5초 + 3초 + 10초 = 총 18초 후에 코드가 실행된다.

/* -------------------------------------------------------------------------- */
/*                                Promise.all()                               */
/* -------------------------------------------------------------------------- */

const start = async () => {
  try {
    let results = await Promise.all([workA(), workB(), workC()]);
    results.forEach((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};

start(); // 총 10초 후에 코드가 실행된다.
