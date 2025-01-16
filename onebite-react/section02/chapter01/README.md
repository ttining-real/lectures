# 섹션 2. JavaScript 심화

---

## 1. Truthy와 Falsy

- JavaScript에서 `true`나 `false`로 직접 표현되지 않는 값들도
  조건문에서 참(`truthy`) 또는 거짓(`falsy`)으로 평가된다.

```javascript
// Truthy한 값 (참 같은 값)
if (123) {
  console.log("123 is true");
} else {
  console.log("123 is false");
}
// 결과 : 123 is true

// Falsy한 값 (거짓 같은 값)
if (undefined) {
  console.log("undefined is true");
} else {
  console.log("undefined is false");
}
// 결과 : undefined is false
```

<br>

---

### 1-1. Falsy 값

#### 📌 7가지의 Falsy한 값

- `undefined`
- `null`
- `0`
- `-0`
- `NaN`
- `""` (빈 문자열)
- `0n` (BigInt의 0)

```javascript
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // Big Integer

if (!f1) {
  console.log("falsy"); // Falsy
}
```

<br>

#### 📌 예시

```javascript
let falsyValues = [undefined, null, 0, -0, NaN, "", 0n];

falsyValues.forEach((value) => {
  if (!value) {
    console.log(`${value}는 Falsy 값입니다.`);
  }
});
```

<br>

---

### 1-2. Truthy 값

- Falsy 값 7가지를 제외한 나머지 모든 값은 Truthy로 평가된다.

<br>

#### 📌 대표적인 Truthy 값

- 비어 있지 않은 문자열 : `"hello"`
- 숫자 : `123`, `-45`, `Infinity`, `-Infinity`
- 객체 : `{}`, `[]`
- 함수 : `() => {}`

```javascript
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("Truthy");
}
```

<br>

#### 📌 예시

```javascript
let truthyValues = ["hello", 123, [], {}, () => {}];

truthyValues.forEach((value) => {
  if (value) {
    console.log(`${value}는 Truthy 값입니다.`);
  }
});
```

<br>

---

### 1-3. Truthy와 Falsy의 활용 사례

```javascript
function printName(person) {
  console.log(person.name);
}

// person에 값이 있을 경우
let person = { name: "ttining" };
printName(person); // ttining

// person에 값이 없을 경우
let person;
printName(person); // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
```

<br>

#### 📌 문제점

- 객체의 특정 프로퍼티에 접근할 때, 매개변수가 `undefined`나 `null`인 경우 오류가 발생할 수 있다.

<br>

#### 📌 해결 방법

**1️⃣ Truthy & Falsy를 사용하지 않는 경우**

```javascript
function printName(person) {
  if (person === undefined || person === null) {
    console.log("person의 값이 없습니다.");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person); // 결과: person의 값이 없습니다.
```

<br>

**2️⃣ Truthy & Falsy를 사용하는 경우**

```javascript
function printName(person) {
  if (!person) {
    console.log("person의 값이 없습니다.");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person); // 결과: person의 값이 없습니다.
```

<br>

---

### 1-4. 간단한 활용 팁

#### 💡 기본값 설정

```javascript
let name = userName || "Unknown";
console.log(name); // userName이 Falsy하면 "Unknown" 출력
```

<br>

#### 💡 조건부 실행

```javascript
let obj = { name: "ttining" };
if (obj && obj.name) {
  console.log(obj.name); // ttining
}
```

---
