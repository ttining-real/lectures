# 섹션 1. JavaScript 기본

---

## 16. 객체 II

### 16-1. 상수 객체

- **상수 객체**란 `const` 키워드로 선언된 객체를 의미한다.
- 객체 자체를 재할당할 수 없지만, 내부의 프로퍼티는 수정 가능하다.

<br>

#### 📌 상수 객체의 선언

```javascript
const animal = {
  type: "고슴도치",
  name: "슴슴이",
  color: "beige",
};
```

<br>

#### 📌 객체 자체를 재할당하려고 하면 오류 발생

```javascript
animal = { a: 1 }; // Uncaught TypeError: Assignment to constant variable
```

<br>

#### 📌 객체 내부의 프로퍼티는 추가, 수정, 삭제 가능

```javascript
animal.age = 2; // 프로퍼티 추가
animal.name = "꽝꽝이"; // 프로퍼티 수정
delete animal.color; // 프로퍼티 삭제

console.log(animal); // {type: '고슴도치', name: '꽝꽝이', age: 2}
```

---

### 16-2. 메서드(Method)

- 메서드란 값이 함수인 프로퍼티를 의미하며, 객체의 동작을 정의할 때 사용된다.
- 호출 방식은 `객체.메서드()` 형태 또는 `객체["메서드"]` 형태를 사용한다.

<br>

#### 📌 메서드 작성 방법 - 익명 함수

```javascript
const person = {
  name: "ttining",
  // 익명 함수
  sayHi: function () {
    console.log("안녕!");
  },
};

// 메서드는 함수이기 때문에 호출하는 것이 가능하다.
person.sayHi(); // 출력: 안녕!
```

<br>

#### 📌 메서드 작성 방법 - 화살표 함수

```javascript
const person = {
  name: "ttining",
  // 화살표 함수
  sayHi: () => {
    console.log("안녕!");
  },
};

person.sayHi(); // 출력: 안녕!
```

**⚠️ 주의**

- 화살표 함수는 자신만의 `this`를 가지지 않으므로,
  객체 메서드에서 `this`가 필요한 경우 화살표 함수 사용은 피해야 한다.

<br>

#### 📌 메서드 작성 방법 - 단축 메서드 선언

- 단축 메서드 선언 방식은 함수 키워드 없이도 간결하게 작성 가능하다.

```javascript
const person = {
  name: "ttining",
  // 메서드 선언 : 화살표 함수보다 더 단축됨
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi(); // 출력: 안녕!
person["sayHi"](); // 출력: 안녕!
```

---

### 16-3. 메서드와 `this`

#### 📌 `this`의 의미

- `this`는 메서드가 호출된 객체를 참조한다.
- 메서드 내에서 `this`는 메서드를 소유한 객체를 가리킨다.

```javascript
const person = {
  name: "ttining",
  sayHi() {
    console.log(`안녕! 내 이름은 ${this.name}이야.`);
  },
};

person.sayHi(); // 출력: 안녕! 내 이름은 ttining이야.
```

<br>

#### 📌 `this`와 화살표 함수의 차이

- **화살표 함수**는 자신만의 `this`를 가지지 않으며, **상위 스코프의 `this`** 를 사용한다.

```javascript
const person = {
  name: "ttining",
  sayHi: () => {
    console.log(`안녕! 내 이름은 ${this.name}이야.`);
  },
};

person.sayHi(); // 출력: 안녕! 내 이름은 undefined이야.
```

**⚠️ 주의**

- 화살표 함수의 특성 때문에 객체의 메서드로는 부적합하다.
- 대신 단축 메서드나 익명 함수를 사용해야 한다.

---

### 16-3. 메서드 호출 방식

#### 📌 점 표기법

```javascript
const person = {
  name: "ttining",
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi(); // 출력: 안녕!
```

<br>

#### 📌 괄호 표기법

- 괄호 표기법은 동적으로 메서드 이름을 결정할 때 유용하다.

```javascript
const person = {
  name: "ttining",
  sayHi() {
    console.log("안녕!");
  },
};

person["sayHi"](); // 출력: 안녕!
```

---
