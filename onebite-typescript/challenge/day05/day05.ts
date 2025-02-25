/* -------------------------------------------------------------------------- */
/*                                   Quiz 1                                   */
/* -------------------------------------------------------------------------- */

let a = 10;
const b = 20;
const c = [1, 2];
const d = [1, "hello", true];
const e = [1, 2, 3] as const;

/* [Quiz] 변수 a의 타입은 무엇으로 추론될까요? */
type A = number;

/* [Quiz] 변수 b의 타입은 무엇으로 추론될까요? */
type B = 20;

/* [Quiz] 변수 c의 타입은 무엇으로 추론될까요? */
type C = number[];

/* [Quiz] 변수 d의 타입은 무엇으로 추론될까요? */
type D = (number | string | boolean)[];

/* [Quiz] 변수 e의 타입은 무엇으로 추론될까요? */
type E = [1, 2, 3];

/* -------------------------------------------------------------------------- */
/*                                   Quiz 2                                   */
/* -------------------------------------------------------------------------- */

type Dog = {
  name: string;
  color: string;
};

type Cat = {
  name: string;
  age: number;
};

type Animal = Dog | Cat;
type DogCat = Dog & Cat;

const animals: Animal[] = [
  {
    name: "토뭉이",
    color: "brown",
  },
  {
    name: "쨔미",
    age: 10,
  },
];

const dogCat: DogCat = {
  name: "개냥이",
  age: 2,
  color: "치즈색",
};
