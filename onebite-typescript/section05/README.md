# Section 05. 인터페이스

<br>

### 🎯 목차

- [x] 인터페이스
- [x] 인터페이스 확장하기
- [ ] 인터페이스 합치기

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

# 인터페이스 합치기

<br>
<br>
