# Section 08. 타입 조작하기

<br>

### 🎯 목차

- [x] 타입 조작하기
- [x] 인덱스드 엑세스 타입
- [x] `keyof` 연산자
- [x] 맵드 타입
- [x] 템플릿 리터럴 타입

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

특정 객체 타입으로부터 프로퍼티 키들을 유니온 스트링 타입으로 추출하는 연산자

### `keyof`를 사용하지 않는다면,

```typescript
interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: "name" | "age") {
  return person[key];
}

const person: Person = {
  name: "ttining",
  age: 100,
};

getPropertyKey(person, "name");
```

- `key: "name" | "age"`
  `key`의 타입을 유니온 타입으로 사용하게 되면,
  `Person` 객체에 새로운 프로퍼티가 추가되거나
  또는 몇가지 프로퍼티의 이름을 수정해야 할 때마다
  매개변수의 타입을 계속 수정해야 한다. (비효율적)
- 이때 `keyof` 연산자를 사용할 수 있다.

<br>

### `keyof` 사용 예시

```typescript
interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "ttining",
  age: 100,
};

getPropertyKey(person, "name");
```

- `key: keyof Person` 타입은
  `Person` 객체 타입의 모든 프로퍼티 키를 유니온 타입으로 추출한다.
  즉, `"name" | "age"` string literal 유니온 타입으로 추출된다.
- **⚠️ `keyof` 연산자는 무조건 타입에서만 사용할 수 있다.**
  위의 예시에서는 `Person`이 아닌 `person`에 사용할 경우 오류가 발생한다.

<br>

### `typeof`와 함께 사용할 경우

`keyof` 연산자는 `typeof` 연산자와 함께 사용할 수 있다.

> `typeof`
>
> - `typeof person === "object";`
> - 특정 변수의 type을 string 값으로 반환하는 연산자

```typescript
type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "ttining",
  age: 100,
};

getPropertyKey(person, "name");
```

- `Person`의 타입이 타입스크립트가 추론하는 변수 `person`의 타입으로 정의된다.
- `typeof` 연산자는 `type`을 정의할 때, 어떤 변수의 `type`을 추출하는 용도로 활용할 수 있다.
- `key: keyof typeof person`
  - `typeof person` : `person` 객체의 프로퍼티 키들을 유니온 타입으로 추출
  - `key: keyof typeof person`의 결과는 `"name" | "age"`가 된다.

<br>
<br>

# 맵드(Mapped) 타입

기존 객체 타입을 기반으로 새로운 객체 타입을 만드는 문법

<br>

## 예시

유저 정보를 관리하는 간단한 프로그램을 만든다고 가정

### 1️⃣ mapped 사용 ❌

```typescript
// 유저 정보 정의
interface User {
  id: number;
  name: string;
  age: number;
}

interface PartialUser {
  id?: number;
  name?: string;
  age?: number;
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능

  return {
    id: 1,
    name: "ttining",
    age: 100,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // 수정하는 기능
}

updateUser({
  id: 1,
  name: "ttining",
  age: 100,
});
```

- 수정 기능을 위해 똑같은 인터페이스를 정의하고, 선택적 프로퍼티로 변경 (중복 코드)

<br>

### 2️⃣ `mapped` 사용 ⭕

- `mapped`는 `interface`로는 만들 수 없다.
- `mapped` 타입을 사용하면, 특정 객체 타입을 원하는 대로 변환할 수 있다.
  - 하나의 객체 타입으로 다양한 상황에 대처할 수 있다.

```typescript
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

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능

  return {
    id: 1,
    name: "ttining",
    age: 100,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // 수정하는 기능
}

updateUser({
  id: 1,
  name: "ttining",
  age: 100,
});
```

`type PartialUser`

- `[key in "id" | "name" | "age"]?: User[key]`
  - `[key in "id" | "name" | "age"]` : key
    - 인덱스 시그니처와 비슷하지만, `:` 대신 `in` 연산자를 사용한다.
  - `User[key]` : value
    - 인덱스드 엑세스 타입
  - `?:` : mapped 타입이 정의하는 모든 프로퍼티가 선택적 프로퍼티가 된다.

`type BooleanUser`

- `[key in keyof User]: boolean;`
  - 모든 `key`의 타입이 `boolean` 타입으로 정의된다.
  - 프로퍼티가 너무 많아질 때, `keyof` 연산자를 사용하면 된다.

<br>

### 3️⃣ `mapped` 사용 ⭕

`fetchUser` 함수가 반환하는 유저 타입의 모든 프로퍼티가 `readonly`로 바뀐 객체를 반환

```typescript
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function fetchUser(): ReadonlyUser {
  // ... 기능

  return {
    id: 1,
    name: "ttining",
    age: 100,
  };
}

const user = fetchUser();
user.id = 1; // 오류 발생
// 읽기 전용 프로퍼티이므로 수정할 수 없다.
```

- 모든 프로퍼티에 읽기 전용 속성이 붙게 된다.

<br>

### ⚠️ 주의사항

- `mapped`타입은 `interface`로 만들 수 없다. (`type` 별칭으로만 사용 ⭕)

<br>
<br>

# 템플릿 리터럴 타입

스트링 리터럴 타입들을 기반으로 특정 패턴을 갖는 문자열 타입을 만드는 기능

- 문자열로 여러 상황들을 표현해야 하는 경우에 유용하다.

### 템플릿 리터럴 타입 사용 ❌

```typescript
type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = "red-dog" | "red-cat" | "red-chicken" ...
```

<br>

### 템플릿 리터럴 타입 사용 ⭕

```typescript
// Color 타입의 유니온 타입들과 Animal 타입의 유니온 타입들이 조합된 타입으로 만들어진다.
type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

// 만들고 싶은 조합들을 굉장히 간단하게 만들 수 있다.
const coloredAnimal: ColoredAnimal = "black-cat";
```

<br>
<br>
