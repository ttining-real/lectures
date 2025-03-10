# Section 10. 유틸리티 타입

<br>

### 🎯 목차

- [x] 유틸리티 타입 소개
- [ ] 맵드 타입 기반의 유틸리티 타입 1️⃣ - `Partial`, `Required`, `Readonly`
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

# 맵드 타입 기반의 유틸리티 타입 1️⃣

> `Partial`, `Required`, `Readonly`

## `Partial`

## `Required`

## `Readonly`

<br>
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
