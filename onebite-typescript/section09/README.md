# Section 09. 조건부 타입

<br>

### 🎯 목차

- [x] 조건부 타입 소개
- [ ] 분산적인 조건부 타입
- [ ] `infer` - 조건부 타입 내에서 타입 추론하기

<br>

---

<br>

# 조건부 타입 소개

자바스크립트의 삼항 연산자를 사용하여 조건에 따라 타입을 결정하는 문법이다.

### 조건부 타입 예시

```typescript
// type A는 number
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// type B는 number
type B = ObjB extends ObjA ? number : string;
```

<br>

### 제네릭 + 조건부 타입 예시 1️⃣

타입을 가변적으로 쓰면서도 논리의 흐름에 따라 타입을 바꿔줄 수 있다.

```typescript
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number
```

<br>

### 제네릭 + 조건부 타입 예시 2️⃣

```typescript
function removeSpaces(text: string | undefined | null) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im ttining");

result?.toUpperCase();
```

<br>

### 제네릭 + 조건부 타입 + 오버로드 시그니처 예시

```typescript
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im ttining");
result.toUpperCase();

let result2 = removeSpaces(undefined);
```

<br>
<br>

# 분산적인 조건부 타입

<br>
<br>

# `infer` - 조건부 타입 내에서 타입 추론하기

<br>
<br>
