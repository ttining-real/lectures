# Section 05. 인터페이스

<br>

### 🎯 목차

- [x] 인터페이스
- [x] 인터페이스 확장하기
- [x] 인터페이스 선언 합치기

<br>

---

<br>

### 준비

- `section05` 폴더 만들기
- `package.json`, `package-lock.json`, `tsconfig.json` 파일 복사
- `package.json`의 `name` 고쳐주기
- 다음 단계 따르기

  ```bash
  nnpm i
  tsc
  node dist/index.js
  tsx src/index.ts
  ```

<br>
<br>

# 인터페이스

- 타입에 이름을 지어주는 또 다른 문법
- 객체의 구조를 정의하는 데 특화된 문법
  - 상속, 합침 등의 특수한 기능을 제공한다.

```typescript
// 타입
type A = {
	a : string;
	b : number;
}

// 인터페이스
interface A = {
	a : string;
	b : number;
}
```

<br>
<br>

# 인터페이스 확장하기

- `interface`가 객체 타입이면 확장 가능하다.

<br>

#### 확장하지 않고 정의할 경우

- `name`, `age`가 중복되어 있다.

```typescript
interface Animal {
  name: string;
  color: string;
}

interface Dog {
  name: string;
  color: string;
  isBark: boolean;
}

interface Cat {
  name: string;
  color: string;
  isScratch: boolean;
}

interface Chicken {
  name: string;
  color: string;
  isFly: boolean;
}
```

<br>

#### `Animal`타입 확장(상속)하기

- 확장 후 타입을 다시 정의할 경우, 그 타입은 원본 타입의 서브 타입이어야 한다.

```typescript
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // name: "hello";
  // → Animal의 name 타입의 서브 타입 (string 타입의 서브 타입 = string literal)
  isBark: boolean;
}

const dog: Dog = {
  name: "hello",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}
```

<br>

#### 다중 확장하기

- 여러가지 `interface`를 확장할 수 있다.

```typescript
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
```

<br>
<br>

# 인터페이스 선언 합치기

### 선언 합침(declaration merging)

#### 타입 별칭

- 동일한 타입 별칭을 두 번 정의하려고 하면 오류가 발생한다.

```typescript
type Person = {
  // Duplicate identifier 'Person'.
  name: string;
};

type Person = {
  // Duplicate identifier 'Person'.
  age: number;
};
```

<br>

#### 인터페이스

- 동일한 이름으로 정의해도 오류가 발생하지 않는다. (중복 선언 가능)
- 중복 선언을 하면 모든 선언이 합쳐진다. (선언 머징, declaration merging)

```typescript
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "",
  age: 100,
};
```

<br>

#### ⚠️ 주의사항

- 선언 합침 시, 충돌은 허용하지 않는다.
- 프로퍼티를 중복 정의할 경우, 타입도 똑같이 정의해야 한다.
  - 서브 타입도 오류가 발생하기 때문에 반드시 동일한 타입으로 정의해야 한다.
- 선언 합침과, 확장의 경우를 헷갈리지 말 것.

```typescript
interface Person {
  name: string;
}

interface Person {
  name: number; // 오류 발생 (충돌 허용 ❌)
  age: number;
}

// 확장 시에는 원본 타입의 서브 타입일 경우 허용 ⭕
interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 100,
};
```

<br>

### 모듈 보강

- 선언 합침은 간단한 프로그래밍에서는 자주 사용되지 않는다.
- 라이브러리의 타입 정의가 부실할 경우, 모듈 보강이라는 작업을 한다.

```typescript
interface Lib {
  a: number;
  b: number;
}

// 인터페이스 선언 합침
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello", // 프로퍼티 추가
};
```

<br>
<br>
