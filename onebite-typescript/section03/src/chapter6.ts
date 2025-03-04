// * 타입 단언
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;

person.name = "ttining";
person.age = 100;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "꽝꽝이",
  color: "brown",
  breed: "진도",
} as Dog;

// * 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼 타입이거나,
// A가 B의 서브 타입이어야 함.

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; // 오류 발생
let num3 = 10 as unknown as string; // 다중 단언 (지양)

// * const 단언
// const 키워드로 선언한 변수와 동일한 효과를 보도록 한다.
// const 단언은 객체 타입과 함께 사용할 때 활용도가 높다.
let num4 = 10 as const; // number literal

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// as const를 붙여 초기화한 객체는 프로퍼티의 값을 수정할 수 없는 객체가 된다.
cat.name = ""; // Cannot assign to 'name' because it is a read-only property.

// * Non Null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "ttining",
};

// const len: number = post.author?.length; // Type 'number | undefined' is not assignable to type 'number'.
const len: number = post.author!.length;
