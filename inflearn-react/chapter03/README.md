## chapter 03. 컴포넌트

<br>

#### 🌱 목차

- [x] 1. 컴포넌트란?
- [x] 2. `Props`
- [x] 3. `State`
- [x] 4. 클래스형 컴포넌트 🆚 함수형 컴포넌트
- [x] 5. 스터디파이 강의 컴포넌트 만들기

---

### 1. 컴포넌트란?

**스스로 상태를 관리하는 캡슐화된 코드 조각**을 말한다.

> React 컴포넌트는 UI를 재사용 가능하고 독립적인 조각으로 나눈 구조를 말한다.  
> 함수형 또는 클래스형으로 구현되며, HTML과 로직을 함께 처리할 수 있는 단위이다.

<br>

#### 특징

- **재사용성** : 동일한 UI 요소를 여러 곳에서 재사용 가능
- **상태**와 **데이터** : 상태(`state`)와 `props`를 통해 동적인 UI를 구현
- **조합 가능성** : 작은 컴포넌트를 조합해 더 큰 컴포넌트를 생성
- **렌더링 로직 포함** : 렌더링 될 HTML과 이벤트 핸들러 등 UI 동작을 포함
- _예시_
  ```jsx
  function Button({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
  }
  ```

<br>

#### ⚠️ 주의사항

- 컴포넌트의 이름은 `PascalCase`로 작성
- 의미 단위로 쪼개어 파일을 분리할 것
- 최상위 컴포넌트의 이름은 일반적으로 `App`이다.

---

### 2. `Props`

#### 1️⃣ `props`란?

- `props`는 컴포넌트 간에 데이터를 전달하기 위해 사용하는 속성(properties)이다.
- 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달할 때 사용된다.
- `props`는 읽기 전용이기 때문에 자식 컴포넌트에서는 값을 수정할 수 없다.

```jsx
function Greeting({ name }) {
  return <h1>안녕, {name}!</h1>;
}

<Greeting name='리액트' />;
```

결과 : 안녕, 리액트!

<br>

#### 2️⃣ `props.children`

- `props.children`은 컴포넌트 태그 사이에 포함된 자식 요소들을 나타낸다.
- 컴포넌트 내부에서 특정 위치에 자식 요소를 렌더링할 수 있다.

```jsx
function Card({ children }) {
  return <div className='card'>{children}</div>;
}
<Card>
  <h1>제목</h1>
  <p>내용</p>
</Card>;
```

렌더링 결과

```html
<div class="card">
  <h1>제목</h1>
  <p>내용</p>
</div>
```

<br>

#### 3️⃣ `defaultProps`

- `props`가 전달되지 않았을 때 기본 값을 설정하는 데 사용된다.
- 컴포넌트가 `undefined`나 누락된 `props`로 인해 에러가 발생하지 않도록 한다.

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}

Button.defaultProps = {
  label: "클릭",
};
```

렌더링 결과 : `<button>클릭</button>`

<br>

#### 4️⃣ `props` 활용 팁💡

1. **구조 분해 할당 사용하기**
   `props`를 명시적으로 분해하면 코드가 더 간결해진다.

   ```jsx
   function UserProfile({ name, age }) {
     return (
       <p>
         {name}, {age}살
       </p>
     );
   }
   ```

2. **PropTypes로 타입 검사**
   `prop-types` 패키지를 사용해 `props` 타입과 필수 여부를 정의하면 안정성이 높아진다.

   ```jsx
   import PropTypes from "prop-types";

   UserProfile.propTypes = {
     name: PropTypes.string.isRequired,
     age: PropTypes.number,
   };
   ```

3. **불필요한 `props` 전달 줄이기**
   필요한 데이터만 전달하여 불필요한 렌더링과 코드 복잡도 ↓
4. **`children` 활용하기**
   재사용 컴포넌트(모달, 카드 등)에서는 `props.children`을 활용해 유연하게 자식 요소 렌더링하기

---

### 3. `State`

#### 1️⃣ `state`란?

컴포넌트 내부에서 관리되는 데이터로, 컴포넌트의 동적인 동작을 가능하게 만든다.

- `state` 값이 변경되면 컴포넌트가 리렌더링된다.
- 렌더링 사이클 동안 값이 보존된다.
  (컴포넌트가 리렌더링되어도 초기화되지 않고 기존 값을 유지한다.)

<br>

#### 2️⃣ `state` 추가하기

React에서는 `useState` 훅을 사용해 컴포넌트에 `state`를 추가한다.

> `useState` 훅의 특징
>
> 1.  렌더링 사이에 데이터를 유지한다.
> 2.  `state`가 변경되면 React는 변경된 데이터를 기반으로 컴포넌트를 다시 렌더링한다.

```jsx
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0); // 초기값 설정

  return (
    <div>
      <p>현재 값: {value}</p>
      <button onClick={() => setValue(value + 1)}>값 증가</button>
    </div>
  );
}
```

- `value` : 현재 `state` 값
- `setValue` : `value`를 업데이트하는 setter 함수
- `useState(0)` : `value`의 초기값을 `0`으로 설정
- 버튼 클릭 시, `setValue`를 호출하여 `value`를 증가시키면
  React가 컴포넌트를 다시 렌더링하고, 업데이트된 값이 화면에 표시된다.

<br>

#### 3️⃣ `useState` 문법

`useState`는 배열 구조 분해를 사용하여, `state` 변수와 업데이트 함수를 나눠서 사용할 수 있다.

```jsx
const [state, setState] = useState(initialValue);
```

- `state` : 현재 상태 값
- `setState` : 상태를 업데이트하는 함수
- `initialValue` : `state`의 초기값(숫자, 문자열, 객체 등)

<br>

#### 4️⃣ `useState`의 초기값

`useState`의 초기값은 다양한 타입으로 설정할 수 있다.

```jsx
const [count, setCount] = useState(0); // 숫자
const [name, setName] = useState("React"); // 문자열
const [user, setUser] = useState({ id: 1, name: "John" }); // 객체
```

<br>

#### 5️⃣ 함수형 업데이트

이전 상태에 따라 값을 업데이트 할 때는 함수형 업데이트를 사용하는 것이 안전하다.

```jsx
setValue((prevValue) => prevValue + 1);
```

- `prevValue` : 이전 `state` 값
- 함수형 업데이트를 사용하면 비동기적으로 여러 업데이트가 수행될 때의 상태 관리가 더 정확하다.

<br>

#### 6️⃣ `state`와 리렌더링

- `setState`를 호출하면 React는 해당 컴포넌트를 다시 렌더링한다.
- 자식 컴포넌트도 필요한 경우에만 다시 렌더링된다.

---

### 4. 클래스형 컴포넌트 🆚 함수형 컴포넌트

#### 📌 클래스형 컴포넌트

클래스형 컴포넌트는 클래스 문법으로 구현된 React 컴포넌트이다.

**특징**

- `state`와 생명주기 메서드를 사용할 수 있다.
- React 버전 16.8 이전에는 함수형 컴포넌트에서 `state`를 사용할 수 없었으므로,  
   `state`를 가진 컴포넌트는 클래스형으로 작성해야 했다.
- 클래스의 멤버 변수로 `state`를 정의하고, `render` 메서드에서 JSX를 반환한다.

**예시**

```jsx
import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 }; // state 정의

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 }); // state 업데이트
  };

  render() {
    return (
      <div>
        <p>현재 값: {this.state.count}</p>
        <button onClick={this.handleIncrement}>값 증가</button>
      </div>
    );
  }
}

export default Counter;
```

<br>

#### 📌 함수형 컴포넌트

함수형 컴포넌트는 함수 문법으로 구현된 React 컴포넌트이다.

**특징**

- React 버전 16.8 이후, Hooks가 도입되면서 함수형 컴포넌트에서도 `state`와 생명주기 관리가 가능해졌다.
- 작성이 간단하고 가독성이 좋으며, 컴포넌트를 더 쉽게 이해하고 관리할 수 있다.
- 지금은 함수형 컴포넌트가 React의 기본으로 자리 잡았다.

**예시**

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // state 정의

  return (
    <div>
      <p>현재 값: {count}</p>
      <button onClick={() => setCount(count + 1)}>값 증가</button>
    </div>
  );
}

export default Counter;
```

<br>

#### 📌 Hooks는 왜 등장했을까?

**1️⃣ 클래스형 컴포넌트의 문제점**

1. 복잡한 문법  
   클래스 문법은 초심자가 이해하기 어렵다. 특히, `this` 바인딩과 같은 개념은 많은 혼란을 야기했다.
2. 코드 재사용성 부족  
   클래스형 컴포넌트는 로직을 재사용하기 위해 HOC(Higher-Order Components)나 Render Props 패턴을 사용했는데,  
   이 방식은 코드 가독성을 떨어뜨릴 수 있다.
3. 생명주기 메서드의 제한  
   특정 생명주기 메서드 안에서만 로직을 구현해야 했으므로, 관련 로직이 분산되어 관리하기 어렵다.

<br>

**2️⃣ Hooks의 등장과 변화**

- Hooks는 함수형 컴포넌트에서도 `state`와 생명주기 로직을 다룰 수 있도록 해주며,  
   코드를 더 간단하고 직권적으로 작성할 수 있게 해준다.
- 코드 재사용성을 높이고, 로직을 명확하게 구성할 수 있는 Custom Hook도 지원한다.
- 결과적으로, 함수형 컴포넌트가 React 개발의 표준이 되었고,  
   클래스형 컴포넌트는 주로 레거시 코드에서 사용된다.

<br>

**3️⃣ 클래스형 컴포넌트 🆚 함수형 컴포넌트 비교**

| 특징          | 클래스형 컴포넌트  | 함수형 컴포넌트             |
| ------------- | ------------------ | --------------------------- |
| 문법          | 클래스 문법 사용   | 함수형 문법 사용            |
| `state` 관리  | 가능(`this.state`) | 가능(`useState`)            |
| 생명주기 관리 | 클래스 메서드 사용 | `useEffect`로 대체          |
| 가독성        | 상대적으로 복잡    | 간단하고 직관적             |
| 코드 재사용성 | HOC, Render Props  | Custom Hook으로 간단히 해결 |
| 사용 사례     | 레거시 코드        | 현재 표준 및 신규 프로젝트  |

---

### 5. 스터디파이 강의 컴포넌트 만들기

**📌 요구사항**

✅ 직접 해당 요소가 어떻게 구성되어 있는지, 스타일은 어떻게 적용되어 있는지를 분석하여 만들어보기

- 스터디파이에 있는 강의 요소를 직접 컴포넌트로 따라 만들어보기
- 이미지 주소, 태그(영어, 패키지, 최대할인), 제목, 가격, 유형(동영상 강의)을 `props`로 받아서 처리하기
- 태그와 유형은 배열로 전달받기
- 가격은 3자리 마다 콤마(`,`) 찍기
