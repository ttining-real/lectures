// * 사용자 정의 타입 가드

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 프로퍼티 이름을 기준으로 타입 좁히기를 하는 것은 그다지 좋지 않다.
// 또한 프로퍼티가 중간에 이름이 바뀔 경우, 타입 추론이 제대로 되지 않는다.
// function warning(animal: Animal) {
//   if ("isBark" in animal) {
//     // 강아지
//   } else if ("isScratch" in animal) {
//     // 고양이
//   }
// }

// 사용자 정의 타입 가드를 사용해보자.
function isDog(animal: Animal): animal is Dog {
  //      타입 단언
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
    animal;
  } else if ("isScratch" in animal) {
    // 고양이
  }
}
