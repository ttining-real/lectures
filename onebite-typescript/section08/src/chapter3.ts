/* -------------------------------------------------------------------------- */
/*                              맵드(Mapped) 타입                              */
/* -------------------------------------------------------------------------- */

// * 예시 : 유저 정보를 관리하는 간단한 프로그램

// 유저 정보 정의
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

// fetchUser 함수가 반환하는 유저 타입의
// 모든 프로퍼티가 readonly로 바뀐 객체를 반환
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
//                    User
function fetchUser(): ReadonlyUser {
  // ... 기능

  return {
    id: 1,
    name: "ttining",
    age: 100,
  };
}

const user = fetchUser();
// user.id = 1;

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // 수정하는 기능
}

updateUser({
  // id: 1,
  // name: "ttining",
  age: 100,
});
