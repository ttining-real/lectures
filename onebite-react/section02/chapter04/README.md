# 섹션 2. JavaScript 심화

---

## 4. Spread 연산자와 Rest 매개변수

### 4-1. Spread 연산자

- Spread : 흩뿌리다, 펼치다 라는 뜻
- 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

<br>

#### 📌 배열에 Spread 사용

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// 배열의 길이가 바뀔 수 있음
// let arr3 = [4, arr1[0], arr1[1], arr1[2], 5, 6];

// ✅ Spread 연산자 사용
let arr3 = [4, ...arr1, 5, 6];
console.log(arr3); // [4, 1, 2, 3, 5, 6]

let arr4 = [...arr1, ...arr2]; // 배열 합치기
console.log(arr4); // [1, 2, 3, 4, 5, 6]
```

<br>

#### 📌 객체에 Spread 사용

- **⚠️ 주의** : Spread 연산자를 사용하여 객체를 합칠 때, 동일한 키가 있을 경우 뒤에 오는 값이 덮어쓴다.

```javascript
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  // 번거로움
  // a: obj1.a,
  // b: obj1.b,

  // ✅ Spread 연산자 사용
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2); // [a: 1, b: 2, c: 3, d: 4]
```

<br>

#### 📌 함수 인자에 Spread 사용

```javascript
let arr1 = [1, 2, 3];

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1); // 1 2 3
```

<br>

---

### 4-2. Rest 매개변수

- Rest : 나머지
- ⚠️ 나머지 매개변수는 함수의 인자로 여러 개의 값을 받을 때 사용된다. (매개변수를 정의하는 공간 `()`에서 사용)
- ⚠️ **Rest 매개변수는 항상 마지막에 와야 한다.** Rest 뒤에 다른 매개변수를 선언할 수 없다.

<br>

#### 📌 Rest 매개변수 사용

```javascript
let arr1 = [1, 2, 3];

function funcB(...rest) {
  console.log(rest);
  console.log(...rest);
}

funcB(...arr1);
// [1, 2, 3]
// 1 2 3
```

<br>

#### 📌 Rest 매개변수와 다른 매개변수 함께 사용

- **⚠️ 주의** : Rest 매개변수는 함수의 마지막 매개변수로만 올 수 있기 때문에, 그 뒤에 다른 매개변수를 선언하면 문법 오류가 발생한다.

```javascript
function funcC(one, ...rest) {
  console.log(one); // 첫 번째 값
  console.log(rest); // 나머지 값들
}

funcC(...arr1);
// 1
// [2, 3]
```
