// const num = 35;
// console.log(num);

/* -------------------------------------------------------------------------- */
/*                                   export                                   */
/* -------------------------------------------------------------------------- */
// export const num = 35;

// export function add(num1, num2) {
//   return num1 + num2;
// }

// export function User(name) {
//   this.name = name;
// }

/* -------------------------------------------------------------------------- */
/*                             한 번에 export 하기                             */
/* -------------------------------------------------------------------------- */
// const num = 35;

// function add(num1, num2) {
//   return num1 + num2;
// }

// function User(name) {
//   this.name = name;
// }

// export { num, add, User };

/* -------------------------------------------------------------------------- */
/*                               export default                               */
/* -------------------------------------------------------------------------- */
function User(name) {
  this.name = name;
}

export default User;
