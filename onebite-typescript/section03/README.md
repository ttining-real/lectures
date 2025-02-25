# Section 03. 타입스크립트 이해하기

<br>

### 🎯 목차

- [x] 타입스크립트 이해하기
- [x] 타입은 집합이다
- [x] 타입 계층도와 함께 기본 타입 살펴보기
- [x] 객체 타입의 호환성
- [x] 대수 타입
- [ ] 타입 추론
- [ ] 타입 단언
- [ ] 타입 좁히기
- [ ] 서로소 유니온 타입

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

<br>
<br>

# 타입 단언

<br>
<br>

# 타입 좁히기

<br>
<br>

# 서로소 유니온 타입

<br>
<br>
