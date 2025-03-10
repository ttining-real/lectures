# Section 10. 유틸리티 타입

<br>

### 🎯 목차

- [x] 유틸리티 타입 소개
- [x] 맵드 타입 기반의 유틸리티 타입 1️⃣ - `Partial`, `Required`, `Readonly`
- [x] 맵드 타입 기반의 유틸리티 타입 2️⃣ - `Pick`, `Omit`, `Record`
- [ ] 조건부 타입 기반의 유틸리티 타입 - `Exclude`, `Extract`, `ReturnType`

<br>

---

<br>

# 유틸리티 타입 소개

## 1. 유틸리티 타입

- 제네릭, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해 실무에서 자주 사용되는 타입을 미리 만들어 놓은 것

<br>

## 2. 예시

### `ReadOnly<T>`

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

### `Partial<T>`

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

## 📍 `Partial`

> 부분적인, 일부분의

특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

<br>

### 게시글을 의미하는 타입

```typescript
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}
```

<br>

### 임시 저장된 게시글

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

### `Partial` 타입 직접 구현해보기

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

## 📍 `Required`

> 필수의, 필수적인

특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

<br>

### 썸네일도 반드시 포함된 게시글

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

### `Required` 타입 직접 구현해보기

```typescript
type Required<T> = {
  // 맵드 타입
  [key in keyof T]-?: T[key];
};
```

- 선택적 프로퍼티 → 필수 프로퍼티로 변경 (`-?` : 물음표를 빼겠다는 의미)

<br>

## 📍 `Readonly`

> 읽기 전용, 수정 불가

특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

<br>

### 보호된 게시글

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

### `Readonly` 타입 직접 구현해보기

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

<br>

## 📍 `Pick`

> 뽑다, 고르다

- `Pick<T, K>`
- 객체 타입으로부터 특정 프로퍼티를 골라내는 타입

<br>

### 게시글을 의미하는 타입

```typescript
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}
```

<br>

### 옛날 게시글

> `tags`, `thumbnail` 기능이 없었을 때

```typescript
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};
```

- `Pick` 타입을 사용하면, `Post` 타입에서 `title`과 `content` 프로퍼티만 골라낼 수 있다.
  - 첫 번째 인수 : 사용할 타입
  - 두 번째 인수 : 사용하고 싶은 프로퍼티
- → `Post` 타입으로부터 `title`과 `content` 프로퍼티만 있는 객체 타입을 새롭게 정의한다.

<br>

### `Pick` 타입 직접 구현해보기

```typescript
type Pick<T, K extends keyof T> = {
  // 맵드 타입
  [key in K]: T[key];
};
```

- 맵드 타입의 `in` 연산자
  - `in` 연산자 우측에는 string literal로 만든 유니온 타입이 들어와야 한다.
- 타입 변수 `K` 제한해주기
  - `K extends keyof T` : 변수 `K`에 할당할 수 있는 타입은
    `T`로 들어오는 객체 타입의 `key` 값을 추출한 유니온 타입의 서브 타입만 들어올 수 있다.
- 타입 변수 `T`에 `Post` 타입을 전달할 경우,
  - `keyof T`는 `K extends 'title' | 'tags' | 'content' | 'thumbnailURL'`이 된다.
- 이때, 타입 변수 `K`에 'title' | 'content' 유니온이 할당되면,
  `'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'`이 된다.
- 만약, 타입 변수 `K`에 `number`가 할당된다면?
  - `number extends 'title' | 'tags' | 'content' | 'thumbnailURL'`가 되므로 조건식이 거짓이 된다. (제약 조건에 일치하지 않는다.)

<br>

## 📍 `Omit`

> 생략하다, 빼다

- `Omit<T, K>`
- 객체 타입으로부터 특정 프로퍼티를 제거하는 타입 (`Pick`과 반대)

<br>

### 제목이 없는 게시글

> 페이스북, 링크드인, 트위터 같은 SNS에는 제목이 있는 게시들도 있고, 없는 게시글도 있다.

#### `Pick`

```typescript
const noTitlePost: Pick<Post, "content" | "tags" | "thumbnailURL"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};
```

- 프로퍼티 개수가 늘어날 경우, 번거로워진다.
- 이때 `Omit` 타입을 사용할 수 있다.

#### `Omit`

```typescript
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};
```

<br>

### `Omit` 타입 직접 구현해보기

```typescript
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
```

- 타입 변수 `T` : `Post` 타입
- 타입 변수 `K` : `'title'`

#### `Pick<T, Exclude<keyof T, K>` 코드 분석

- 1단계

  ```typescript
  Pick<T, Exclude<keyof T, K>>;
  ```

- 2단계

  ```typescript
  Pick<Post, Exclude<keyof Post, "title">>;
  ```

- 3단계

  ```typescript
  Pick<Post, Exclude<"title" | "content" | "tags" | "thumbnailURL", "title">>;
  ```

  - `Exclude` type (유틸리티 타입, \*분산적인 조건부 타입 참고)
    ```typescript
    Exclude<1번째 타입 변수, 2번째 타입 변수>
    ```
    - 1번째 타입 변수에서 2번째 타입 변수를 제거한 타입을 반환하는 타입이다.

- 4단계
  ```typescript
  Pick<Post, "content" | "tags" | "thumbnailURL">;
  ```

<br>

## 📍 `Record`

- `Record<K, V>`
- 객체 타입을 새롭게 정의할 때, 인덱스 시그니처처럼 유연하지만
  조금 더 제한적인 객체 타입을 정의하고 싶다면 `Record` 타입을 사용할 수 있다.
  (\*실무에서 자주 사용됨)

<br>

### 썸네일 타입

> 썸네일 기능을 업그레이드 한다고 가정
>
> 사용자의 화면 크기에 따라 여러 버전의 썸네일 이미지를 준비

#### `Legacy`

```typescript
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};
```

- 중복 코드가 길어진다.

<br>

#### `Record`

```typescript
type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
```

- `Record<첫 번째 타입 변수, 두 번째 타입 변수>`
  - 첫 번째 타입 변수 : 객체의 프로퍼티의 `key`를 유니온으로 받는다.
  - 두 번째 타입 변수 : `key`들의 `value` 타입을 받는다.

<br>

### `Record` 타입 직접 구현해보기

```typescript
type Record<K extends keyof any, V> = {
  [key in K]: V;
};
```

- `extends keyof any`
  - 무슨 타입인지 알 수 없지만, 적어도 객체 타입의 키를 추출해놓은 유니온 타입임을 알려준다.

<br>
<br>

---

<br>

# 조건부 타입 기반의 유틸리티 타입

> `Exclude`, `Extract`, `ReturnType`

## `Exclude`

## `Extract`

## `ReturnType`

<br>
<br>
