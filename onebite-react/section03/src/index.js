// terminal : node src/index.js
// console.log("안녕 Node.js");

/* -------------------------------------------------------------------------- */
/*                            CJS 방식 (Common JS)                            */
/* -------------------------------------------------------------------------- */
// const moduleData = require("./math");

// console.log(moduleData);
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 구조분해할당
// const { add, sub } = require("./math");

// console.log(add(1, 2));
// console.log(sub(1, 2));

/* -------------------------------------------------------------------------- */
/*                                  ESM 방식                                   */
/* -------------------------------------------------------------------------- */

// import mul, { add, sub } from "./math.js"; // 확장자 명시하기

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

/* -------------------------------------------------------------------------- */
/*                            random color library                            */
/* -------------------------------------------------------------------------- */
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
