# Section 07. 제네릭

<br>

### 🎯 목차

- [x] 제네릭 소개
- [x] 타입 변수 응용하기
- [x] `map`, `forEach` 메서드 타입 정의하기
- [x] 제네릭 인터페이스 & 제네릭 타입 별칭
- [x] 제네릭 클래스
- [x] 프로미스와 제네릭

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

## 제네릭 인터페이스

### 제네릭 인터페이스 `KeyPair`

- 두 개의 타입 변수를 갖는 `KeyPair`
- '타입 변수'는 '타입 파라미터', '제네릭 타입 변수', '제네릭 타입 파라미터' 라고도 한다.

```typescript
// 두 개의 타입 변수 K, V
interface KeyPair<K, V> {
  // 프로퍼티
  key: K;
  value: V;
}
```

<br>

### `KeyPair` 타입을 갖는 변수

- 바로 중괄호 `{}`를 열면 오류가 발생한다.
  - 제네릭 형식의 두 가지 타입 인수가 필요하기 때문 (`K`, `V`)
  - `K` → `string`
  - `V` → `number`
- **⚠️ 제네릭 인터페이스 사용 시 주의사항**
  - 타입으로 정의할 때, 반드시 타입 변수에 할당할 타입을 `<>`와 함께 사용해야 한다.
- 제네릭 인터페이스를 이용하면, 하나의 인터페이스로 **다양한 타입의 객체를 표현**할 수 있다.

#### 예시 1️⃣

```typescript
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};
```

#### 예시 2️⃣

```typescript
let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};
```

<br>

## 제네릭 인터페이스와 인덱스 시그니처

- 제네릭 인터페이스는 객체의 인덱스 시그니처 문법과 함께 사용하면,
  굉장히 유연한 객체 타입을 만들 수 있다.

### 인덱스 시그니처

- 프로퍼티의 `key`와 `value`의 타입에 관련된 규칙만 만족하면,
  어떤 객체든 허용하는 아주 유연한 객체 타입을 만드는 문법

```typescript
interface NumberMap {
  // key의 타입은 string, value의 타입은 number
  [key: string]: number;
}

// key와 value의 타입이 일치하면 무엇이든 허용한다.
let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};
```

<br>

### 인덱스 시그니처와 제네릭 함께 사용하기

- 인덱스 시그니처 보다 유연하게 타입을 정의할 수 있다.

```typescript
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};
```

<br>

## 제네릭 타입 별칭

- 제네릭 인터페이스처럼 타입 별칭도 타입으로 사용할 때,
  직접 타입 변수에 할당할 타입을 지정해주어야 한다.

```typescript
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};
```

<br>

## 제네릭 인터페이스 활용 예시

> 언제 사용하면 좋을까?

- 유저 관리 프로그램을 만드는 예시
- 유저 구분 : 학생 유저 / 개발자 유저

<br>

#### 예시 1️⃣

```typescript
// 이때 Student 인터페이스와 Developer 인터페이스는 서로소 집합이다.
// 만약, 유니온으로 묶으면 서로소 유니온 타입이 된다.
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

// 학생과 개발자 유저 모두를 아우르는 유저 타입
interface User {
  name: string;
  profile: Student | Developer;
}

// 학생 유저만 가능한 기능
// 학생 유저만 특정할 수 있는 타입이 없기 때문에
// 함수 내부에서 조건문을 이용해 타입 좁히기
function goToSchool(user: User) {
  if (user.profile.type !== "student") {
    console.log("잘 못 오셨습니다.");
    return;
  }

  user.profile; // Student 타입으로 좁혀짐

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

// 유저 변수
const developerUser: User = {
  name: "ttining",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};
```

- 유저가 많아지고, 특정 회원만 이용할 수 있는 기능(함수)도 많아진다면 불편할 것 같다.
  - 기능을 추가할 때마다 타입 좁히기를 해야하기 때문.

<br>

#### 예시 2️⃣

- `User` 인터페이스를 제네릭 인터페이스로 변경하기
- 객체 타입으로 조합된 복잡한 객체 타입을 정의해서 사용할 때,
  제네릭 인터페이스를 사용하면 비교적 코드와 타입의 유형을 깔끔하게 분리해줄 수 있기 때문에 유용하다.

```typescript
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

// developer 타입의 유저는 student 타입의 유저에 넣을 수 없다.
goToSchool(developerUser); // 오류 발생

const developerUser: User<Developer> = {
  name: "ttining",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};
```

<br>
<br>

# 제네릭 클래스

## 일반 클래스 사용

`NumberList`의 타입을 `number`로 고정했을 때, `StringList`를 추가한다면?

- `NumberList` 클래스를 복사해 `StringList`로 변경하고 타입을 `string`으로 바꿔줘야 한다.
- 결과적으로 중복된 클래스를 하나 더 선언하는 것으로 비효율적인 코드가 생산된다는 문제점이 있다.
- 이때, **제네릭 클래스**를 이용해서 문제를 해결할 수 있다.

```typescript
class NumberList {
  constructor(private list: number[]) {}

  // 메서드
  // 리스트 추가
  push(data: number) {
    this.list.push(data);
  }

  // 리스트 제거
  pop() {
    return this.list.pop();
  }

  // 리스트 출력
  print() {
    console.log(this.list);
  }
}

// 인스턴스 생성
const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();
```

<br>

## 제네릭 클래스 사용

- `Type` 변수와는 다르게 클래스의 생성자를 호출할 때,
  생성자의 인수로 전달하는 값을 기준으로 타입 변수의 타입을 추론한다.
- 제네릭 인터페이스, 제네릭 타입 변수와 다르게
  `new List<number> ([1, 2, 3])` 이런 식으로 반드시 타입을 명시해주지 않아도 된다.

```typescript
class List<T> {
  constructor(private list: T[]) {}

  // 메서드
  // 리스트 추가
  push(data: T) {
    this.list.push(data);
  }

  // 리스트 제거
  pop() {
    return this.list.pop();
  }

  // 리스트 출력
  print() {
    console.log(this.list);
  }
}

// 인스턴스 생성
const numberList = new List([1, 2, 3]); // 타입 변수가 number로 추론된다.
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2", "3"]); // 타입 변수가 string으로 추론된다.
stringList.push("hello");
```

<br>
<br>

# 프로미스와 제네릭

## 프로미스

프로미스는 제네릭 클래스를 기반으로 타입이 선언되어 있다.

- 타입 변수로 비동기 처리의 결과값 타입을 정의해줄 수 있다.
- 그러나, `resolve`, `reject`의 타입은 정의해줄 수 없다.
  - `resolve`, `reject`를 호출해서 전달하는 비동기 작업의 결과 값의 타입을 자동으로 추론하지 못한다.
- 타입 변수 정의를 생략하면, 기본적으로 비동기 작업 처리의 결과값이 `unknown` 타입으로 추론된다.

```typescript
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~~~ 때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // 20
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});
```

<br>

### 프로미스를 반환하는 함수의 타입 정의

- 서버로부터 하나의 게시글 데이터를 불러오는 함수를 만들어야 하는 상황

```typescript
// 게시글 타입 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

// 게시글 하나를 불러오는 함수
function fetchPost() {...}

// fetchPost 함수 호출의 결과값을 담는 변수
const postRequest = fetchPost(); // Promise 객체가 담긴다.

// 결과값 처리
postRequest.then((post) => {
  post.id; // 타입 변수 정의를 생략하면 post의 타입은 unknown이 된다.
});
```

<br>

#### 1️⃣ 프로미스에 타입 변수를 할당하는 방법

```typescript
// 게시글 하나를 불러오는 함수
function fetchPost() {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 내용",
      });
    }, 3000);
  });
}
```

<br>

#### 2️⃣ 함수의 반환값 타입을 직접 정의하는 방법 (✨추천)

- 프로미스는 클래스이기 때문에 타입으로 활용할 수 있다.
  `function fetchPost(): Promise<Post>`

```typescript
// 게시글 하나를 불러오는 함수
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 내용",
      });
    }, 3000);
  });
}
```

<br>
<br>
