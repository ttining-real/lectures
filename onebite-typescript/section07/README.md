# Section 07. 제네릭

<br>

### 🎯 목차

- [x] 제네릭 소개
- [x] 타입 변수 응용하기
- [x] `map`, `forEach` 메서드 타입 정의하기
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

### 1️⃣ 타입 변수 선언

- 타입 변수는 여러 개 선언할 수 있다.

```typescript
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);
```

<br>

### 2️⃣ 튜플과 배열 타입

- 튜플 타입
- 첫 번째 요소의 타입은 `T`
- 나머지 요소는 배열로 여러 개 / 배열 요소의 타입을 모를 경우
  - `rest` 파라미터를 쓰듯이 `...unknown[]`라고 써주기

```typescript
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue(["hello", "mynameis"]); // 'hello'
let str2 = returnFirstValue([1, "hello", "mynameis"]); // 1
```

<br>

### 3️⃣ `extends` 키워드 사용

- 데이터 타입이 `T`이고, `T`에 `unknown` 타입이 들어올 경우
  - `unknown` 타입에 `length` 프로퍼티가 없으므로 오류 발생
- `T`의 타입 제한하기
  - `extends` 키워드를 사용하여, `length` 프로퍼티가 `number` 타입인 타입으로 확장
    - `<T extends { length: number }>`

```typescript
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

let var4 = getLength(10); // Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
```

<br>
<br>

# `map`, `forEach` 메서드 타입 정의하기

### `map` 메서드

```typescript
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);
// map(["hi", "hello"], (it) => it.toUpperCase());
map(["hi", "hello"], (it) => parseInt(it));
```

<br>

### `forEach` 메서드

```typescript
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
  it;
});
```

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
