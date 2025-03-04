# Section 04. 함수와 타입

<br>

### 🎯 목차

- [x] 함수 타입
- [ ] 함수 타입 표현식과 호출 시그니처
- [ ] 함수 타입의 호환성
- [ ] 함수 오버로딩
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

<br>
<br>

# 함수 타입의 호환성

<br>
<br>

# 함수 오버로딩

<br>
<br>

# 사용자 정의 타입 가드

<br>
<br>
