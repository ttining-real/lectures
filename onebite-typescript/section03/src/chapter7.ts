// * 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법을 이야기

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => PErson : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  // value;
  // value.toFixed(); // 에러 발생
  // value.toUpperCase(); // 에러 발생

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }

  // null도 object에 포함된다.
  // null에는 getTime 메서드를 사용할 수 없다.
  // else if (typeof value === "object") {
  //   console.log(value.getTime());
  // }
}
