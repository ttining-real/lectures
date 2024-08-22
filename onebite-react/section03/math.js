// math 모듈
/* -------------------------------------------------------------------------- */
/*                            CJS 방식 (Common JS)                            */
/* -------------------------------------------------------------------------- */
// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// module.exports = {
//   add,
//   sub,
// };

/* -------------------------------------------------------------------------- */
/*                                  ESM 방식                                   */
/* -------------------------------------------------------------------------- */

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// export { add, sub };
