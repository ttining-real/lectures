/* -------------------------------------------------------------------------- */
/*                                     동기                                     */
/* -------------------------------------------------------------------------- */
// const workA = () => {
//   console.log("workA");
// };

// const workB = () => {
//   console.log("workB");
// };

// const workC = () => {
//   console.log("workC");
// };

// workA();
// workB();
// workC();

/* -------------------------------------------------------------------------- */
/*                                     비동기                                    */
/* -------------------------------------------------------------------------- */

// const test = () => {
//   setTimeout(() => {
//     console.log("비동기");
//   }, 3000);
// };

// test();

/* -------------------------------------------------------------------------- */

// const work = (callback) => {
//   setTimeout(() => {
//     console.log("비동기");
//     callback();
//   }, 3000);
// };

// work(() => {
//   console.log("종료");
// });

/* -------------------------------------------------------------------------- */

const workA = () => {
  setTimeout(() => {
    console.log("workA");
  }, 5000);
};

const workB = () => {
  setTimeout(() => {
    console.log("workB");
  }, 3000);
};

const workC = () => {
  setTimeout(() => {
    console.log("workC");
  }, 10000);
};

workA();
workB();
workC();