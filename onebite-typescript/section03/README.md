# Section 03. 타입스크립트 이해하기

<br>

### 🎯 목차

- [x] 타입스크립트 이해하기
- [x] 타입은 집합이다
- [x] 타입 계층도와 함께 기본 타입 살펴보기
- [x] 객체 타입의 호환성
- [x] 대수 타입
- [x] 타입 추론
- [x] 타입 단언
- [x] 타입 좁히기
- [x] 서로소 유니온 타입

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

# 타입스크립트 이해하기

### 타입스크립트를 이해한다는 것은?

타입스크립트의 구체적인 원리와 동작 방식을 살펴보는 것

- 어떤 기준으로 타입을 정의하는지
- 어떤 기준으로 타입간의 관계를 정의하는지
- 어떤 기준으로 타입의 오류를 검사하는지

<br>
<br>

# 타입은 집합이다

- number Type (슈퍼타입, 부모타입)
  - number literal Type (서브타입, 자식타입)

<br>

### 타입 호환성

- 어떤 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것

```typescript
// 업 캐스팅
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;
```

```typescript
// 다운 캐스팅
let num1: number = 10;
let num2: 10 = 10;

num2 = num1; // 에러 발생
```

<br>
<br>

# 타입 계층도와 함께 기본 타입 살펴보기

### 타입 호환 표

|             | `any` | `unknown` | `object` | `void` | `undefined` | `null` | `never` |
| ----------- | ----- | --------- | -------- | ------ | ----------- | ------ | ------- |
| `any`       |       | ✅        | ✅       | ✅     | ✅          | ✅     | ❌      |
| `unknown`   | ✅    |           | ❌       | ❌     | ❌          | ❌     | ❌      |
| `object`    | ✅    | ✅        |          | ❌     | ❌          | ❌     | ❌      |
| `void`      | ✅    | ✅        | ❌       |        | ❌          | ❌     | ❌      |
| `undefined` | ✅    | ✅        | ☑️       | ✅     |             | ☑️     | ❌      |
| `null`      | ✅    | ✅        | ☑️       | ☑️     | ☑️          |        | ❌      |
| `never`     | ✅    | ✅        | ✅       | ✅     | ✅          | ✅     |         |

<br>
<br>

# 객체 타입의 호환성

### 기본 타입간의 호환성

```typescript
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업 캐스팅
```

<br>

### 객체 타입간의 호환성

- 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?

```typescript
// 슈퍼 타입
type Animal = {
  name: string;
  color: string;
};

// 서브 타입
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "꽝꽝이",
  color: "brown",
  breed: "진도",
};

animal = dog; // 업 캐스팅

dog = animal; // 다운 캐스팅 (오류 발생)
```

<br>

### 초과 프로퍼티 검사

- 서브 타입 객체를 넣으려면, 변수에 저장해두었다가 인수로 전달해야 한다.

```typescript
// 슈퍼 타입
type Book = {
  name: string;
  price: number;
};

// 서브 타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js",
};

book = programmingBook; // 업 캐스팅

programmingBook = book; // 다운 캐스팅 (오류 발생)

// * 초과 프로퍼티 검사
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js", // 초과 프로퍼티 검사 (오류 발생)
};

let book3: Book = programmingBook;

function func(book: Book) {}

func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js", // 초과 프로퍼티 검사 (오류 발생)
});

func(programmingBook);
```

<br>
<br>

# 대수 타입

- 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
- 합집합 타입과 교집합 타입이 존재한다.

<br>

### Union 타입 (합집합)

```typescript
let a: string | number | boolean;

a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];
```

<br>

#### 객체 타입을 이용한 Union 타입

```typescript
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

// Dog
let union1: Union1 = {
  name: "",
  color: "string",
};

// Person
let union2: Union1 = {
  name: "",
  language: "",
};

// Dog | Person
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 오류 발생 (Union1에 해당하지 않음)
let union4: Union1 = {
  name: "",
};
```

<br>

### Intersection 타입 (교집합)

```typescript
let variable: number & string; // never 타입

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
```

<br>
<br>

# 타입 추론

- 타입스크립트가 타입을 추론하는 기준 : **변수의 초기값**
  - 추론할 정보가 있을 경우, 추론 ⭕
    추론할 정보가 없을 경우, 추론 ❌

```typescript
let a = 10; // number 타입으로 추론
let b = "hello"; // string 타입으로 추론
let c = {
  id: 1,
  name: "ttining",
  profile: {
    nickname: "ttining._.",
  },
  urls: ["https://github.com/ttining-real"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}
```

<br>

### `Any` 타입의 진화

- 타입이 변신하듯이 계속 바뀌는 상황
- 암묵적으로 추론된 `any` 타입은 진화한다. (권장 ❌)
- 명시적으로 `any` 타입을 정의하는 것과 동작이 다르다.

<br>

### `let` 키워드

```typescript
// 초기값이 없을 경우 (암묵적 Any 타입)
let d; // 암묵적 any 타입으로 추론
d = 10; // any → number 타입으로 진화
d.toFixed();
d.toUpperCase(); // Property 'toUpperCase' does not exist on type 'number'.

d = "hello"; // number → string 타입으로 진화
d.toUpperCase();
d.toFixed(); // Property 'toFixed' does not exist on type 'string'. Did you mean 'fixed'?
```

<br>

### `const` 키워드

```typescript
// 상수의 초기값
const num = 10; // number literal 타입으로 추론
const str = "hello"; // string literal 타입으로 추론
```

<br>

### 배열

- 초기값을 배열처럼 다양한 타입의 값을 담을 수 있는 값으로 할당하면,
  타입스크립트가 모든 배열 요소들의 타입을 비교해서 최적의 공통 타입으로 타입을 추론한다.

```typescript
// 초기값이 배열인 경우
let arr = [1, "string"]; // (string | number)[] Union 타입으로 추론
```

<br>

### 타입 넓히기

- 프로그래머가 변수를 좀 더 범용적으로 사용할 수 있도록 조금 더 넓은 타입으로 추론해주는 과정
  - `let d = 10;` 과 `const d = 10;` 의 타입이 다름
  - `const`로 선언된 상수가 아니라면, 타입 넓히기를 통해 타입을 추론한다.

<br>
<br>

# 타입 단언

```typescript
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
```

<br>

### 타입 단언의 규칙

```bash
값 as 단언 # 단언식
```

- `A as B`
- A가 B의 슈퍼 타입이거나,
- A가 B의 서브 타입이어야 한다.

<br>

### `const` 단언

- `const` 키워드로 선언한 변수와 동일한 효과를 보도록 한다.
- `const` 단언은 객체 타입과 함께 사용할 때 활용도가 높다.

```typescript
let num4 = 10 as const; // number literal

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// as const를 붙여 초기화한 객체는 프로퍼티의 값을 수정할 수 없는 객체가 된다.
cat.name = ""; // Cannot assign to 'name' because it is a read-only property.
```

<br>

### Non Null 단언

```typescript
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "ttining",
};

const leng: number = post.author?.length; // Type 'number | undefined' is not assignable to type 'number'.

const len: number = post.author!.length;
```

<br>
<br>

# 타입 좁히기

- 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
  타입을 상황에 따라 좁히는 방법을 이야기

```typescript
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
```

<br>
<br>

# 서로소 유니온 타입

- 교집합이 없는 타입들로만 만든 유니온 타입을 말한다.
- `tag`를 붙여 객체를 완벽히 구별해내는 기능을 하기 때문에 **태그드 유니온 타입** 이라고 부르기도 한다.

```typescript
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest; // 서로소 유니온 타입
```

<br>

조건문에 따라 다른 콘솔을 출력해보자.

- Admin - `{name}`님 현재까지 `{kickCount}`명 강퇴했습니다.
- Member - `{name}`님 현재까지 `{point}`포인트를 모았습니다.
- Guest - `{name}`님 현재까지 `{visitCount}`번 방문하셨습니다.

<br>

#### 1️⃣ 직관적이지 않음

- `tag` 프로퍼티가 없을 경우

```typescript
function login(user: User) {
  if ("kickCount" in user) {
    // admin 타입
    // user;
    console.log(`${user.name}님, 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    // member 타입
    // user;
    console.log(`${user.name}님, 현재까지 ${user.point}포인트를 모았습니다.`);
  } else {
    // guest 타입
    // user;
    console.log(
      `${user.name}님, 현재까지 ${user.visitCount}번 방문하셨습니다.`
    );
  }
}
```

<br>

#### 2️⃣ 직관적

- `tag` 프로퍼티 추가 (서로소 집합의 관계로 바뀐다.)

```typescript
function login(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님, 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님, 현재까지 ${user.point}포인트를 모았습니다.`);
  } else {
    console.log(
      `${user.name}님, 현재까지 ${user.visitCount}번 방문하셨습니다.`
    );
  }
}
```

<br>

#### 3️⃣ 훨씬 더 직관적

```typescript
function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님, 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님, 현재까지 ${user.point}포인트를 모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(
        `${user.name}님, 현재까지 ${user.visitCount}번 방문하셨습니다.`
      );
      break;
    }
  }
}
```

<br>
<br>
