# chapter 12. SurveyPie 전역 상태 관리

#### 🌱 목차

- [x] 1. 전역 상태 관리란?
- [x] 2. Recoil이란?
- [x] 3. Recoil로 데이터 관리하기
- [x] 4. Custom hook 만들기

---

<br>

## 1. 전역 상태 관리란?

- 전역 상태 관리는 여러 컴포넌트가 공통으로 사용하는 상태를 중앙에서 관리하고,
  이를 필요로 하는 컴포넌트에 손쉽게 제공하는 패턴이다.
- 이는 `prop drilling` 문제를 해결하고, 상태 관리의 효율성을 높이는 데 유용하다.

<br>

### 1-1. Prop Drilling

`Prop Drilling`은 다음과 같은 상황에서 발생한다.

- **상태 전달 경로**
  최상위 컴포넌트에서 최하위 컴포넌트로 상태를 전달해야 할 때, 중간에 있는 컴포넌트가 필요하지 않은 `props`를 단순히 전달만 하는 역할을 하게 된다.
- **리렌더링 문제**
  상태 변화로 인해 불필요한 컴포넌트까지 리렌더링될 수 있어 성능에 악영향을 미친다.

<br>

### 1-2. 전역 상태 (Global State)

- 전역 상태는 특정 컴포넌트에 국한되지 않고, 애플리케이션 전체에서 접근할 수 있는 상태를 의미한다.
- 이를 활용하면 `prop drilling`을 방지하고, 상태를 공유해야 하는 컴포넌트 간 데이터를 보다 효율적으로 관리할 수 있다.

<br>

#### 📌 전역 상태 관리 라이브러리

> 직접 구현하기보다 아래와 같은 라이브러리를 사용하는 것이 일반적이다.

<br>

1. **Redux**
   - 가장 널리 사용되는 상태 관리 라이브러리 중 하나이다.
   - 단일 저장소를 기반으로 상태를 관리하고, 상태 변경을 엄격하게 제어한다.
   - 사용법은 다소 복잡할 수 있지만, Redux Toolkit으로 간소화되었다.
2. **Recoil**
   - React 환경에서 전역 상태를 쉽게 관리할 수 있도록 설계된 라이브러리이다.
   - React의 상태 관리와 비슷한 API를 제공하여 접근성이 높다.
3. **Context API**
   - React에 내장된 상태 관리 도구로, 간단한 전역 상태 관리를 위해 사용된다.
   - 복잡한 애플리케이션에서는 성능과 관리의 어려움 때문에 제한적으로 사용하는 것이 좋다.
4. **MobX**
   - 관찰 가능한 상태를 사용하여 컴포넌트가 자동으로 상태를 구독하고, 상태가 변경되면 필요한 부분만 업데이트한다.
   - 간단한 API와 직관적인 사용법이 특징이다.

<br>

#### 📌 전역 상태 관리를 도입해야 하는 경우

- 상태를 여러 컴포넌트에서 공유해야 하는 경우
- `prop drilling`으로 인해 코드 가독성이 떨어지는 경우
- 특정 상태가 앱 전체에서 자주 사용되거나 변경되는 경우

<br>

---

## 2. Recoil이란?

- Recoil은 React 애플리케이션에서 전역 상태를 간편하고 효율적으로 관리하기 위해 만들어진 라이브러리이다.
- Redux의 복잡성과 동시성 문제를 해결하고, React와의 통합이 쉬운 상태 관리 기능을 제공한다.

<br>

### 2-1. Recoil 설치하기

- [Recoil 공식 웹사이트](https://recoiljs.org/docs/introduction/installation)
- 설치 명령어
  ```bash
  npm install recoil --save
  pnpm add recoil
  ```
  <br>

### 2-2. Recoil 사용하기

- Recoil을 사용하려면 애플리케이션의 루트 컴포넌트를 `RecoilRoot`로 감싸야 한다.
- React Router와 함께 사용하는 예시

  ```jsx
  // 기타 import문 생략
  import { RecoilRoot } from "recoil";

  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </StrictMode>
  );
  ```

<br>

### 2-3. Recoil 이해하기

> Recoil에서 상태 관리는 주로 `Atom`과 `Selector`를 통해 이루어진다.

<br>

#### 📌 `Atom`이란?

- Recoil 상태의 기본 단위이다.
- 컴포넌트들이 읽고, 쓰는 데이터의 원천이 된다.
- Atom은 여러 컴포넌트에서 공유 및 사용될 수 있다.
- 예시

  ```jsx
  import { atom } from "recoil";

  const textState = atom({
    key: "textState", // 고유 ID
    default: "", // 초기값
  });
  ```

- 컴포넌트에서 `Atom` 사용하기 : `useRecoilState()`

  ```jsx
  import { useRecoilState } from "recoil";
  import { textState } from "./recoil/atoms";

  function TextInput() {
    const [text, setText] = useRecoilState(textState);

    const handleChange = (event) => {
      setText(event.target.value);
    };

    return (
      <div>
        <input type='text' value={text} onChange={handleChange} />
        <p>Echo: {text}</p>
      </div>
    );
  }
  ```

<br>

#### 📌 `Selector`란?

- `Selector`는 Atom 또는 다른 `Selector`의 값을 기반으로 파생 상태를 생성한다.
- 데이터를 변형하거나 계산한 결과를 반환하는 데 사용된다.
- 예시

  ```jsx
  import { selector } from "recoil";
  import { textState } from "./recoil/atoms";

  const charCountState = selector({
    key: "charCountState", // 고유 ID
    get: ({ get }) => {
      const text = get(textState); // textState 값을 가져옴
      return text.length; // 텍스트 길이를 반환
    },
  });
  ```

- 컴포넌트에서 `Selector` 사용하기 : `useRecoilValue()` 훅을 사용해서 `charCountState` 값을 읽을 수 있다.

  ```jsx
  import { useRecoilValue } from "recoil";
  import { charCountState } from "./recoil/selectors";

  function CharacterCount() {
    const count = useRecoilValue(charCountState);

    return <p>Character Count: {count}</p>;
  }
  ```

<br>

### 2-4. Recoil의 주요 장점

1. React와의 자연스러운 통합
   - React의 상태 관리 방식과 유사한 API 제공.
2. 간단한 사용법
   - Redux보다 설정과 코드가 간결함.
3. 동시성 및 성능 최적화
   - Recoil의 `Selector`와 React의 `Suspense`를 결합해 비동기 상태 관리 가능.

<br>

---

## 3. Recoil로 데이터 관리하기

### 🤔 전역 상태를 효율적으로 관리하기 위한 두 가지 핵심 질문

#### 📌 어떤 데이터를 전역 상태로 관리할 것인가?

> Recoil의 Atom은 여러 컴포넌트에서 공유되고 사용하는 데이터를 전역 상태로 관리하는 데 적합하다.

<br>

다음과 같은 데이터를 전역 상태로 관리하는 것이 일반적이다.

- **사용자 정보**
  - 로그인된 사용자 이름, 이메일, 권한 등
- 애플리케이션 설정
  - 현재 언어, 테마, 다크 모드 상태 등
- **공유 상태**
  - 여러 컴포넌트 간에 필요한 상태
  - 예) 검색 필터, 선택된 항목 등

<br>

#### 📌 스토어와 어떤 컴포넌트를 연결할 것인가?

> 전역 상태를 사용하면 렌더링 영향 범위를 최소화해야 한다.

<br>

불필요한 렌더링을 방지하기 위해 아래와 같은 방법을 고려할 수 있다.

1. **가장 영향이 적은 컴포넌트와 연결**
   - 예를 들어, 특정 페이지의 상태만 필요하다면 페이지 최상위 컴포넌트에 연결
   - 전역 상태를 사용하는 컴포넌트가 많을수록 불필요한 렌더링이 발생할 가능성이 높다.
2. **상태를 사용하는 컴포넌트에서만 구독**
   - Recoil은 `useRecoilState`, `useRecoilValue`, `useSetRecoilState`와 같은 훅을 사용하여 필요한 데이터만 구독하게 할 수 있다.

<br>

### 💡 렌더링 최적화 팁

#### 1️⃣ `Selector` 활용하기

- 필요한 데이터만 가공해 전달하여 렌더링 범위를 줄일 수 있다.

<br>

#### 2️⃣ 컴포넌트 분리하기

- 전역 상태를 구독하는 컴포넌트를 가능한 한 작게 분리해 렌더링 영향을 최소화할 수 있다.

---

## 4. Custom hook 만들기

### 4-1. Custom Hook이란?

- Custom Hook은 하나 이상의 React Hook을 조합하여 특정 기능을 캡슐화한 재사용 가능한 Hook이다.
- 컴포넌트에서 공통적으로 사용되는 로직을 분리하고 재사용성을 높이는 데 유용하다.

<br>

### 4-2. Custom Hook의 특징

#### 1️⃣ React Hook 규칙 준수

- `use`로 시작하는 네이밍 규칙을 따라야 한다.
- React Hook의 규칙 (Top-Level, React Function 내 사용)을 그대로 따른다.

#### 2️⃣ 재사용 가능

- Custom Hook은 프로젝트의 여러 컴포넌트에서 동일한 로직을 쉽게 재사용할 수 있도록 한다.

#### 3️⃣ 로직 분리

- Custom Hook을 사용하면 UI와 로직을 분리하여 코드를 더 간결하고 읽기 쉽게 만든다.

<br>

### 4-3. Custom Hook의 구조

- 필요에 따라 하나 이상의 Hook(`useState`, `useEffect`, `useRecoilState` 등)을 사용
- 데이터를 반환하거나 동작 함수를 제공

<br>

### 4-3. Custom Hook 예시

#### 1️⃣ 상태 관리 로직 추출

```jsx
import { useState } from "react";

// Custom Hook 정의
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
}

// Custom Hook 사용
function Counter() {
  const { count, increment, decrement } = useCounter(5);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
```

<br>

#### 2️⃣ 데이터 Fetching 로직 추출

```jsx
import { useState, useEffect } from "react";

// Custom Hook 정의
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Custom Hook 사용
function PostList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
```

<br>

#### 3️⃣ Recoil 상태 관리와 연동

```jsx
import { useRecoilState } from "recoil";
import { userState } from "./recoil/atoms";

function useUser() {
  const [user, setUser] = useRecoilState(userState);

  const login = (userInfo) => setUser({ ...userInfo, isLoggedIn: true });
  const logout = () => setUser({ isLoggedIn: false, email: "", name: "" });

  return { user, login, logout };
}

// Custom Hook 사용
function UserProfile() {
  const { user, login, logout } = useUser();

  return (
    <div>
      {user.isLoggedIn ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button
          onClick={() => login({ email: "test@example.com", name: "Tester" })}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default UserProfile;
```

---
