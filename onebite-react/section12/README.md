# 🍰 한입 크기로 잘라 먹는 리액트

## 섹션 12. 프로젝트 3️⃣ 감정 일기장

<br>

### 🌱 목차

- [x] 프로젝트 소개 및 준비
- [x] 페이지 라우팅 1️⃣ 소개
- [x] 페이지 라우팅 2️⃣ 라우팅 설정하기
- [x] 페이지 라우팅 3️⃣ 페이지 이동
- [x] 페이지 라우팅 4️⃣ 동적 경로
- [x] 폰트, 이미지, 레이아웃 설정하기
- [x] 공통 컴포넌트 구현하기
- [x] 일기 관리 기능 구현하기 1️⃣
- [x] 일기 관리 기능 구현하기 2️⃣
- [x] Home 페이지 구현하기 1️⃣ UI
- [x] Home 페이지 구현하기 2️⃣ 기능
- [x] Home 페이지 구현하기 3️⃣ 회고
- [x] New 페이지 구현하기 1️⃣ UI
- [x] New 페이지 구현하기 2️⃣ 기능
- [x] Edit 페이지 구현하기
- [x] Diary 페이지 구현하기
- [x] 웹 스토리지 이용하기
- [ ] 배포 준비하기
- [ ] 배포하기

<br>
<br>

## 1. 프로젝트 소개 및 준비

<br>
<br>

## 2. 페이지 라우팅 1️⃣ 소개

### 📍 페이지 라우팅이란?

- 경로에 따라 알맞은 페이지를 렌더링 하는 과정을 말한다.
- 예시. /new → new 페이지 렌더링

<br>

#### 📌 Multi Page Application (MPA)

- 애초에 서버가 여러 개의 페이지를 가지고 있음
- 많은 서비스가 사용하는 전통적인 방식
- Server Side Rendering (SSR)
  > React.js는 MPA 방식을 따르지 않는다.
  >
  > → 빠르고 쾌적한 페이지 이동이 어렵기 때문

<br>

##### ✔️ MPA 방식의 단점

- 페이지 이동이 쾌적하지 못하다. (매끄럽지 않고 비효율적)
- 다수의 사용자 접속 시, 서버의 부하가 심해진다.

<br>

#### 📌 Single Page Application (SPA)

- 페이지 이동이 매끄럽고 효율적임
- 다수의 사용자가 접속해도 크게 상관 없음
- Client Side Rendering
  > React.js가 채택한 방식

<br>

### 📍 React Router

- npmjs.com에 등록되어 있는 라이브러리
- 대다수의 리액트 앱이 사용하고 있는 대표격 라이브러리

<br>
<br>

## 3. 페이지 라우팅 2️⃣ 라우팅 설정하기

### 📍 `react-router-dom` 설치

```bash
npm i react-router-dom
```

<br>

### 📍 사용하기

#### 1️⃣ `BrowserRouter`

```jsx
// main.jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

<br>

#### 2️⃣ `Routes` & `Route`

```jsx
// App.jsx
import { Route, Routes } from "react-router-dom";

import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/diary' element={<Diary />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
```

<br>
<br>

## 4. 페이지 라우팅 3️⃣ 페이지 이동

### 📍 사용하기

#### 1️⃣ `Link`

```jsx
// App.jsx
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
    </>
  );
}

export default App;
```

- `<Link></Link>` 태그 사용 시, CSR ⭕
- `<a></a>` 태그 사용 시, CSR ❌

<br>

#### 2️⃣ `useNavigate`

```jsx
// App.jsx

import { useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <button onClick={onClickButton}>New 페이지로 이동</button>
    </>
  );
}

export default App;
```

<br>
<br>

## 5. 페이지 라우팅 4️⃣ 동적 경로

### 📍 동적 경로란?

- 동적인 데이터를 포함하고 있는 경로
- 예시
  - `~product/1` : 1번 상품 페이지
  - `~product/2` : 2번 상품 페이지
  - `~product/3` : 3번 상품 페이지

<br>

#### 🪄 URL Parameter

- `/` 뒤에 아이템의 `id`를 명시
- 아이템의 id 등 변경되지 않는 값을 주소로 명시하기 위해 사용
- 예시
  - `~/product/1`
  - `~/product/2`
  - `~/product/3`

<br>

#### 🪄 Query String

- `?` 뒤에 변수명과 값 명시
- 검색어 등의 자주 변경되는 값을 주소로 명시하기 위해 사용
- 예시
  - `~/search?q=검색어`

<br>
<br>

## 6. 폰트, 이미지, 레이아웃 설정하기

### 📍 폰트 설정하기

- `public/NanumPenScript-Regular.ttf`

```css
/* index.css */

@font-face {
  font-family: "NanumPenScript";
  src: url("/NanumPenScript-Regular.ttf");
}

body * {
  font-family: "NanumPenScript";
}
```

<br>

### 📍 이미지 설정하기

#### 📂 `src/assets` : Vite 이미지 최적화 ⭕

```jsx
// App.jsx

import emotion1 from "./assets/emotion1.png";
import emotion2 from "./assets/emotion2.png";
import emotion3 from "./assets/emotion3.png";
import emotion4 from "./assets/emotion4.png";
import emotion5 from "./assets/emotion5.png";

function App() {
  return (
    <>
      <div>
        <img src={emotion1} alt='' />
        <img src={emotion2} alt='' />
        <img src={emotion3} alt='' />
        <img src={emotion4} alt='' />
        <img src={emotion5} alt='' />
      </div>
    </>
  );
}

export default App;
```

<br>

#### 📂 `public` : Vite 이미지 최적화 ❌

```jsx
// App.jsx

function App() {
  return (
    <>
      <div>
        <img src={"/emotion1.png"} alt='' />
        <img src={"/emotion2.png"} alt='' />
        <img src={"/emotion3.png"} alt='' />
        <img src={"/emotion4.png"} alt='' />
        <img src={"/emotion5.png"} alt='' />
      </div>
    </>
  );
}

export default App;
```

<br>

#### 🪄 Data URI

- 외부 데이터들을 문자열 형태로 브라우저의 메모리에 캐싱하기 위해 사용되는 포맷
- 새로 고침 시, 브라우저의 메모리에 캐싱(저장)되어 있기 때문에 이미지 등을 다시 불러오지 않는다. (최적화)
- `npm run build`, `npm run preview` 명령어 실행 후,
  - 개발자 도구 > Elements 탭
    - `src/assets` : 암호문 같은 포맷으로 경로 변경됨 (Data URI)
    - `public` : 일반적인 경로 (새로 고침 시, 매번 새로 불러옴)
  - 개발자 도구 > Network 탭
    - `Img` 필터 클릭, `Preserve log` 체크 → `Size`, `Time` 확인

<br>

#### 🪄 무엇을 쓰는 게 좋을까?

- `src` : 소수의 이미지 사용 시
- `public` : 1만 개, 2만 개처럼 다수의 이미지 사용 시

<br>
<br>

## 7. 공통 컴포넌트 구현하기

- [x] `components/Button.jsx`
- [x] `components/Header.jsx`

<br>
<br>

## 8. 일기 관리 기능 구현하기 1️⃣

### 📍 감정 일기장 기능

- `home` : 일기 리스트 렌더링
- `diary` : 일기 상세 조회
- `new` : 새로운 일기 작성
- `edit` : 기존 일기 수정

<br>

### ✅ 체크 리스트

- [x] `Edit` 페이지 추가
- [x] `mockData` 생성
- [x] 일기를 관리할 새로운 State 생성 (`useReducer` 사용)

<br>
<br>

## 9. 일기 관리 기능 구현하기 2️⃣

### ✅ 체크 리스트

- [x] 새로운 일기 추가
- [x] 기존 일기 수정
- [x] 기존 일기 삭제
- [x] context 데이터 공급

<br>
<br>

## 10. Home 페이지 구현하기 1️⃣ UI

- [x] `pages/Home.jsx`
- [x] `components/DiaryList.jsx`
- [x] `components/DiaryItem.jsx`

<br>
<br>

## 11. Home 페이지 구현하기 2️⃣ 기능

- [Sort 메서드 비교 함수 관련 아티클](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [x] mockData 수정 및 데이터 렌더링
- [x] 이전, 다음 버튼
- [x] 이미지, 내용 클릭 시 `/diary/${id}` 로 이동
- [x] 수정하기 버튼 클릭 시 `/edit/${id}` 로 이동
- [x] 최신순, 오래된 순 정렬

<br>
<br>

## 12. Home 페이지 구현하기 3️⃣ 회고

<br>
<br>

## 13. New 페이지 구현하기 1️⃣ UI

- [x] `pages/New.jsx`
- [x] `components/Editor.jsx` 컴포넌트 추가
- [x] `components/EditorItem.jsx` 컴포넌트 추가

<br>
<br>

## 14. New 페이지 구현하기 2️⃣ 기능

- [x] New 페이지 내 날짜, 감정, 일기 작성 (`getStringedDate`, `onChangeInput`)
- [x] 작성 완료 버튼 클릭 시 `onSubmit`
- [x] 취소하기 버튼 클릭 시 `useNavigate`

<br>
<br>

## 15. Edit 페이지 구현하기

- [x] UI 구현
- [x] 일기 삭제(`onDelete`) 기능
- [x] 일기 수정(`onUpdate`) 기능

<br>
<br>

## 16. Diary 페이지 구현하기

- [x] `components/Viewer.jsx` 컴포넌트 추가
- [x] 커스텀 훅 (`useDiary`) 생성

<br>
<br>

## 17. 웹 스토리지 이용하기

- [x] 웹 스토리지에 일기 내용 저장, mockData 제거
- [x] `reducer` 함수 내 `INIT` 추가
- [x] `idRef` 수정
- [x] `dispatch`의 `INIT`이 실행되기 전, `loading` 상태 추가

<br>

> **웹 스토리지 (Web Storage)**
>
> - 데이터를 브라우저에 보관하는 방법
> - 웹 브라우저 내장 DB

<br>

### 📍 웹 스토리지란?

- 웹 브라우저에 기본적으로 내장되어 있는 데이터베이스
- 별도의 프로그램 설치 필요 ❌, 라이브러리 설치 필요 ❌
- 자바스크립트 내장 함수만으로 접근 가능
- 예시
  - 값 저장하기 : `localStorage.setItem(key, value)`
  - 값 꺼내오기 : `localStorage.getItem(key)`
- `SessionStorage`와 `LocalStorage`로 나뉜다.

<br>

#### 🗃️ SessionStorage

- **브라우저 탭** 별로 데이터 보관
- 탭이 종료되기 전에는 데이터 유지 (새로 고침)
- 탭이 종료되거나 꺼지면 데이터 삭제
- 예시
  - 값 저장하기 : `sessionStorage.setItem(key, value)`
  - 값 꺼내오기 : `sessionStorage.getItem(key)`

<br>

#### 🗃️ LocalStorage

- **사이트 주소** 별로 데이터 보관
- 사용자가 직접 삭제하기 전까지 데이터 보관
- 예시
  - 값 저장하기 : `localStorage.setItem(key, value)`
  - 값 꺼내오기 : `localStorage.getItem(key)`

<br>

#### ⚠️ 주의

- `key`값은 원시 타입의 값만 넣을 수 있다.

<br>

#### 👀 사용 예시

```jsx
// localStorage에 값 넣기
localStorage.setItem("test", "hello");
localStorage.setItem("person", { name: "ttining" });
localStorage.setItem("person", JSON.stringify({ name: "ttining" }));

// localStorage에 있는 값 꺼내기
console.log(localStorage.getItem("test")); // hello
console.log(localStorage.getItem("person")); // {"name": "ttining"} : 문자열로 출력됨 (객체로 변환해야 함)
console.log(JSON.parse(localStorage.getItem("person"))); // {name: "ttining"}
```

##### ✅ 결과

- DevTools ➡️ Application ➡️ Local storage ➡️ 주소

  | `key`  | `value`             |
  | ------ | ------------------- |
  | test   | hello               |
  | person | object Object       |
  | person | {"name": "ttining"} |

- DevTools ➡️ Console
  ```
  hello
  {"name": "ttining"}
  {name: 'ttining'}
  ```

<br>

#### 👀 로컬 스토리지의 값 제거하기

```jsx
localStorage.removeItem("test");
```

##### ✅ 결과

- DevTools ➡️ Application ➡️ Local storage ➡️ 주소

  | `key`  | `value`             |
  | ------ | ------------------- |
  | person | {"name": "ttining"} |

<br>
<br>

## 18. 배포 준비하기

> 프로젝트를 배포하기 전, 타이틀, Favicon, OG 설정 진행

<br>
<br>

## 19. 배포하기

> 리액트 앱을 배포하는 방법
