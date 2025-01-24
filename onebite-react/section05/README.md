# 🍰 한입 크기로 잘라 먹는 리액트

## 섹션 5. React.js 입문

<br>

### 🌱 목차

- [x] 실습 준비하기
- [x] React 컴포넌트
- [x] JSX로 UI 표현하기
- [x] Props로 데이터 전달하기
- [ ] 이벤트 처리하기
- [ ] State로 상태 관리하기
- [ ] State와 Props
- [ ] State로 사용자 입력 관리하기 1
- [ ] State로 사용자 입력 관리하기 2
- [ ] useRef로 컴포넌트의 변수 생성하기
- [ ] React Hooks

<br>
<br>

## 1. 실습 준비하기

```bash
npm create vite@latest

# 설치한 프로젝트 디렉토리로 이동
npm install
```

<br>
<br>

## 2. React 컴포넌트

> 컴포넌트(Component)는 UI를 재사용 가능한 단위로 나누어 작성하는 리액트의 핵심 개념이다.
> 컴포넌트는 자바스크립트 함수로 작성되며, HTML 구조와 로직을 함께 정의할 수 있다.

<br>

### 1️⃣ 컴포넌트 작성하기

- 리액트 컴포넌트는 **함수 선언식** 또는 **화살표 함수**로 생성할 수 있다.
- 예시

  ```jsx
  // 화살표 함수 컴포넌트
  const Header = () => {
    return (
      <header>
        <h1>Header</h1>
      </header>
    );
  };

  // 함수 선언식 컴포넌트
  function MyComponent() {
    return (
      <>
        <Header></Header>
        <h1>안녕 리액트!</h1>
      </>
    );
  }
  ```

  - `MyComponent`는 부모 컴포넌트, `Header`는 자식 컴포넌트이다.
  - 리액트에서는 여러 개의 컴포넌트를 계층적으로 구성하여 UI를 설계한다.

<br>

### 2️⃣ 컴포넌트의 계층 구조

- 컴포넌트는 계층적으로 구성되어 있으며, 최상위 컴포넌트를 「Root 컴포넌트」라고 부른다.
- 리액트 애플리케이션에서는 `App` 컴포넌트가 Root 컴포넌트 역할을 한다.
- 구조 예시

  ```plaintext
  App (Root 컴포넌트)
  ├── Header
  ├── Main
  └── Footer
  ```

- 코드 예시

  ```jsx
  const Header = () => <header>Header</header>;
  const Main = () => <main>Main Content</main>;
  const Footer = () => <footer>Footer</footer>;

  function App() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
  ```

<br>

### 3️⃣ 컴포넌트 렌더링

- 리액트 앱은 `ReactDOM.createRoot`의 `render` 메서드를 사용해 Root 컴포넌트를 렌더링한다.
- 코드 예시

  ```jsx
  import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import App from "./App";

  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  ```

- `createRoot`는 React 18에서 새롭게 도입된 메서드로, 향후 Concurrent Mode와 같은 기능을 지원한다.
- `StrictMode`는 잠재적인 문제를 미리 탐지하고 경고를 표시해주는 개발용 도구이다.

<br>

### 4️⃣ 컴포넌트의 모듈화

- 일반적으로 컴포넌트를 파일 단위로 모듈화하여 관리한다.
- 모듈화를 통해 컴포넌트를 재사용하고 유지보수성을 높일 수 있다.
- 폴더 구조 예시

  ```plaintext
  src/
  ├── components/
  │   ├── Header.jsx
  │   ├── Main.jsx
  │   └── Footer.jsx
  └── App.jsx
  ```

- 파일별 작성 예시

  - 📂 `src/components/Header.jsx`

    ```jsx
    const Header = () => {
      return (
        <header>
          <h1>Header</h1>
        </header>
      );
    };

    export default Header;
    ```

  - 📂 `src/App.jsx`

    ```jsx
    import Header from "./components/Header";

    function App() {
      return (
        <>
          <Header />
          <h1>안녕 리액트!</h1>
        </>
      );
    }

    export default App;
    ```

<br>

### ⚠️ 컴포넌트 생성 시 주의사항

#### 1️⃣ 컴포넌트 이름은 대문자로 시작해야 한다.

- React는 이름이 소문자로 시작하는 경우 DOM 요소(`<div>` 등)로 인식한다.
- 예: `Header`는 컴포넌트로 인식되지만, `header`는 DOM 요소로 처리된다.

<br>

#### 2️⃣ 파일 이름과 컴포넌트 이름 일치시키기.

- 컴포넌트와 파일 이름을 동일하게 작성하면 유지보수와 검색이 쉬워진다.
- 예: `Header.jsx` 파일에는 `Header` 컴포넌트가 정의되어야 한다.

<br>

#### 3️⃣ 한 파일에 하나의 컴포넌트를 정의한다.

- 컴포넌트별로 파일을 분리하면, 코드가 깔끔해지고 재사용성이 높아진다.

<br>
<br>

## 3. JSX로 UI 표현하기

### 💡 JSX란?

- JSX는 JavaScript Extensions의 약자로, 자바스크립트를 확장한 문법이다.
- HTML과 유사한 문법을 사용해 UI를 정의하며, 브라우저에서 실행 가능한 자바스크립트 코드로 변환된다.

<br>

#### 📌 특징

- 중괄호 `{}`를 사용하여 자바스크립트 표현식을 포함할 수 있다.
- JSX를 사용하면 HTML 구조와 자바스크립트 로직을 결합하여 컴포넌트를 작성할 수 있다.
- 예시

  ```jsx
  const Test = () => {
    const number = 10;

    return <p>{number + 10}</p>;
  };
  ```

- `{}` 안에는 숫자, 문자열, 배열 등 다양한 데이터 타입을 표현할 수 있다.
- 삼항 연산자를 사용해 조건부 렌더링을 할 수 있다.

<br>

### ⚠️ JSX 사용 시 주의사항

#### 1️⃣ 중괄호 내부에는 자바스크립트 표현식만 포함 가능

- 조건문(`if`)이나 반복문(`for`)은 사용할 수 없다.
- 대신 삼항 연산자나 메서드(`map`, `filter` 등)를 활용해야 한다.

<br>

#### 2️⃣ 렌더링 가능한 데이터 타입

- 렌더링 가능한 타입 : 숫자, 문자열, 배열
- 렌더링되지 않는 타입 : boolean(`true`, `false`), `undefined`, `null`

<br>

#### 3️⃣ 객체는 렌더링할 수 없다.

- 객체를 화면에 표시하려면 속성을 점 표기법으로 접근해야 한다.
- 예: `obj.a`처럼 속성을 렌더링한다.

<br>

#### 4️⃣ 태그 닫기

- JSX의 모든 태그는 닫혀 있어야 한다.
- 예. `<img />`, `<br />` 등

<br>

#### 5️⃣ 최상위 태그가 반드시 하나여야 한다.

- `return` 문에서는 하나의 최상위 태그로 감싸야 한다.
- 여러 태그를 사용할 경우 Fragment(`<></>`)를 활용할 수 있다.
- 예시

  ```jsx
  // 잘못된 코드
  return (
    <h1>제목</h1>
    <p>내용</p>
  );

  // 올바른 코드
  return (
    <>
      <h1>제목</h1>
      <p>내용</p>
    </>
  );
  ```

<br>

### 🎨 style 설정하기

JSX에서 스타일을 설정하는 방법은 크게 두 가지이다.

#### 1️⃣ 요소에 직접 스타일 속성 설정하기

- 스타일 속성을 객체 형태로 작성하며, CSS 속성은 카멜케이스로 표기해야 한다.

  ```jsx
  const Main = () => {
    const user = { isLogin: true };

    return (
      <div
        style={{
          backgroundColor: user.isLogin ? "red" : "blue",
          color: "white",
        }}
      >
        {user.isLogin ? "로그아웃" : "로그인"}
      </div>
    );
  };
  ```

<br>

#### 2️⃣ 별도의 CSS 파일로 스타일링하기

- CSS 파일을 `import`하여 클래스명을 설정할 수 있다.
- `Main.jsx`

  ```jsx
  import "./Main.css";

  const Main = () => {
    const user = { isLogin: true };

    return (
      <div className={user.isLogin ? "logout" : "login"}>
        {user.isLogin ? "로그아웃" : "로그인"}
      </div>
    );
  };

  export default Main;
  ```

- `Main.css`

  ```css
  .logout {
    background-color: red;
    color: white;
    padding: 10px;
  }

  .login {
    background-color: blue;
    color: white;
    padding: 10px;
  }
  ```

<br>
<br>

## 4. Props로 데이터 전달하기

### 1️⃣ Props란?

- `Props`는 Properties의 줄임말로, 컴포넌트에 데이터를 전달할 때 사용하는 객체이다.
- 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 데 사용된다.
- `Props`는 읽기 전용으로, 자식 컴포넌트에서는 수정할 수 없다.

#### 📌 특징

- 컴포넌트 외부에서 내부로 데이터를 전달한다.
- 컴포넌트의 재사용성과 유연성을 높이는 데 기여한다.
- 예시

  ```jsx
  const Button = ({ text }) => {
    return <button>{text}</button>;
  };

  const App = () => {
    return <Button text='더보기' />;
  };
  ```

<br>

### defaultProps

- `defaultProps`는 `props`가 전달되지 않을 경우 기본값을 설정하는 방법이다.
- 주로 `props`가 필수가 아닌 경우 사용된다.
- 예시

  ```jsx
  const Button = ({ text }) => {
    return <button>{text}</button>;
  };

  Button.defaultProps = {
    text: "버튼",
  };

  const App = () => {
    return <Button text='버튼' />;
  };
  ```

<br>

### 2️⃣ `props`가 많아지면 변수로 빼고 스프레드 문법 사용하기

- 전달해야 하는 props가 많아질 경우, 변수로 한 번에 관리하고 스프레드 문법을 사용하면 코드가 간결해진다.
- 예시

  ```jsx
  const UserCard = ({ name, age, location }) => {
    return (
      <div>
        <h2>{name}</h2>
        <p>나이: {age}</p>
        <p>위치: {location}</p>
      </div>
    );
  };

  const App = () => {
    const user = {
      name: "ttining",
      age: 100,
      location: "서울",
    };

    return <UserCard {...user} />;
  };
  ```

<br>

### 3️⃣ `props` 구조분해할당

- `Props`를 구조분해 할당하면 코드 가독성이 높아진다.
- 함수 파라미터에서 바로 구조분해 할당을 할 수 있다.
- 예시

  ```jsx
  // 구조분해 할당 사용 전
  const Greeting = (props) => {
    return <p>안녕하세요, {props.name}님!</p>;
  };

  // 구조분해 할당 사용 후
  const Greeting = ({ name }) => {
    return <p>안녕하세요, {name}님!</p>;
  };
  ```

<br>

### 4️⃣ `children`

- `children`은 부모 컴포넌트에서 자식 컴포넌트로 전달하는 특수한 props이다.
- 컴포넌트의 태그 내부에 포함된 콘텐츠를 전달할 때 사용된다.
- 예시

  ```jsx
  const Wrapper = ({ children }) => {
    return <div className='wrapper'>{children}</div>;
  };

  const App = () => {
    return (
      <Wrapper>
        <p>이 내용은 children으로 전달됩니다.</p>
      </Wrapper>
    );
  };
  ```

- 결과
  ```html
  <div class="wrapper">
    <p>이 내용은 children으로 전달됩니다.</p>
  </div>
  ```

<br>

### 5️⃣ `Props` 활용 정리

1. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달한다.
2. `props`가 없을 경우 `defaultProps`로 기본값을 설정할 수 있다.
3. 스프레드 문법과 구조분해 할당을 활용하면 가독성과 유지보수성이 향상된다.
4. `children`을 사용하면 자식 요소를 유연하게 전달할 수 있다.

<br>
<br>

## 5. 이벤트 처리하기

<br>
<br>

## 6. State로 상태 관리하기

<br>
<br>

## 7. State와 Props

<br>
<br>

## 8. State로 사용자 입력 관리하기 1

컴포넌트의 리-렌더링

자신이 관리하는 state의 값이 변경되었을 경우
자신이 제공받는 props의 값이 변경되었을 경우
부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링 됨

<br>
<br>

## 9. State로 사용자 입력 관리하기 2

<br>
<br>

## 10. useRef로 컴포넌트의 변수 생성하기

<br>
<br>

## 11. React Hooks

React Hooks

클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 도와주는 메서드
함수 컴포넌트 내부에서만 호출할 수 있다.
조건부로 호출되어서는 안 된다. (조건문, 반복문 내에서 사용 ❌)
useState
컴포넌트 내부의 변수로 활용 가능
값이 변경되면 컴포넌트 리렌더링
useRef
컴포넌트 내부의 변수로 활용 가능
어떤 경우에도 리렌더링을 유발하지 않음

<br>
<br>

---
