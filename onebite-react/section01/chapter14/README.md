# 섹션 1. JavaScript 기본

---

## 14. 스코프

### 14-1. 스코프(Scope)란?

- **변수나 함수에 접근할 수 있는 유효 범위**를 뜻한다.
- 코드의 어느 부분에서 특정 변수에 접근할 수 있는지를 결정하는 중요한 개념이다.

<br>

#### 📌 특징

- 스코프는 코드의 구조와 변수의 선언 위치에 따라 결정된다.
- JavaScript에는 **전역 스코프**와 **지역 스코프**가 있다.

<br>

#### 📌 예시

```javascript
function funcA() {
  let a = 1; // 지역 스코프
}

console.log(a); // Uncaught ReferenceError: a is not defined
```

**✅ 설명**

- `a` 변수는 함수 내부에서 선언되어 지역 스코프를 갖는다.
- 따라서 함수 외부에서는 접근할 수 없다.

---

### 14-2. 전역 스코프와 지역 스코프

#### 📌 전역 스코프 (Global Scope)

- 프로그램 전체에서 접근 가능한 범위이다.
- 함수나 블록 외부에서 선언된 변수는 전역 스코프를 갖는다.

<br>

#### 📌 지역 스코프 (Local Scope)

- 특정 코드 블록 내부에서만 접근 가능한 범위이다.
- 함수, 블록(`if`, `for` 등) 내부에서 선언된 변수는 지역 스코프를 갖는다.

<br>

#### 📌 예시

```javascript
let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a); // 전역 스코프 접근 가능
}

funcA(); // 출력: 1
console.log(b); // Uncaught ReferenceError: b is not defined
```

**✅ 설명**

- `a`는 전역 변수로 어디에서나 접근 가능하다.
- 반면, `b`는 함수 내부에 선언된 지역 변수로 함수 외부에서는 접근할 수 없다.

<br>

#### 📌 블록 스코프

- ES6 이후 `let`과 `const` 키워드는 블록 스코프를 갖는다.
- 블록 `{}` 내부에서 선언된 변수는 해당 블록 내에서만 접근 가능하다.

<br>

#### 📌 예시

```javascript
if (true) {
  let c = 3; // 블록 스코프
}

console.log(c); // Uncaught ReferenceError: c is not defined

for (let i = 0; i < 3; i++) {
  let d = i; // 블록 스코프
}

console.log(d); // Uncaught ReferenceError: d is not defined
```

---

### 14-3. 요약

| 구분        | 설명                                           | 예제                         |
| ----------- | ---------------------------------------------- | ---------------------------- |
| 전역 스코프 | 코드 전체에서 접근 가능한 범위                 | `let x = 10;`                |
| 지역 스코프 | 함수 또는 블록 내부에서만 접근 가능한 범위     | `function test() { let y; }` |
| 블록 스코프 | `{}`로 감싸진 블록 내부에서만 접근 가능한 범위 | `if (true) { let z; }`       |

#### ⚠️ 주의

- `var` 키워드는 블록 스코프를 가지지 않고, 함수 스코프만 갖는다.
- 이를 피하기 위해 `let` 또는 `const`를 사용하는 것이 좋습니다.
