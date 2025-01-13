# chapter 10. SurveyPie 라우터 적용

#### 🌱 목차

- [x] 1. react-router
- [x] 2. react-router 적용
- [x] 3. 라우터로 스텝 구분하기

---

## 1. react-router

### 1-1. 라우팅(Routing)이란?

> **라우팅(Routing)** 이란?
> 라우팅은 사용자가 입력한 주소나 경로에 따라 해당하는 페이지를 로드하는 과정을 말한다.
>
> - 예를 들어, 사용자가 특정 웹사이트에서 `/list` 경로에 있다가
>   화면에 표시된 링크를 클릭해 `/detail` 경로로 이동하는 과정을 라우팅이라고 한다.
>   전통적인 웹 서비스에서는 사용자가 요청한 주소에 따라 서버에서 해당 HTML 페이지를 반환해 브라우저에 표시한다.
>   반면, SPA에서는 여러 개의 HTML 파일이 아닌 하나의 파일로 동작하기 때문에 라우팅 방식에 차이가 있다.

<br>

#### 🤔 라우팅은 왜 중요한가?

라우팅은 웹 애플리케이션에서 **사용자 경험(UX)** 을 크게 좌우하는 핵심 요소다.
예를 들어, URL 변경 없이 화면만 바뀐다면 사용자는 혼란을 느낄 수 있다.
반면, 주소와 화면이 일관되게 동작하면 사용자는 더 직관적인 경험을 하게 된다.

<br>

### 1-2. SPA에서의 라우팅

> **SPA** 란?
> SPA (Single Page Application)는 하나의 HTML 파일을 기반으로 동작하며,
> 클라이언트 측에서 JavaScript를 사용해 동적으로 페이지를 렌더링하는 방식의 웹 애플리케이션이다.

<br>

#### ✨ SPA의 라우팅 동작 방식

SPA에서는 브라우저의 히스토리 객체를 조작하여 라우팅을 구현한다.
이 방식은 페이지가 실제로 이동하지 않더라도 URL을 변경하고, 이에 따라 화면을 동적으로 업데이트한다.

<br>

#### ✨ 브라우저 히스토리 객체

- 브라우저는 사용자가 방문한 페이지의 이동 기록을 저장하기 위해 히스토리 객체를 제공한다.
- 이를 통해 뒤로 가기, 앞으로 가기 등 페이지 이동이 가능하다.

<br>

---

## 2. react-router 적용

### 2-1. React Router란?

> [React Router 공식 웹사이트](https://reactrouter.com/home)

React 애플리케이션에서 라우팅을 쉽게 구현할 수 있도록 도와주는 라이브러리다.
히스토리 객체가 제공하는 기능들을 활용해서 실제 다른 페이지로 이동하지는 않았지만(=해당 주소로 HTTP 요청을 보내지는 않았지만)
히스토리를 직접 쌓음으로써 페이지가 이동하는 것과 같은 효과를 줄 수 있다.

<br>

#### ✨ 설치하기

```bash
npm install react-router-dom --save
pnpm add react-router-dom
```

<br>

### 2-2. React Router의 주요 개념

#### `BrowserRouter`

- HTML5의 History API를 사용하여 UI와 URL을 동기화하는 라우터 컴포넌트이다.
- SPA에서 페이지 새로고침 없이 URL을 변경하고 화면 전환을 처리할 수 있도록 한다.
- 사용 예시

  ```jsx
  // main.jsx
  import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import { BrowserRouter } from "react-router-dom";

  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
  ```

<br>

#### `Routes` (Routes로 감싼 영역만 페이징 됨)

- 페이지 전환을 정의하는 컴포넌트이다.
- `Routes`로 감싼 영역 내에서만 라우팅이 이루어지며, 각 URL에 따라 적절한 컴포넌트를 렌더링한다.

<br>

#### `Route`

- 라우팅 규칙을 정의하는 컴포넌트이다.

  - `path` : 해당 경로에서 렌더링할 컴포넌트를 지정한다.
  - `element` : 특정 경로에서 렌더링할 컴포넌트를 설정한다.

- 사용 예시

  ```jsx
  // App.jsx
  import { Route, Routes } from "react-router-dom";
  import PageA from "./pages/PageA";
  import PageB from "./pages/PageB";

  // Routes로 감싼 영역만 페이징된다.
  <Routes>
    <Route path='/' element={<PageA />} />
    <Route path='/2' element={<PageB />} />
  </Routes>;
  ```

<br>

#### `Link`

- SPA 라우터 방식으로 페이지를 이동할 때 사용하는 컴포넌트이다.
- `<a href="/">` 태그와 달리, 페이지 새로고침 없이 URL을 변경하며 React Router의 라우팅 동작을 활용한다.
- `Link` 🆚 `<a>` 태그
  - `Link` : 클라이언트 사이드에서 빠르게 화면을 전환한다.
  - `<a>` : SSR 방식으로 서버에 요청을 보내 페이지를 새로고침한다.
- 사용 예시

  ```jsx
  // pages/PageA/index.jsx
  import { Link } from "react-router-dom";

  function PageA() {
    return (
      <>
        <div>PageA</div>
        <a href='/2'>move to PageB by a tag</a>
        <Link to='/2'>move to PageB</Link>
      </>
    );
  }

  export default PageA;
  ```

<br>

### 2-3. SPA 🆚 React Router 장단점

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>장점</th>
      <th>단점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">SPA</td>
      <td>빠른 페이지 로딩 속도</td>
      <td>초기 로딩 속도가 느릴 수 있음</td>
    </tr>
    <tr>
      <td>네이티브 앱과 유사한 사용자 경험 제공</td>
      <td>SEO 최적화가 어려움</td>
    </tr>
    <tr>
      <td>서버 부하 감소</td>
      <td>JavaScript 의존성이 큼</td>
    </tr>
    <tr>
      <td rowspan="3">React Router</td>
      <td>간단한 API로 복잡한 라우팅 로직 구현 가능</td>
      <td>SEO를 위해 SSR이나 추가 설정이 필요할 수 있음</td>
    </tr>
    <tr>
      <td>동적 라우팅 지원</td>
      <td>브라우저의 History API에 의존적</td>
    </tr>
    <tr>
      <td>URL 파라미터와 쿼리 문자열 처리 용이</td>
      <td></td>
    </tr>
  </tbody>
</table>

---

## 3. 라우터로 스텝 구분하기

### React Router Hooks

#### ✨ [useParams](https://reactrouter.com/start/library/url-values#route-params)

- URL 경로에서 동적 매개변수를 가져올 때 사용하는 Hook이다.
- Route 컴포넌트의 path 속성에 정의된 매개변수 이름과 값이 객체 형태로 반환된다.
- 동적으로 변경되는 경로 기반 데이터를 다룰 때 유용하다.
- 사용 예시

  ```jsx
  import { useParams } from "react-router-dom";

  function Survey() {
    const params = useParams();
    console.log(params); // {surveyId: 'asdf', step: 'asdf'}

    return <div>Survey ID: {params.surveyId}</div>;
  }
  ```

<br>

#### ✨ [useNavigate](https://reactrouter.com/start/library/navigating#usenavigate)

- 프로그래밍 방식으로 페이지를 이동해야 할 때 사용하는 Hook이다.
- 링크 태그(`<Link>`)를 사용할 수 없는 상황에서 동적으로 페이지 전환을 구현할 때 유용하다.
- 예를 들어, 폼 제출 후 특정 페이지로 이동하거나 조건에 따라 자동으로 경로를 변경하는 경우에 활용된다.
- 사용 예시

  ```jsx
  import { useNavigate } from "react-router-dom";

  function Form() {
    const navigate = useNavigate();

    const handleSubmit = () => {
      // 폼 제출 후 특정 페이지(home)로 이동
      navigate("/home");
    };

    return (
      <form onSubmit={handleSubmit}>
        <button type='submit'>Submit</button>
      </form>
    );
  }
  ```
