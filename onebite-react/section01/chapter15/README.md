# 섹션 1. JavaScript 기본

---

## 15. 객체 I

### 15-1. 객체란?

- 원시 타입이 아닌 **참조 타입**의 자료형
- 키-값 쌍으로 이루어진 데이터를 저장하며, 데이터와 메서드(행동)를 함께 포함할 수 있다.
- 현실 세계의 사물이나 개념을 컴퓨터 프로그램으로 표현하는 데 유용하다.

```javascript
let person = {
  name: "ttining",
  age: 100,
  location: "서울",
  greet: function () {
    console.log(`안녕하세요, ${this.name}입니다.`);
  },
};
```

---

### 15-2. 객체를 생성하는 방법

#### 1️⃣ 객체 생성자

```javascript
let obj = new Object();
```

<br>

#### 2️⃣ 객체 리터럴

- 가장 많이 사용된다.
- 간결하고 가독성이 좋다.

```javascript
let obj = {};
```

<br>

#### 3️⃣ `Object.create()`

```javascript
let obj = Object.create(null); // 프로토타입 없이 객체 생성
```

---

### 15-3. 객체 프로퍼티 (객체 속성)

- 프로퍼티 : 키(`key`)와 값(`value`)으로 이루어진 데이터
- 다양한 자료형이 값으로 올 수 있다.
- 프로퍼티 이름으로 숫자 사용 가능 (단, 점 표기법으로 접근 불가)

```javascript
let person = {
  name: "ttining",
  age: 100,
  hobby: ["🎵", "🖥️"],
  "like coffee": true,
  10: "numberKey",
  greet: function () {
    console.log(`안녕하세요, ${this.name}입니다.`);
  },
  etc: {},
};
```

<br>

#### 📌 프로퍼티 `key`

- 문자열이나 숫자만 사용할 수 있다.
- 따옴표(`''`)를 사용하지 않아도 되지만, 띄어쓰기가 있을 경우 `"like coffee"`와 같이 따옴표를 사용한다.

<br>

#### 📌 프로퍼티 `value`

- `value`에는 객체, 함수 등 다양한 자료형이 올 수 있다.

---

### 15-4. 객체 프로퍼티를 다루는 방법

#### 📌 특정 프로퍼티에 접근하기

**1️⃣ 점 표기법**

```javascript
let name = person.name;
console.log(name); // ttining
```

- 이 때 `person.name2` 처럼 존재하지 않는 프로퍼티에 접근하려고 하면, 에러가 아닌 `undefined` 값이 반환된다.

<br>

**2️⃣ 괄호 표기법**

```javascript
let age = person["age"];
console.log(age); // 100

// 잘못된 예 ❌
let name = person[age]; // Uncaught ReferenceError: Cannot access 'age' before initialization
```

- 이 때 `person[age2]` 처럼 존재하지 않는 프로퍼티에 접근하려고 하면, 에러가 아닌 `undefined` 값이 반환된다.

<br>

**3️⃣ 이렇게도 사용 가능하다.**

- 변수에 접근하고자 하는 키 값을 담아 프로퍼티를 꺼내오도록 설정할 수 있다.
- 프로퍼티를 동적으로 변화시키면서 꺼내와야할 때, 괄호 표기법을 이용하는 게 좋다.

```javascript
let property = "hobby";
let hobby = person[property];

console.log(hobby); // ['🎵', '🖥️']
```

<br>

#### 📌 새로운 프로퍼티 추가하기

```javascript
// 1️⃣ 점 표기법
person.job = "home protector";

// 2️⃣ 괄호 표기법
person["favoriteFood"] = "떡볶이";

console.log(person); // {name: 'ttining', ... job: 'home protector', favoriteFood: '떡볶이'}
```

<br>

#### 📌 프로퍼티 수정하기

```javascript
// 1️⃣ 점 표기법
person.job = "UI Developer";

// 2️⃣ 괄호 표기법
person["favoriteFood"] = "라멘";

console.log(person); // {name: 'ttining', ... job: 'UI Developer', favoriteFood: '라멘'}
```

<br>

#### 📌 프로퍼티 삭제하기

- `delete` 연산자를 사용한다.

```javascript
// 1️⃣ 점 표기법
delete person.job;

// 2️⃣ 괄호 표기법
delete person["favoriteFood"];
```

<br>

#### 📌 프로퍼티 존재 여부 확인하기 (`in` 연산자)

- 객체의 프로토타입 체인까지 확인

```javascript
let result1 = "name" in person;
let result2 = "animal" in person;

console.log(result1); // true
console.log(result2); // false
```

<br>

#### 📌 객체 순회하기 (`for...in`)

```javascript
for (let key in person) {
  console.log(key, person[key]);
}
```

<br>

#### 📌 객체 키와 값 다루기

```javascript
console.log(Object.keys(person)); // ['name', 'age', 'location']
console.log(Object.values(person)); // ['ttining', 100, '서울']
console.log(Object.entries(person)); // [['name', 'ttining'], ['age', 100], ['location', '서울']]
```

---
