# Section 02. 타입스크립트 기본

<br>

### 🎯 목차

- [x] 기본 타입
- [x] 원시 타입과 리터럴 타입
- [x] 배열과 튜플
- [x] 객체
- [x] 타입 별칭과 인덱스 시그니처
- [ ] `Enum` 타입
- [ ] `Any`와 `Unknown` 타입
- [ ] `Void`와 `Never` 타입

<br>

#### ✨ 복습

- `node.js` 패키지 초기화 : `npm init`
- `ts-node` 설치 : `npm i @types/node`
- 컴파일러 옵션 파일 생성 : tsconfig.json
- ⛔ `node dist/index.js` 시, 에러가 발생한다면?
  - package.json에서 `"type": "module"` 추가해주기
- `tsx src/index.ts`
  - `tsc` : 파일 변환만 함
  - `ts-node` : 컴파일 + 실행
  - `tsx` : 컴파일 + 실행

---

<br>

# 기본 타입

| 타입        | 설명                               |
| ----------- | ---------------------------------- |
| `number`    | 숫자 타입(정수, 소수 등)           |
| `string`    | 문자열 타입                        |
| `boolean`   | 불리언 (`true` / `false`)          |
| `null`      | `null` 값                          |
| `undefined` | `undefined` 값                     |
| `bigint`    | 큰 정수를 표현하는 타입 (ES2020)   |
| `symbol`    | 고유한 값을 가지는 심볼 타입 (ES6) |

### 👀 예시

```typescript
let age: number = 100;
let userName: string = "ttining";
let isAdmin: boolean = true;
let emptyValue: null = null;
let notDefined: undefined = undefined;
let bigNumber: bigint = 9007199254740991n;
let uniqueKey: symbol = Symbol("key");
```

<br>
<br>

# 원시 타입과 리터럴 타입

## 원시 타입

> 하나의 값만 저장하는 타입

<br>

### `number`

```typescript
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

num1 = "hello"; // → 오류 발생
// 문자 타입 메서드 사용 시 오류 발생
```

<br>

#### ⚠️ `number` 타입이 아닌 `null` 같은 다른 타입의 값을 넣어야 할 경우

- `chapter1.ts`
  ```typescript
  let numA: number = null;
  ```
- `tsconfig.json`
  ```json
  {
    "compilerOptions": {
      "strictNullChecks": false // 엄격한 null 검사를 false로 설정
    }
  }
  ```

<br>

### `string`

```typescript
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = `hello ${num1}`;

str1 = 123; // → 오류 발생
// 숫자 타입 메서드 사용 시 오류 발생
```

<br>

### `boolean`

```typescript
let bool1: boolean = true;
let bool2: boolean = false;
```

<br>

### `null`

```typescript
let null1: null = null;
```

<br>

### `undefined`

```typescript
let unde1: undefined = undefined;
```

<br>

## 리터럴 타입

> 리터럴 → 값

```typescript
let numA: 10 = 10;
numA = 12; // → 오류 발생

let strA: "hello" = "hello";

let boolA: true = true;
let boolB: true = false; // → 오류 발생
```

<br>
<br>

# 배열과 튜플

## 배열

```typescript
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "ttining"];

let boolArr: Array<boolean> = [true, false, true]; // 제네릭 문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"]; // 유니온 타입

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];
```

<br>

## 튜플

```typescript
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // 지정된 길이를 초과할 수 없다.
// tup1 = ['1', '2']; // 지정된 길이에 알맞더라도 타입을 다르게 설정할 수 없다.

let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = ['2', 1, true]; // 순서를 다르게 넣으면 오류 발생
// tup2 = [1]; // 길이를 다르게 넣으면 오류 발생

// 자바스크립트 코드로 컴파일되어 변환될 때는 배열로 변환된다.
// 따라서 배열 메서드를 사용할 수 있다.
// 배열 메서드를 사용할 때는 튜플의 길이 제한이 발동하지 않는다.
// => 어차피 자바스크립트의 배열이라고 생각하기 때문
// tup1.push(1);
// tup1.pop();

const users: [string, number][] = [
  ["띠닝", 1],
  ["앙걸", 2],
  ["지잉짱", 3],
  ["앙걸쿤", 4],
  // [5, "꽝꽝이"], // 오류 발생
];
```

<br>
<br>

# 객체

```typescript
// * object
// 'object의 타입은 객체다.' 라는 정보 밖에 없음
// => 객체의 프로퍼티나 메서드를 알 수 없음
// let user: object = {
//   id: 1,
//   name: "띠닝",
// };

// user.id; // 오류 발생 : object 타입에 id라는 프로퍼티가 없다.

// 객체 리터럴 타입
// {} 중괄호를 사용해 프로퍼티의 타입을 모두 정의해준다.
let user: { id: number; name: string } = {
  id: 1,
  name: "띠닝",
};

user.id; // 오류 없이 수행됨
```

<br>

### TypeScript에서 객체의 Type을 정의할 때

- `Object` 같은 단순한 이름으로 Type을 정의하는 것이 아니라,
  `Property`나 `Method`가 어떻게 생겼는지, 이 객체의 **구조를 기준으로 Type을 정의**한다.
- TypeScript의 이러한 특징을 **구조적 타입 시스템** 이라고 부른다.
  - 프로퍼티를 기준으로 타입을 결정하는 시스템으로, **프로퍼티 기반 타입 시스템(Property Based Type System)** 이라고도 부른다.

<br>

> **명목적 타입 시스템**
>
> 이름을 기준으로 타입을 정의하는 것
>
> 예시: C언어, Java

<br>

### 선택적 프로퍼티

```typescript
// id가 있어도 되고, 없어도 될 경우
let user2: { id?: number; name: string } = {
  id: 1,
  name: "띠닝",
};

user2 = {
  name: "홍길동",
};
```

<br>

### 읽기 전용 프로퍼티

```typescript
// 프로퍼티 값의 변경을 막는 방법
let config: { readonly apiKey: string } = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; // 값을 변경할 수 없다.
```

<br>
<br>

# 타입 별칭과 인덱스 시그니처

## 타입 별칭 (Type Alias)

- 타입을 마치 변수처럼 정의하도록 도와주는 문법

```typescript
// 중복 코드가 길어질 경우
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

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
```

<br>

### ⚠️ 주의사항

- 동일한 스코프에 중복된 이름의 타입 별칭을 선언할 경우, 오류가 발생한다.

<br>

## 인덱스 시그니처

- 객체 타입의 정의를 더 유연하게 하도록 도와주는 문법

<br>

```typescript
// 인덱스 시그니처를 사용하지 않는다면,,
type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
  // ...
};

let countryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // ...
};
```

```typescript
// 인덱스 시그니처 사용
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
};

let countryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
```

```typescript
// 규칙을 위반하지 않는다면 모든 객체를 허용하는 타입
type countryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: countryNumberCodes = {}; // 오류가 발생하지 않는다.
// 아무런 프로퍼티가 없으므로, 규칙을 위반할 프로퍼티가 없다.
```

<br>
<br>

# `Enum` 타입

<br>
<br>

# `Any`와 `Unknown` 타입

<br>
<br>

# `Void`와 `Never` 타입
