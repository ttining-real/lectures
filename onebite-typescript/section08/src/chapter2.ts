/* -------------------------------------------------------------------------- */
/*                                 keyof 연산자                                */
/* -------------------------------------------------------------------------- */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

// const person: Person = {
//   name: "ttining",
//   age: 100,
// };

const person = {
  name: "ttining",
  age: 100,
};

getPropertyKey(person, "name");
