# Section 08. 타입 조작하기

<br>

### 🎯 목차

- [x] 타입 조작하기
- [x] 인덱스드 엑세스 타입
- [ ] `keyof` 연산자
- [ ] 맵드 타입
- [ ] 템플릿 리터럴 타입

<br>

---

<br>

# 타입 조작하기

## 타입 조작(Type Manipulation)이란?

- 기존 타입을 변형하거나 새롭게 조합하는 기능을 의미한다.
- 이를 통해 코드의 유연성과 재사용성을 높일 수 있다.

<br>

## 주요 타입 조작 기능

- 이전 시간에 배운 '제네릭'도 타입 조작 기능에 포함된다.

### 1️⃣ 인덱스드 엑세스 타입

객체, 배열, 튜플에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입

```typescript
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "ttining",
    age: 100,
  },
};
```

<br>

### 2️⃣ `keyof` 연산자

특정 객체 타입으로부터 프로퍼티 키들을 모두 스트링 리터럴 유니온 타입으로 추출하는 연산자

```typescript
interface Person {
  name: string;
  age: number;
  isOld: boolean;
}

type PersonKey = keyof Person;

const personKey: PersonKey = "";
```

<br>

### 3️⃣ 맵드(Mapped) 타입

기존의 객체 타입으로부터 새로운 객체 타입을 만드는 타입

```typescript
interface Person {
  name: string;
  age: number;
  isOld: boolean;
}

type ReadonlyPerson = {
  readonly [P in keyof Person]: Person[P];
};
```

<br>

### 4️⃣ 템플릿 리터럴 타입

스트링 리터럴 타입을 기반으로 정해진 패턴의 문자열만 포함하는 타입

```typescript
type Company = "SAMSUNG" | "NAVER" | "APPLE" | "GOOGLE";
type Employee = "developer" | "marketer" | "designer";
type CompanyEmployee = `${Company} - ${Employee}`;

const companyEmployee: CompanyEmployee = "";
```

<br>
<br>

# 인덱스드 엑세스 타입

객체, 배열, 튜플에 모두 사용할 수 있다.

<br>

## 객체 예시

```typescript
// 게시글 타입 정의
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

// '작성자 - id'를 출력하는 함수
function printAuthorInto() {...}

// Post 타입을 갖는 post 변수
const post: Post = {
  title: "게시글 제목",
  content: "게시글 제목",
  author: {
    id: 1,
    name: "ttining",
    age: 100,
  },
};
```

<br>

### 1️⃣ 매개변수 타입을 직접 정의

```typescript
function printAuthorInfo(author: { id: number; name: string; age: number }) {
  console.log(`${author.name} - ${author.id}`);
}
```

- Post 타입에 프로퍼티를 추가할 경우, 매개변수의 타입 또한 수정해야 한다. (번거로움)
- 이 때, 인덱스드 엑세스 타입을 사용하면 편리하다.

<br>

### 2️⃣ 인덱스드 액세스 타입 사용

```typescript
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name} - ${author.id}`);
}
```

- `author: Post["author"]`
  - 여기서 `"author"` 이 스트링 리터럴 타입을 스트링 인덱스라고 한다.
  - 인덱스를 이용해 특정 타입의 프로퍼티에 접근한다고 해서 **인덱스드 엑세스 타입**이라고 한다.

<br>

#### ⚠️ 주의사항

1. 인덱스에 들어가는 문자열 `"author"`는 값이 아닌 **타입**이다.
   따라서 다음과 같이 사용할 수 없다.

   ```typescript
   const author = "author";

   // 오류 발생
   function printAuthorInfo(author: Post[author]) {
     console.log(`${author.name} - ${author.id}`);
   }
   ```

2. 존재하지 않는 프로퍼티 이름을 넣을 경우 오류가 발생한다.

<br>

#### 💡 팁

- 만약, `author` 프로퍼티에서 `id` 프로퍼티의 타입만 가져오고 싶다면?

  ```typescript
  // 중첩 대괄호 사용
  function printAuthorInfo(author: Post["author"]["id"]) {
    console.log(`${author.name} - ${author.id}`);
  }
  ```

  - 먼저 `author` 프로퍼티의 타입 가져오기 (`Post`의 `author`객체 타입이 됨)
  - 이 객체 타입으로부터 대괄호 `[]`를 사용해 `id` 프로퍼티를 가져올 수 있다.

<br>

## 배열 예시

```typescript
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// * 인덱스드 액세스 타입 사용
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

// 대괄호 [] 안에 number 타입을 넣어주면,
// 배열 타입으로부터 하나의 요소 타입만 가져온다.
// 숫자를 넣어도 동일하다.
const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 제목",
  author: {
    id: 1,
    name: "ttining",
    age: 100,
  },
};
```

- 인덱스에 어떤 숫자를 넣어도 그앞이 배열 타입이라면, 배열의 요소 타입을 추출해온다.
- 대괄호 `[]` 안의 숫자는 값이 아니라 타입이다. (number literal type)
  따라서 다음과 같이 사용할 수 없다.

  ```typescript
  const num = 0;

  const post: PostList[num] = { ... }; // 오류 발생
  ```

<br>

## 튜플 예시

```typescript
type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type Tup3 = Tup[3]; // 오류 발생

type TupNum = Tup[number]; // Tup 타입의 최적의 공통 타입을 추출한다.
// type TupNum = string | number | boolean
```

- 길이가 고정된 배열이기 때문에 존재하지 않는 인덱스의 타입을 추출하려고 하면 오류가 발생한다.
- 인덱스에 `number`를 넣을 경우, 튜플 타입 안에 있는 모든 타입의 최적의 공통 타입을 추출한다.

<br>
<br>

# `keyof` 연산자

<br>
<br>

# 맵드(Mapped) 타입

<br>
<br>

# 템플릿 리터럴 타입

<br>
<br>
