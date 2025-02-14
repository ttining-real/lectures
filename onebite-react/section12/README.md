# 🍰 한입 크기로 잘라 먹는 리액트

## 섹션 12. 프로젝트 3️⃣ 감정 일기장

<br>

### 🌱 목차

- [x] 프로젝트 소개 및 준비
- [x] 페이지 라우팅 1️⃣ 소개
- [x] 페이지 라우팅 2️⃣ 라우팅 설정하기
- [ ] 페이지 라우팅 3️⃣ 페이지 이동
- [ ] 페이지 라우팅 4️⃣ 동적 경로
- [ ] 폰트, 이미지, 레이아웃 설정하기
- [ ] 공통 컴포넌트 구현하기
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

<br>
<br>

## 5. 페이지 라우팅 4️⃣ 동적 경로

<br>
<br>

## 6. 폰트, 이미지, 레이아웃 설정하기

<br>
<br>

## 7. 공통 컴포넌트 구현하기

<br>
<br>

## 8. 일기 관리 기능 구현하기 1️⃣

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
