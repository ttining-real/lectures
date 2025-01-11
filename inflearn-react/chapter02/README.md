# chapter 02. JSX

<br>

#### 🌱 목차

- [x] 1.  JSX란?
- [x] 2.  JSX에서 JavaScript 사용하기
- [x] 3.  JSX에서의 조건문
- [x] 4.  JSX에서의 반복문
- [x] 5.  JSX 스타일링
- [x] 6.  JSX로 구구단 출력하기

---

## 1. JSX란?

### JSX = HTML + JavaScript

> JavaScript를 확장한 문법(JavaScript XML)

- 모양은 HTML에 가까움
- 내부적으로 JavaScript를 사용할 수 있음
- React는 이 JSX를 이용하여 화면을 그림(컴포넌트)

<br>

### JSX의 특징

- JSX에서 사용되는 태그의 속성 이름이 HTML과 약간 다름
  - `class` → `className`
  - `for` → `htmlFor`
  - `onclick` → `onClick`
- 태그를 명시적으로 닫아줘야 함
- 하나의 태그로 감싸져 있어야 함

**예시. HTML 🆚 JSX.**

- HTML
  ```
  <button class="btn">Button</button>
  <input type="text">
  ```
- JSX
  ```
  <div>
    <button className="btn">Button</button>
    <input type="text" />
  </div>
  ```

---

## 2. JSX에서 JavaScript 사용하기

- src
  - lecture
    - 01.jsx-javascript.jsx

---

## 3. JSX에서의 조건문

- src
  - lecture
    - 02.jsx-condition.jsx

---

## 4. JSX에서의 반복문

- src
  - lecture
    - 03.jsx-loop.jsx

---

## 5. JSX 스타일링

- src
  - lecture
    - 04.jsx-style.jsx

### CSS-in-JS

> 자바스크립트에 의해서 스타일링 되는 것을 CSS-in-JS라고 부른다.

- 자바스크립트를 이용하여 CSS를 작성하는 방식
- 자바스크립트 안에서 CSS를 `import`하는 방식

---

## 6. JSX로 구구단 출력하기

- src
  - lecture
    - 05.jsx-multiplication-table.jsx
- 요구사항
  - 구구단 2~9단 출력하기
  - 단, 5단은 제외한다.
  - 홀수 단은 다른 색으로 표시한다.
  - 구구단은 오른쪽으로 나열되도록 한다.
