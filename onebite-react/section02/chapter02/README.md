# 섹션 2. JavaScript 심화

---

## 2. 단락 평가

### 2-1. 단락 평가(Short-circuit Evaluation)란?

- 특정 조건에 따라 **함수 호출이나 연산을 중단**할 수 있는 기능
- **AND (`&&`)** : 첫 번째 값이 `false`라면 두 번째 값은 평가하지 않고 바로 반환
- **OR (`||`)** : 첫 번째 값이 `true`라면 두 번째 값은 평가하지 않고 바로 반환

```javascript
let varA = false;
let varB = true;

// AND 연산자
console.log(varA && varB); // false

// OR 연산자
console.log(varA || varB); // true
```

<br>

#### 📌 AND (`&&`)

- 앞에 오는 피연산자가 `false`일 경우, 뒤에 있는 피연산자는 실행되지 않는다.

```javascript
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());

// ✅ 결과 : 단락평가 ⭕
// False 함수 실행
// false

console.log(returnTrue() && returnFalse());
// ✅ 결과 : 단락평가 ❌
// True 함수 실행
// False 함수 실행
// false
```

<br>

#### 📌 OR (`||`)

- 앞에 오는 피연산자가 `true`일 경우, 뒤에 있는 피연산자는 실행되지 않는다.

```javascript
console.log(returnFalse() || returnTrue());
// ✅ 결과 : 단락평가 ❌
// False 함수 실행
// True 함수 실행
// true

console.log(returnTrue() || returnFalse());
// ✅ 결과 : 단락평가 ⭕
// True 함수 실행
// true
```

<br>

#### 📌 Falsy & Truthy 값 활용

- 논리 연산식에 Falsy 또는 Truthy 값이 포함되었을 경우, 연산의 결과는 그 **값 자체**가 된다.

```javascript
function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

console.log(returnTrue() || returnFalse());
// ✅ 결과
// True 함수 실행
// 10

console.log(returnFalse() || returnTrue());
// ✅ 결과
// False 함수 실행
// True 함수 실행
// true
```

<br>

---

### 2-2. 단락 평가 활용 사례

```javascript
// 조건문 사용
function printName(person) {
  if (!person) {
    console.log("person에 값이 없음");
    return;
  }
  console.log(person.name);
}

printName(); // person에 값이 없음
```

- 위 조건문을 단락 평가를 활용하여 개선해 보자.

<br>

#### ✅ 개선 I

```javascript
function printName(person) {
  console.log(person && person.name);
}

printName(); // undefined
```

<br>

#### ✅ 개선 II

```javascript
function printName(person) {
  const name = person && person.name;
  console.log(name || "person에 값이 없음");
}

printName(); // person에 값이 없음
printName({ name: "ttining" }); // ttining
```

<br>

---

### 2-3. 단락 평가의 동작 방식 정리

```javascript
console.log("Hello" || "World"); // Hello
console.log("Hello" && "World"); // World
```

- T || T (첫 번째 truthy한 값)
- T && T (두 번째 truthy한 값)

<br>

#### 📌 `A || B`: 첫 번째 Truthy 값(A) 반환.

- `A`가 Truthy면 `A` 반환.
- `A`가 Falsy면 `B` 평가 및 반환.

<br>

#### 📌 `A && B`: 두 번째 Truthy 값(B) 반환.

- `A`가 Falsy면 `A` 반환.
- `A`가 Truthy면 `B` 평가 및 반환.

---
