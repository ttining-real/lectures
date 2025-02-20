// * enum 타입
// 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "띠닝",
  role: Role.ADMIN, // 0번 - 관리자
  language: Language.korean,
};
const user2 = {
  name: "홍길동",
  role: Role.USER, // 1번 - 일반 유저
};
const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2번 - 게스트
};

console.log(user1, user2, user3); // { name: '띠닝', role: 0 } { name: '홍길동', role: 1 } { name: '아무개', role: 2 }
