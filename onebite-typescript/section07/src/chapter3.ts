/* -------------------------------------------------------------------------- */
/*                               제네릭 인터페이스                              */
/* -------------------------------------------------------------------------- */

// * 제네릭 인터페이스 KeyPair
// 두 개의 타입 변수 K, V
interface KeyPair<K, V> {
  // 프로퍼티
  key: K;
  value: V;
}

// * KeyPair 타입을 갖는 변수

// 바로 중괄호 {}를 열면 오류가 발생한다.
// 제네릭 형식의 두 가지 타입 인수가 필요하기 때문 (K, V)
// K → string
// V → number

// 제네릭 인터페이스를 사용할 때에는
// 반드시 타입으로 정의할 때,
// 타입 변수에 할당할 타입을 <> 와 함께 사용해야 한다.

// 하나의 인터페이스로 다양한 타입의 객체를 표현할 수 있다.

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// * 인덱스 시그니처
// 프로퍼티의 key와 value의 타입에 관련된 규칙만 만족하면
// 어떤 객체든 허용하는 아주 유연한 객체 타입을 만드는 문법
interface NumberMap {
  // key의 타입은 string, value의 타입은 number
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};

// * 인덱스 시그니처와 제네릭 인터페이스 함께 사용하기
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// * 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

// 제네릭 인터페이스처럼 타입 별칭도 타입으로 사용할 때
// 직접 타입 변수에 할당할 타입을 지정해주어야 한다.
let stringMap2: Map2<string> = {
  key: "hello",
};

// * 제네릭 인터페이스 활용 예시
// 유저 관리 프로그램
// 유저 구분 : 학생 유저 / 개발자 유저

// 이때 Student 인터페이스와 Developer 인터페이스는 서로소 집합이다.
// 만약, 유니온으로 묶으면 서로소 유니온 타입이 된다.
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

// 학생과 개발자 유저 모두를 아우르는 유저 타입
interface User<T> {
  name: string;
  profile: T;
}

// 학생 유저만 가능한 기능
// 학생 유저만 특정할 수 있는 타입이 없기 때문에
// 함수 내부에서 조건문을 이용해 타입 좁히기
function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

// developer 타입의 유저는 student 타입의 유저에 넣을 수 없다.
// goToSchool(developerUser); // 오류 발생

// 유저 변수
const developerUser: User<Developer> = {
  name: "ttining",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};
