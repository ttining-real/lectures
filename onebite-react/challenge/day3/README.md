### Quiz 1. 모든 약수 찾기

---

다음 요구사항을 만족하는 코드를 작성하세요

- 변수 `num`의 모든 약수를 다 찾아서 출력하세요

```javascript
let num = 100;

for (;;) {
  // ...
}
```

<br>

### Quiz 2. 소수 판별기 (에라토스테네스의 체)

---

다음 요구사항을 만족하는 코드를 작성하세요

- 함수 `isPrimeNumber`는 한개의 매개변수 `num`을 제공받아 소수인지 판별합니다.
- `num`이 소수라면 `true`를, 아니라면 `false`를 반환합니다.
- 예외적으로 1은 소수로 판별하셔도 됩니다!

```javascript
function isPrimeNumber(num) {
  // 여기에 코드를 작성하세요
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

// 출력 결과 :
// true
// false
// true
// false
```

<br>

### Quiz 3. 계산기 만들기

---

콜백함수를 이용하여 다음 요구사항을 만족하는 코드를 작성하세요

1. 두 수를 덧셈하는 함수 `add`, 뺄셈하는 함수 `sub`를 각각 구현하세요

   - 2개의 매개변수 `num1`, `num2`를 제공받습니다.
   - 연산의 결과를 반환합니다.

2. 다음 조건을 만족하는 함수 `calc`를 구현하세요
   - 3개의 매개변수 `num1`, `num2`, `callback`을 제공받습니다.
     - `num1`, `num2` : 연산에 활용될 숫자
     - `callback` : 실제로 연산을 수행할 함수
   - `callback` 함수로 전달된 연산의 결과값을 콘솔에 출력하세요

```javascript
function add(num1, num2) {}

function subtract(num1, num2) {}

function calculate(num1, num2, operation) {}

calculate(5, 3, add);
calculate(5, 3, subtract);

// 출력 결과 :
// 8
// 2
```
