# Section 04. 함수와 타입

<br>

### 🎯 목차

- [x] 함수 타입
- [x] 함수 타입 표현식과 호출 시그니처
- [x] 함수 타입의 호환성
- [x] 함수 오버로딩
- [ ] 사용자 정의 타입 가드

<br>

---

<br>

# 함수 타입

## 함수 타입 정의

> **✨ 함수를 설명하는 가장 좋은 방법**
>
> - `js` : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
> - `ts` : 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기

<br>

### 함수 1️⃣

```typescript
function func(a: number, b: number): number {
  return a + b;
}
```

<br>

### 함수 2️⃣

반환값의 타입이 없어도, 기본적으로 `return` 문을 기준으로 자동 추론이 된다.

```typescript
function func(a: number, b: number) {
  return a + b;
}
```

<br>

### 화살표 함수 1️⃣

```typescript
const add = (a: number, b: number): number => a + b;
```

<br>

### 화살표 함수 2️⃣

- 반환값의 타입이 없어도, 기본적으로 **`return` 문을 기준으로 자동 추론**이 된다.

```typescript
const add = (a: number, b: number) => a + b;
```

<br>

### 함수의 매개변수 1️⃣

- 매개변수의 기본값을 설정하면,
  타입을 직접 정의하지 않아도 **기본값을 기준**으로 **타입을 추론**한다.

```typescript
function introduce(name = "ttining") {
  console.log(`name: ${name}`);
}
```

<br>

#### ⚠️ 주의사항

1. 기본값과 다른 타입으로 매개변수의 타입을 정의하면 오류가 발생한다.

   ```typescript
   function introduce(name: number = "ttining") {
     // Type 'string' id not assignable to type 'number'.
     console.log(`name: ${name}`);
   }
   ```

2. 함수를 호출할 때, 자동 추론된 매개변수의 타입과 다른 타입의 값을 인수로 전달하면 오류가 발생한다.

   ```typescript
   function introduce(name = "ttining") {
     console.log(`name: ${name}`);
   }

   introduce(1); // Argument of type 'number' is not assignable to parameter of type 'string'.
   ```

<br>

### 함수의 매개변수 2️⃣

- `tall` 매개변수를 생략하고 싶을 경우,
  **선택적 매개변수**로 만들어주면 된다. `tall?: number`

```typescript
function introduce(name = "ttining", tall?: number) {
  console.log(`name: ${name}`);
  // 타입 좁히기 (tall은 number 또는 undefined 이므로, 타입을 좁혀준다.)
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}

introduce("ttining", 200);
introduce("띠닝"); // tall 매개변수를 생략하는 경우
```

<br>

#### ⚠️ 주의사항

- 선택적 매개변수는 필수 매개변수 앞에 오면 안된다.
  - 필수 매개변수 : 생략하면 안되는, 필수로 전달해야하는 매개변수

<br>

### 나머지 매개변수

> `rest parameter`

```typescript
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
```

<br>
<br>

# 함수 타입 표현식과 호출 시그니처

### 함수 타입 표현식

함수 타입 표현식을 쓰지 않는다면?

```typescript
const add = (a: number, b: number): number => a + b;
```

<br>

함수 타입 표현식을 사용하면, 타입 별칭을 통해 함수의 타입을 정의할 수 있다.

```typescript
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

<br>

사칙연산 함수와 같이 비슷한 형식의 함수를 여러 개 만들어야 할 때,
함수 타입 표현식을 사용하면 유용하다.

```typescript
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;
```

<br>

타입 별칭 없이, 표현식만으로도 타입을 정의할 수 있다.

```typescript
const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: (a: number, b: number) => number = (a, b) => a - b;
const multiply: (a: number, b: number) => number = (a, b) => a * b;
const divide: (a: number, b: number) => number = (a, b) => a / b;
```

<br>

### 호출 시그니처 (콜 시그니처)

```typescript
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
```

<br>
<br>

# 함수 타입의 호환성

**'특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가'** 를 판단하는 것

<br>

### 타입 호환성 기준

두 가지 기준을 만족해야만, 두 함수의 타입이 호환된다고 말할 수 있다.

#### 1️⃣ 반환 값의 타입이 호환되는가

```typescript
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number
let b: B = () => 10; // number literal

a = b; // (업 캐스팅)
b = a; // 오류 발생 (다운 캐스팅)
```

<br>

#### 2️⃣ 매개변수의 타입이 호환되는가

##### 2-1. 매개변수의 개수가 같을 때

```typescript
type C = (value: number) => void;
type D = (value: number) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d;
d = c;
```

<br>

```typescript
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; // 오류 발생 (업 캐스팅)
d = c; // 다운 캐스팅 허용
```

- 반환값 타입을 기준으로 호환성을 판단할 때에는,
  매개변수의 타입을 기준으로 호환성을 판단할 때와는 반대로
  **업 캐스팅일 때 호환이 안된다고 평가**한다.

<br>

✨ **매개변수가 객체 타입을 사용하는 예시**를 살펴보면 이해가 쉽다.

```typescript
// Animal 타입은 Dog 타입의 슈퍼 타입이다.
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

animalFunc = dogFunc; // 오류 발생 (업 캐스팅)
dogFunc = animalFunc;

// 예시
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  console.log(animal.color); // Property 'color' does not exist on type 'Animal'.
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};
```

- 서브 타입 ➡️ 슈퍼 타입 : 업 캐스팅 허용 ❌
- 슈퍼 타입 ➡️ 서브 타입 : 다운 캐스팅 허용 ⭕

<br>

##### 2-2. 매개변수의 개수가 다를 때

```typescript
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
func2 = func1; // 오류 발생
```

- 매개변수의 개수가 다를 때에는,
  할당하려고 하는 쪽의 매개변수의 개수가 더 적을 때에만 호환이 가능하다.
- 매개변수의 개수가 다를 때의 기준을 적용하려면,
  타입이 같은 매개변수가 있어야 한다.

  <br>
  <br>

# 함수 오버로딩

### 함수 오버로딩이란?

- 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법을 말한다.
- `JavaScript`에서는 지원되지 않고, **오직 `TypeScript`에서만 지원**된다.
- `C`언어 예시

  ```c
  // 매개변수 없음
  void func(){
    printf('매개변수 없음');
  }

  // 매개변수가 한 개
  void func(int a){
    printf(a + 20);
  }

  // 매개변수가 두 개
  void func(int a, int a){
    printf(i + j);
  }
  ```

<br>

### 함수 오버로딩 예시

`TypeScript`에서 함수 오버로딩을 구현하기 위해서는,
이 함수에 어떤 버전들이 있는지 알려줘야 한다.

- 하나의 함수 : `func`
- 모든 매개변수의 타입 : `number`
- ver1. 매개변수가 1개 : 매개변수에 20을 곱한 값 출력
- ver2. 매개변수가 3개 : 매개변수 전부를 더한 값 출력

```typescript
// * 오버로드 시그니처 (버전들)
// 함수의 구현부 없이 선언식만 써놓은 것
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// * 구현 시그니처 (실제 구현부)
function func() {}

func(); // 오류 발생
func(1);
func(1, 2); // 오류 발생
func(1, 2, 3);
```

<br>

#### 오버로드 시그니처의 존재 의미

- 함수 func에서 a, b, c 매개변수를 필수로 받게 되면,
  첫 번째 오버로드 시그니처에서 오류가 발생한다. (존재 의미가 사라지기 때문)

  ```typescript
  function func(a: number): void; // This overload signature is not compatible with its implementation signature.
  function func(a: number, b: number, c: number): void;

  function func(a: number, b: number, c: number) {
    if (typeof b === "number" && typeof c === "number") {
      console.log(a + b + c);
    } else {
      console.log(a * 20);
    }
  }
  ```

- 오버로드 시그니처들의 매개변수 개수에 차이가 있다면,
  최대한 방어적으로 **선택적 프로퍼티로 매개변수를 정의**하여
  모든 오버로드 시그니처들이 의미가 있도록 만들어주어야 한다.

  ```typescript
  function func(a: number): void;
  function func(a: number, b: number, c: number): void;

  // 선택적 프로퍼티로 매개변수를 정의
  function func(a: number, b?: number, c?: number) {
    if (typeof b === "number" && typeof c === "number") {
      console.log(a + b + c);
    } else {
      console.log(a * 20);
    }
  }
  ```

<br>
<br>

# 사용자 정의 타입 가드

<br>
<br>
