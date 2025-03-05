# Section 07. 제네릭

<br>

### 🎯 목차

- [x] 제네릭 소개
- [ ] 타입 변수 응용하기
- [ ] `map`, `forEach` 메서드 타입 정의하기
- [ ] 제네릭 인터페이스 & 제네릭 타입 별칭
- [ ] 제네릭 클래스
- [ ] 프로미스와 제네릭

<br>

---

<br>

# 제네릭 소개

> generic : 일반적인, 포괄적인

<br>

## 하나의 함수에 다양한 타입의 값을 넣고 싶을 경우

### `any`

- 모든 타입을 `any`로 취급한다.
- `number` 타입에 `toUpperCase()` 같은 메서드를 사용해도 오류가 발생하지 않는다.

```typescript
function func(value: any) {
  return value;
}

let num = func(10);
num.toUpperCase(); // 오류 발생 ❌
num.toFixed();

let bool = func(true);

let str = func("string");
```

<br>

### `unknown`

- `unknown` 타입에 `toUpperCase()`, `toFixed()` 같은 메서드가 존재하지 않는다고 오류를 발생시킨다.

```typescript
function func(value: unknown) {
  return value;
}

let num = func(10);
num.toUpperCase(); // 'num' is of type 'unknown'.
num.toFixed(); // 'num' is of type 'unknown'.

// 타입 좁히기
if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);

let str = func("string");
```

<br>

### 제네릭 함수

- 모든 타입을 포괄적으로 사용할 수 있는 범용적인 함수
- `<T>` : 타입 변수 (타입을 저장하는 변수)
- **함수 호출 시**, 인수에 따라서 타입 변수에 담기는 **값의 타입이 결정**된다.

```typescript
function func<T>(value: T): T {
  return value;
}

// 인수에 따라 추론된다.
let num = func(10); // let num: number

let bool = func(true); // let bool: boolean

let str = func("string"); // let str: string
```

- 프로그래머가 명시적으로 정의할 수 도 있다.

```typescript
let arr = func([1, 2, 3]); // let arr: number[]

// 타입 단언을 통해 튜플 타입으로 정의
let arr = func([1, 2, 3] as [number, number, number]); // let arr: [number, number, number]

// 함수 호출 시, 타입 변수 T에 할당하고 싶은 타입 정의
let arr = func<[number, number, number]>([1, 2, 3]); // let arr: [number, number, number]
```

<br>
<br>

# 타입 변수 응용하기

<br>
<br>

# `map`, `forEach` 메서드 타입 정의하기

<br>
<br>

# 제네릭 인터페이스 & 제네릭 타입 별칭

<br>
<br>

# 제네릭 클래스

<br>
<br>

# 프로미스와 제네릭

<br>
<br>
