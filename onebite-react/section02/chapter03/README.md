# 섹션 2. JavaScript 심화

---

## 3. 구조 분해 할당

### 3-1. 구조 분해 할당(Destructuring Assignment)이란?

- 배열이나 객체에 저장된 값을 분해하여 각각 다른 변수에 할당할 수 있도록 하는 문법이다.
- 코드의 가독성을 높이고, 데이터를 다루는 과정을 간결하게 만들어준다.

<br>

---

### 3-2. 배열 구조 분해 할당

- 배열에서 구조 분해 할당은 `[]` 를 사용한다.
- 요소가 부족하면 `undefined`가 기본값으로 할당된다.
- 기본값을 명시적으로 설정하여, 예상치 못한 `undefined`를 방지할 수 있다.

```javascript
let arr = [1, 2, 3];

// 번거로움 : 인덱스를 이용한 할당
let one = arr[0];
let two = arr[1];
let three = arr[2];

// ✅ 구조 분해 할당
let [one, two, three, four = 4] = arr;

console.log(one, two, three, four); // 1 2 3 4
```

<br>

---

### 3-3. 객체 구조 분해 할당

- 객체 구조 분해 할당은 `{}` 를 사용한다.
- 객체에 존재하지 않는 프로퍼티를 분해하려고 하면, `undefined`가 할당된다.
- 기본값을 설정하여 `undefined`를 방지할 수 있다.
- 변수명을 변경하고자 할 때는 `프로퍼티명: 새로운 변수명` 형태를 사용한다

```javascript
let person = {
  name: "ttining",
  age: 100,
  hobby: "🎵",
};

// 번거로움 : 직접 접근
let name = person.name;
let age = person.age;
let hobby = person.hobby;

// ✅ 구조 분해 할당
let { name: myName, age, hobby, extra = "hello" } = person;

console.log(myName, age, hobby, extra); // ttining 100 🎵 hello
```

<br>

#### 📌 중첩 객체 구조 분해 할당

- 중첩된 객체 구조도 분해할 수 있다.

```javascript
let user = {
  id: 1,
  profile: {
    username: "ttining",
    email: "ttining@example.com",
  },
};

let {
  profile: { username, email },
} = user;

console.log(username); // ttining
console.log(email); // ttining@example.com
```

<br>

### 3-4. 함수의 매개변수에서 구조 분해 할당 사용

- 객체를 함수의 인자로 넘길 때, 구조 분해 할당을 통해 필요한 값만 선택적으로 받을 수 있다.
- 이 방법은 매개변수의 순서를 기억할 필요 없이, 필요한 데이터만 명시적으로 처리할 수 있게 해준다.

```javascript
let person = {
  name: "ttining",
  age: 100,
  hobby: "🎵",
};

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person); // ttining 100 🎵 undefined
```

<br>

#### 📌 기본값 설정과 유효성 검사

- 매개변수에 기본값을 설정하면 인자가 비어있을 때에도 안전하게 처리할 수 있다.

```javascript
const greet = ({ name = "익명", age = 0 } = {}) => {
  console.log(`안녕하세요, ${name}님! 나이는 ${age}살입니다.`);
};

greet(); // 안녕하세요, 익명님! 나이는 0살입니다.
```

<br>

---

### 3-5. 활용 팁 및 주의사항

#### ⚠️ 중첩 구조 분해 사용 시 주의

- 중첩된 객체가 없는 경우에는 에러가 발생할 수 있으므로 기본값 설정을 권장한다.

```javascript
let user = {};
let { profile: { username } = {} } = user; // 안전하게 처리
console.log(username); // undefined
```

<br>

#### 💡 배열과 객체를 혼합하여 사용

- 배열과 객체가 혼합된 구조에서도 구조 분해 할당을 사용할 수 있다.

```javascript
let data = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
let [{ id: firstId, name: firstName }, { name: secondName }] = data;

console.log(firstId, firstName, secondName); // 1 A B
```
