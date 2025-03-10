# Section 10. 유틸리티 타입

<br>

### 🎯 목차

- [x] 유틸리티 타입 소개
- [x] 맵드 타입 기반의 유틸리티 타입 1️⃣ - `Partial`, `Required`, `Readonly`
- [ ] 맵드 타입 기반의 유틸리티 타입 2️⃣ - `Pick`, `Omit`, `Record`
- [ ] 조건부 타입 기반의 유틸리티 타입 - `Exclude`, `Extract`, `ReturnType`

<br>

---

<br>

# 유틸리티 타입 소개

## 1. 유틸리티 타입

- 제네릭, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해 실무에서 자주 사용되는 타입을 미리 만들어 놓은 것

<br>

### 예시

#### `ReadOnly<T>`

- 모든 프로퍼티를 다 `Readonly`로 바꿔준다.
- `Readonly` 프로퍼티이기 때문에 수정이 불가하다.

```typescript
interface Person {
  name: string;
  age: number;
}

const person: Readonly<Person> = {
  name: "ttining",
  age: 100,
};

person.name = ""; // 오류 발생
```

<br>

#### `Partial<T>`

- 모든 프로퍼티를 선택적 프로퍼티로 변형

```typescript
interface Person {
  name: string;
  age: number;
}

const person: Partial<Person> = {
  name: "ttining",
};

person.name = ""; // 오류 발생
```

<br>
<br>

---

<br>

# 맵드 타입 기반의 유틸리티 타입 1️⃣

> `Partial`, `Required`, `Readonly`

<br>

## `Partial`

> 부분적인, 일부분의

특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

<br>

#### 게시글을 의미하는 타입

```typescript
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}
```

<br>

#### 임시 저장된 게시글

```typescript
const draft: Partial<Post> = {
  title: "제목 나중에",
  content: "초안",
};
```

- `draft` 변수의 타입을 `Post` 타입으로 정의하게 되면,
  `draft` 변수에는 아직 태그 프로퍼티가 없기 때문에 오류가 발생한다.
- 이때, 유틸리티 타입인 `Partial`을 사용할 수 있다. → `Partial<Post>`로 정의
- `Partial<Post>` Type : 타입 변수로 전달한 `Post` Type의 모든 프로퍼티가 모두 선택적 프로퍼티가 된다.

<br>

#### `Partial` 타입 직접 구현해보기

```typescript
// draft 변수의 Partial 타입이 유틸리티 타입이 아닌 해당 타입으로 변경
type Partial<T> = {
  [key in keyof T]?: T[key];
};
```

- 맵드 타입 이용 → 변수 `T`에 들어오는 객체 타입의 키들을 `Partial` 타입이 모두 갖게 된다.
- `keyof T` : 특정 객체 타입으로부터 모든 키를 유니온 타입으로 추출
- `key in keyof T` : `in` 연산자는 맵드 타입에서 제공되는 연산자로,
  왼쪽의 키가 오른쪽의 유니온 타입에 하나씩 맵핑된다.
- `T[key]` : 인덱스드 엑세스 타입 (특정 객체나 배열로부터 특정 프로퍼티의 타입을 추출하는 타입)
  - type 변수 `T`에 들어온 객체 타입으로부터
  - `key`에 해당하는 프로퍼티의 `value` 타입을 추출한다.

<br>

## `Required`

> 필수의, 필수적인

특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

<br>

#### 썸네일도 반드시 포함된 게시글

```typescript
const withThumbnailPost: Required<Post> = {
  title: "한입 타입스크립트 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "http://...",
};
```

- `Required` 유틸리티 타입 : 타입 변수로 전달한 `Post` 타입에서 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

<br>

#### `Required` 타입 직접 구현해보기

```typescript
type Required<T> = {
  // 맵드 타입
  [key in keyof T]-?: T[key];
};
```

- 선택적 프로퍼티 → 필수 프로퍼티로 변경 (`-?` : 물음표를 빼겠다는 의미)

<br>

## `Readonly`

> 읽기 전용, 수정 불가

특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

<br>

#### 보호된 게시글

```typescript
const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글 입니다.",
  tags: [],
  content: "",
};

readonlyPost.content = ""; // 오류 발생
```

- `readonlyPost`의 프로퍼티 수정이 불가능해진다.

<br>

#### `Readonly` 타입 직접 구현해보기

```typescript
type Readonly<T> = {
  // 맵드 타입
  readonly [key in keyof T]: T[key];
};
```

<br>
<br>

---

<br>

# 맵드 타입 기반의 유틸리티 타입 2️⃣

> `Pick`, `Omit`, `Record`

## `Pick`

## `Omit`

## `Record`

<br>
<br>

# 조건부 타입 기반의 유틸리티 타입

> `Exclude`, `Extract`, `ReturnType`

## `Exclude`

## `Extract`

## `ReturnType`

<br>
<br>
