# Section 09. 조건부 타입

<br>

### 🎯 목차

- [x] 조건부 타입 소개
- [x] 분산적인 조건부 타입
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

조건부 타입과 유니온을 함께 사용하면, 조건부 타입이 분산적으로 동작하게 된다.

### 개념

```typescript
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
```

- `c`는 타입 변수에 `StringNumberSwitch<number>`가 한번 들어가고,
  `StringNumberSwitch<string>`이 들어간다.
- 결과적으로 `StringNumberSwitch<number> | StringNumberSwitch<string>` 이런 유니온 타입이 된다.

<br>

### 예제 1️⃣

분산적 조건부 타입의 기능을 이용하여 유니온에서 특정 타입만 제거하는 타입을 만들어보자.

```typescript
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
```

1 단계

- `Exclude<number, string>` |
- `Exclude<string, string>` |
- `Exclude<boolean, string>`

2단계

- `number` |
- `never` |
- `boolean`

결과

- `number | never | boolean`
- 유니온 타입에 `never` 타입이 포함되어 있으면, 이는 공집합이기 때문에 결국 사라진다.

<br>

### 예제 2️⃣

`Exclude`와 반대되는 `Extract` 타입을 만들어보자.

```typescript
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
```

1단계

- `Extract<number, string>` |
- `Extract<string, string>` |
- `Extract<boolean, string>`

2단계

- `never`
- `string`
- `never`

3단계

- `string`

<br>

### 조건부 타입이 분산적으로 작동하지 않게 하는 방법

- `extends` 양 옆의 타입을 `[]`로 묶어준다.

```typescript
type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let d: StringNumberSwitch<boolean | number | string>; // number
```

- `<boolean | number | string>`의 합집합 유니온 타입이
  `number`가 아니기 때문에 `number` 타입이 된다.

<br>
<br>

# `infer` - 조건부 타입 내에서 타입 추론하기

<br>
<br>
