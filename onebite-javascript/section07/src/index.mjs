// const num = 20;

// console.log(num);

/* -------------------------------------------------------------------------- */
/*                                   import                                   */
/* -------------------------------------------------------------------------- */
// import { num, add, User } from "./test.mjs";

// console.log(num);
// console.log(add(10, 20));
// console.log(new User("띠닝"));

/* -------------------------------------------------------------------------- */
/*                    as 키워드를 사용해 한 번에 import 하기                    */
/* -------------------------------------------------------------------------- */
// import * as testModule from "./test.mjs";

// console.log(testModule.num);
// console.log(testModule.add(10, 20));
// console.log(new testModule.User("띠닝"));

import testModule from "./test.mjs";

console.log(new testModule("띠닝"));
