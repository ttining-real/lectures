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
- [ ] 일기 관리 기능 구현하기 1️⃣
- [ ] 일기 관리 기능 구현하기 2️⃣
- [ ] Home 페이지 구현하기 1️⃣ UI
- [ ] Home 페이지 구현하기 2️⃣ 기능
- [ ] Home 페이지 구현하기 3️⃣ 회고
- [ ] New 페이지 구현하기 1️⃣ UI
- [ ] New 페이지 구현하기 2️⃣ 기능
- [ ] Edit 페이지 구현하기
- [ ] Diary 페이지 구현하기
- [ ] 웹 스토리지 이용하기
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

- [ ] `home` : 일기 리스트 렌더링
- [ ] `diary` : 일기 상세 조회
- [ ] `new` : 새로운 일기 작성
- [ ] `edit` : 기존 일기 수정

<br>
<br>

## 9. 일기 관리 기능 구현하기 2️⃣

<br>
<br>

## 10. Home 페이지 구현하기 1️⃣ UI

<br>
<br>

## 11. Home 페이지 구현하기 2️⃣ 기능

<br>
<br>

## 12. Home 페이지 구현하기 3️⃣ 회고

<br>
<br>

## 13. New 페이지 구현하기 1️⃣ UI

<br>
<br>

## 14. New 페이지 구현하기 2️⃣ 기능

<br>
<br>

## 15. Edit 페이지 구현하기

<br>
<br>

## 16. Diary 페이지 구현하기

<br>
<br>

## 17. 웹 스토리지 이용하기

<br>
<br>

## 18. 배포 준비하기

<br>
<br>

## 19. 배포하기
