# 🍰 한입 크기로 잘라 먹는 리액트

## 섹션 5. React.js 입문

<br>

### 🌱 목차

- [x] 실습 준비하기
- [x] React 컴포넌트
- [x] JSX로 UI 표현하기
- [x] Props로 데이터 전달하기
- [x] 이벤트 처리하기
- [x] State로 상태 관리하기
- [x] State와 Props
- [x] State로 사용자 입력 관리하기 1
- [x] State로 사용자 입력 관리하기 2
- [x] useRef로 컴포넌트의 변수 생성하기
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

### 2️⃣ defaultProps

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

### 3️⃣ `props`가 많아지면 변수로 빼고 스프레드 문법 사용하기

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

### 4️⃣ `props` 구조분해할당

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

### 5️⃣ `children`

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

### ✨ `Props` 활용 정리

1. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달한다.
2. `props`가 없을 경우 `defaultProps`로 기본값을 설정할 수 있다.
3. 스프레드 문법과 구조분해 할당을 활용하면 가독성과 유지보수성이 향상된다.
4. `children`을 사용하면 자식 요소를 유연하게 전달할 수 있다.

<br>
<br>

## 5. 이벤트 처리하기

### 1️⃣ 이벤트 핸들링이란?

- 이벤트가 발생했을 때 이를 처리하는 것을 말한다.
- 예시 : 버튼 클릭 시 경고창 노출

<br>

#### 💡 이벤트와 핸들링의 의미

> ##### 이벤트
>
> - 웹 내부에서 발생하는 사용자의 행동
> - 예시 : 버튼 클릭, 메시지 입력, 스크롤 등등
>
> ##### 핸들링
>
> - 다루다, 취급하다, 처리하다

<br>

### 2️⃣ 이벤트 핸들링 사용 방법

- React에서 이벤트 핸들링은 DOM 이벤트와 유사하지만, React의 합성 이벤트(Synthetic Event) 방식을 사용한다.

<br>

#### 📌 익명 함수 사용하기

- 간단한 이벤트 처리에는 익명 함수를 바로 전달할 수 있다.
- 예시
  ```jsx
  const Button = ({ text, color = "black", children }) => {
    return (
      <button
        onClick={() => {
          console.log(text); // 클릭 시 콘솔에 text 출력
        }}
        style={{ color: color }}
      >
        {text} - {color.toUpperCase()}
        {children}
      </button>
    );
  };
  ```
  > 💡 익명 함수는 간단한 작업에 적합하지만, 함수가 실행될 때마다 새로 정의되므로 복잡한 로직에는 적합하지 않다.

<br>

#### 📌 함수를 따로 선언하고 콜백 함수처럼 전달하기

- 반복적으로 사용할 함수는 별도로 선언해 사용하는 것이 효율적이다.
- 예시

  ```jsx
  const Button = ({ text, color = "black", children }) => {
    const onClickButton = () => {
      console.log(text); // 클릭 시 text 출력
    };

    return (
      <button
        onClick={onClickButton} // 콜백 함수 전달
        onMouseEnter={onClickButton} // 마우스 올릴 때도 호출
        style={{ color: color }}
      >
        {text} - {color.toUpperCase()}
        {children}
      </button>
    );
  };
  ```

  > 💡 여러 이벤트(`onClick`, `onMouseEnter` 등)에 동일한 핸들러를 연결할 수 있다.

<br>

### 3️⃣ 이벤트 객체

- React의 모든 이벤트는 **합성 이벤트(Synthetic Event)** 로 제공된다.

<br>

#### 📌 합성 이벤트란?

- 브라우저 간 호환성을 보장하기 위해, React가 DOM 이벤트를 래핑하여 동일한 인터페이스를 제공하는 이벤트 객체이다.
- 이벤트 객체는 성능 최적화를 위해 풀링(pooling) 되어 재활용된다.
  > ⚠️ 비동기 작업에서는 이벤트 객체가 초기화되므로 필요한 값을 미리 저장해야 한다.
- 예시
  ```jsx
  const onClickButton = (e) => {
    console.log(e); // SyntheticBaseEvent {...}
    console.log(e.target); // 이벤트가 발생한 DOM 요소
    console.log(e.type); // 이벤트 타입 (예: "click")
  };
  ```

<br>

### 4️⃣ 추가적인 이벤트 처리 방법

#### 📌 기본 동작 방지

- HTML 태그의 기본 동작(예: 폼 제출, 링크 이동 등)을 막기 위해 `e.preventDefault()`를 사용한다.
- 예시

  ```jsx
  const onSubmitForm = (e) => {
    e.preventDefault(); // 기본 동작 방지
    console.log("폼이 제출되었습니다.");
  };

  return <form onSubmit={onSubmitForm}>...</form>;
  ```

  > 💡 사용자가 폼 데이터를 확인하지 않고 잘못 제출하지 않도록 기본 동작을 막고, 검증 로직을 추가할 수 있다.

<br>

#### 📌 이벤트 전파 중단

- 이벤트가 상위 요소로 전파되지 않도록 `e.stopPropagation()`을 사용한다.
- 예시

  ```jsx
  const onClickParent = () => {
    console.log("부모 요소 클릭");
  };

  const onClickChild = (e) => {
    e.stopPropagation(); // 부모로 이벤트 전파 중단
    console.log("자식 요소 클릭");
  };

  return (
    <div onClick={onClickParent}>
      <button onClick={onClickChild}>클릭</button>
    </div>
  );
  ```

  > 💡 특정 자식 요소에서만 이벤트를 처리하고 싶을 때 유용하다.

<br>

### 5️⃣ 코드 스타일

- **함수 분리** : 재사용 가능한 로직은 별도의 함수로 분리하여 가독성을 높인다.
- **익명 함수 최소화** : 복잡한 로직에는 익명 함수 사용을 지양한다.
- **클린 코드** : 이벤트 핸들러 함수명은 `onClickButton`, `onSubmitForm`처럼 명확하게 작성한다.

<br>
<br>

## 6. `State`로 상태 관리하기

### 1️⃣ `State`란?

- 사물이 현재 가지고 있는 **형태**나 **상태**를 나타내는 값이다.
- **변화할 수 있는 동적인 값**으로, `State`의 값에 따라 렌더링되는 UI가 결정된다.
- 컴포넌트 내 `State` 값이 변경되면, 해당 컴포넌트는 **리렌더링**된다.
- 하나의 컴포넌트에 여러 개의 `State`를 생성할 수 있다.
- 예시
  - 전구의 점등 상태 : `"ON"` / `"OFF"`
  - 전구의 고장 유무 : `true` / `false`
  - 전구의 더러움 유무 : `true` / `false`

<br>

### 2️⃣ `useState`

- `useState`는 새로운 `State`를 생성하는 리액트 훅(Hook)이다.
- `State`의 초기값을 인수로 전달받고, 두 개의 요소를 가진 배열을 반환한다.
  - 반환된 배열의 첫 번째 요소 : 현재 `State`의 값
  - 반환된 배열의 두 번째 요소 : `State`를 변경하는 **상태 변경 함수**
- 기본 사용 예시

  ```jsx
  const state = useState();
  console.log(state); // [undefined, f]
  // state의 초기값은 undefined이며, f는 상태 변경 함수이다.

  const state = useState(0);
  console.log(state); // [0, f]
  //  초기값이 0으로 설정된 상태 배열
  ```

- 배열 비구조화 할당 사용 예시

  ```jsx
  function App() {
    const [state, setState] = useState(0);

    return (
      <>
        <h1>{state}</h1>
        <button onClick={() => setState(state + 1)}>➕</button>
      </>
    );
  }
  ```

- 코드 예시 : 전구 상태 관리

  ```jsx
  function App() {
    const [light, setLight] = useState("OFF");

    return (
      <>
        <h1>{light}</h1>
        <button onClick={() => setLight(light === "ON" ? "OFF" : "ON")}>
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </>
    );
  }
  ```

  > 💡 이 코드는 전구의 상태(`"ON"`/`"OFF"`)에 따라 UI와 버튼의 텍스트를 동적으로 변경한다.

<br>
<br>

## 7. State와 Props

### 1️⃣ Props와 리렌더링

- `Props`는 부모 컴포넌트가 자식 컴포넌트에 전달하는 값이다.
- 자식 컴포넌트는 전달받은 `Props` 값이 변경되면 리렌더링된다.
- 예시 : 전구 상태를 `Props`로 전달

  ```jsx
  const Bulb = ({ light }) => {
    console.log(light);

    return (
      <div>
        {light === "ON" ? (
          <h1 style={{ backgroundColor: "orange" }}>ON</h1>
        ) : (
          <h1 style={{ backgroundColor: "grey" }}>OFF</h1>
        )}
      </div>
    );
  };

  function App() {
    const [light, setLight] = useState("OFF");

    return (
      <>
        <Bulb light={light} />
        <button onClick={() => setLight(light === "ON" ? "OFF" : "ON")}>
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </>
    );
  }
  ```

  > 💡 부모 컴포넌트의 `State`(`"light"`)를 자식 컴포넌트 `Bulb`로 전달하여 UI를 동기화한다.

<br>

### 2️⃣ 리액트 컴포넌트의 리렌더링 조건

1. `State`가 변경되었을 때
2. 부모로부터 전달받은 `Props`가 변경되었을 때
3. 부모 컴포넌트가 리렌더링되었을 때, 해당 부모의 자식 컴포넌트도 함께 리렌더링된다.

<br>

### 3️⃣ 성능 최적화 팁

- 컴포넌트 내부에 관련 없는 여러 `State`가 존재한다면, 이를 개별 컴포넌트로 분리하는 것이 좋다.
- 컴포넌트를 분리하면 불필요한 리렌더링을 방지하고, 성능을 최적화할 수 있다.

<br>
<br>

## 8. State로 사용자 입력 관리하기 1

> 컴포넌트에서 다양한 사용자의 입력을 받고 처리하는 방법에 대해 알아보자

- `input`에 초기값 설정하기
  - `state` 생성 후, 초기값을 `input`의 `value` 속성으로 설정해준다.

<br>

```jsx
const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  // 이름
  const onChangeName = (e) => {
    // console.log(e);
    // e.target.value;
    setName(e.target.value);
  };

  // 생년월일
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  // 국적
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  // 자기소개
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div
      style={{ display: "flex", flexFlow: "column", alignItems: "flex-start" }}
    >
      <input
        type='text'
        placeholder='이름'
        value={name}
        onChange={onChangeName}
      />
      {name}
      <input type='date' value={birth} onChange={onChangeBirth} />
      {birth}
      <select name='' id='' value={country} onChange={onChangeCountry}>
        <option value=''></option>
        <option value='kr'>한국</option>
        <option value='us'>미국</option>
        <option value='uk'>영국</option>
      </select>
      {country}
      <textarea name='' id='' value={bio} onChange={onChangeBio}></textarea>
      {bio}
    </div>
  );
};
```

<br>
<br>

## 9. State로 사용자 입력 관리하기 2

- `State`로 사용자 입력 관리하기 1에서 중복되는 코드 개선하기
- `[e.target.name]` : 프로퍼티의 `key`로 설정
  - 이벤트가 발생한 태그의 name 속성에 설정된 값이 들어있다.

```jsx
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    // 여러 개의 비슷한 동작을 하는 이벤트 핸들러를
    // 하나의 통합된 이벤트 핸들러로 사용할 수 있다.
    console.log(e.target.name, e.target.value);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      style={{ display: "flex", flexFlow: "column", alignItems: "flex-start" }}
    >
      <input
        type='text'
        placeholder='이름'
        name='name'
        value={input.name}
        onChange={onChange}
      />
      {input.name}
      <input type='date' name='birth' value={input.birth} onChange={onChange} />
      {input.birth}
      <select id='' name='country' value={input.country} onChange={onChange}>
        <option value=''></option>
        <option value='kr'>한국</option>
        <option value='us'>미국</option>
        <option value='uk'>영국</option>
      </select>
      {input.country}
      <textarea
        id=''
        name='bio'
        value={input.bio}
        onChange={onChange}
      ></textarea>
      {input.bio}
    </div>
  );
};
```

<br>
<br>

## 10. useRef로 컴포넌트의 변수 생성하기

### `useRef`란?

- 새로운 Reference 객체를 생성하는 기능

  ```jsx
  const refObject = useRef(); // refObject : 컴포넌트 내부의 변수
  ```

- 컴포넌트 내부에서 렌더링에 영향을 미치지 않아야 되는 변수를 생성할 때 사용
- 컴포넌트가 렌더링하는 특정 DOM 요소에 접근할 수 있음

  ```jsx
  const refObject = useRef();

  function App() {
    return (
      <div>
        <textarea
          ref={refObject} // 특정 DOM 요소에 접근 → 요소 조작
          name='bio'
          value={input.bio}
          onChange={onChange}
        />
      </div>
    );
  }
  ```

<br>

### `useRef` 🆚 `useState`

| `useRef`                               | `useState`                       |
| -------------------------------------- | -------------------------------- |
| Reference 객체를 생성                  | `State`를 생성                   |
| 컴포넌트 내부의 변수로 활용 가능       | 컴포넌트 내부의 변수로 활용 가능 |
| 어떤 경우에도 리렌더링을 유발하지 않음 | 값이 변경되면 컴포넌트 리렌더링  |

<br>

### 사용 예시

```jsx
// useRef로 새로운 레퍼런스 객체 생성
// 레퍼런스 객체 : current 프로퍼티에 현재 보관할 값을 담아둔다.
const refObj = useRef();
console.log(refObj); // {current: undefined}
```

```jsx
// 초기값 설정
const refObj = useRef(0);
console.log(refObj); // {current: 0}

// 레퍼런스 객체의 값 사용하기
console.log(refObj.current); // 0
```

```jsx
// console.log가 한 번만 실행되고,
// 이후 버튼을 클릭하면 이벤트 핸들러만 실행된다. (console.log 재출력 X)
const Register = () => {
  const refObj = useRef(0);
  console.log("Register 렌더링");

  return (
    <button
      onClick={() => {
        refObj.current++;
        console.log(refObj.current);
      }}
    >
      ref +1
    </button>
  );
};
```

<br>

### 활용

- 레퍼런스 객체를 이용해, 현재 `Register` 컴포넌트가 렌더링하고 있는 4개의 입력 폼에
  사용자가 얼마나 많은 횟수의 변경을 일으켰는지 수정 횟수를 카운트하는 기능을 만들어보자.

  ```jsx
  const countRef = useRef(0);

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  ```

- 새로운 레퍼런스 객체를 생성하고 `Register` 컴포넌트가 렌더링하고 있는 DOM 요소 조작하기

  ```jsx
  const Register = () => {
    const [input, setInput] = useState({
      name: "",
      birth: "",
      country: "",
      bio: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
      countRef.current++;
      console.log(countRef.current);

      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    };

    const onSubmit = () => {
      if (input.name === "") {
        // 이름을 입력하는 DOM 요소 포커스
        inputRef.current.focus();
      }
    };

    return (
      <div>
        <input
          ref={inputRef} // 레퍼런스 객체 전달
          type='text'
          placeholder='이름'
          name='name'
          value={input.name}
          onChange={onChange}
        />
        {input.name}
        <input
          type='date'
          name='birth'
          value={input.birth}
          onChange={onChange}
        />
        {input.birth}
        <select id='' name='country' value={input.country} onChange={onChange}>
          <option value=''></option>
          <option value='kr'>한국</option>
          <option value='us'>미국</option>
          <option value='uk'>영국</option>
        </select>
        {input.country}
        <textarea
          id=''
          name='bio'
          value={input.bio}
          onChange={onChange}
        ></textarea>
        {input.bio}

        <button onClick={onSubmit}>제출</button>
      </div>
    );
  };
  ```

<br>
<br>

## 11. React Hooks

### React Hooks란?

- 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 도와주는 메서드
- 2017년도 이전의 React.js
  | `class` 컴포넌트 | `function` 컴포넌트 |
  | --------------- | ------------------- |
  | 모든 기능을 이용할 수 있음 | UI 렌더링만 할 수 있음 |
  | ex. State, Ref, etc... | - |
  | 문법이 복잡함 | - |
- 이름 앞에 `use`라는 접두사가 붙는다.
- 함수 컴포넌트 내부에서만 호출할 수 있다.
- 조건문, 반복문 내에서는 호출 불가
- Custom Hook 제작 가능

<br>

### Hook 관련 팁

#### 1️⃣ 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능

```jsx
import { useState } from "react";

const state = useState();
// Error: Invalid hook call. Hooks can only be called inside of the body of a function component.

const HookExam = () => {
  return <div>hook exam</div>;
};

export default HookExam;
```

<br>

#### 2️⃣ 2. 조건부로 호출될 수 없다.

```jsx
import { useState } from "react";

const HookExam = () => {
  if (true) {
    // Unexpected constant condition
    const state = useState(); // React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render.
  }

  return <div>hook exam</div>;
};

export default HookExam;
```

<br>

#### 3️⃣ 나만의 훅(Custom Hook)을 직접 만들 수 있다.

- 일반적으로, `src` 디렉토리 하위에 `hooks` 폴더를 만들어서 관리한다.

```jsx
import { useState } from "react";

const HookExam = () => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type='text' value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;
```

```jsx
import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

const HookExam = () => {
  const [input, onChange] = useInput();

  return (
    <div>
      <input type='text' value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;
```

<br>
<br>

---
