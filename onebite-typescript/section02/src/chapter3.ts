// * object
// 'object의 타입은 객체다.' 라는 정보 밖에 없음
// => 객체의 프로퍼티나 메서드를 알 수 없음
// let user: object = {
//   id: 1,
//   name: "띠닝",
// };

// user.id; // 오류 발생 : object 타입에 id라는 프로퍼티가 없다.

/* -------------------------------------------------------------- */

// * 객체 리터럴 타입
// {} 중괄호를 사용해 프로퍼티의 타입을 모두 정의해준다.
let user: { id: number; name: string } = {
  id: 1,
  name: "띠닝",
};

user.id; // 오류 없이 수행됨

let dog: { name: string; color: string } = {
  name: "꽝꽝이",
  color: "black",
};

/* -------------------------------------------------------------- */

// * 선택적 프로퍼티 (Optional Property)
// id가 있어도 되고, 없어도 될 경우
let user2: { id?: number; name: string } = {
  id: 1,
  name: "띠닝",
};

user2 = {
  name: "홍길동",
};

/* -------------------------------------------------------------- */

// * readonly (읽기 전용 프로퍼티)
// 프로퍼티 값의 변경을 막는 방법
let config: { readonly apiKey: string } = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; // 값을 변경할 수 없다.
