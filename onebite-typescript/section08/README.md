# Section 08. 타입 조작하기

<br>

### 🎯 목차

- [x] 타입 조작하기
- [ ] 인덱스드 엑세스 타입
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
