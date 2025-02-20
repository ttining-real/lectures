// * 타입 별칭
// 중복 코드가 길어질 경우
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// func 함수 내부의 타입 User는 func 스코프 안에서 유효하다.
function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: "띠닝",
  nickname: "ttining",
  birth: "1999.99.99",
  bio: "안녕하세요",
  location: "서울",
};

let user2: User = {
  id: 2,
  name: "앙걸",
  nickname: "mygirl",
  birth: "1999.99.99",
  bio: "안녕하세요",
  location: "서울",
};

// * 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type countryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: countryNumberCodes = {
  Korea: 410,
};

// let countryNumberAndStringCodes: countryNumberCodes = {
//   Korea: "ko",
// };
