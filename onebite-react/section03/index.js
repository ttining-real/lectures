// terminal : node index.js
// console.log("안녕 Node.js");

/* -------------------------------------------------------------------------- */
/*                            CJS 방식 (Common JS)                            */
/* -------------------------------------------------------------------------- */
// 구조분해할당
// const { add, sub } = require("./math");
// console.log(moduleData);

// console.log(add(1, 2));
// console.log(sub(1, 2));

/* -------------------------------------------------------------------------- */
/*                                  ESM 방식                                   */
/* -------------------------------------------------------------------------- */

// import mul, { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

/* -------------------------------------------------------------------------- */
/*                            random color library                            */
/* -------------------------------------------------------------------------- */
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
