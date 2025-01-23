# 🍰 한입 크기로 잘라 먹는 리액트

## 섹션 4. React.js 개론

<br>

### 🌱 목차

- [x] React.js 소개
- [ ] 첫 React App 생성하기
- [ ] React App 구동원리 살펴보기

<br>

## React.js 소개

### 📌 React.js란?

- Meta(Facebook)가 개발한 오픈소스 JavaScript 라이브러리로, 대규모 웹 서비스의 UI를 보다 편리하게 개발하기 위해 만들어졌다.
- UI를 효율적으로 구축하고 유지보수하기 위한 기술로, 컴포넌트 기반의 선언형 프로그래밍 방식을 제공한다.
- React.js로 만들어진 대표적인 서비스
  - Netflix, Facebook, Instagram, Notion 등

<br>

### 📌 React의 기술적 특징

#### 1️⃣ 컴포넌트를 기반으로 UI를 표현한다.

- **컴포넌트(Component)** 란 화면을 구성하는 최소 단위 또는 UI를 구성하는 요소를 의미한다.
- React는 컴포넌트를 재사용 가능한 구조로 개발하여 유지보수성과 확장성을 높인다.
- 컴포넌트는 독립적으로 동작하며, 각 컴포넌트가 **`props`** (속성)와 **`state`** (상태)를 통해 데이터를 주고받거나 내부 상태를 관리한다.

<br>

#### 2️⃣ 화면 업데이트 구현이 쉽다.

> 업데이트란, 사용자의 행동(클릭, 드래그)에 따라 웹 페이지가 스스로 모습을 바꿔 상호작용 하는 것을 말한다.

- React는 선언형 프로그래밍 방식을 사용한다.
  - 선언형 프로그래밍: 결과에 집중하며, 불필요한 과정을 생략하고 목적만 간결하게 명시
  - 명령형 프로그래밍: 과정을 단계별로 상세히 명시하며 복잡하고 코드가 길어지는 방식
- `State` : React 컴포넌트의 현재 상태를 저장하는 변수로, 컴포넌트에서 화면에 렌더링할 UI를 결정한다.
  - `State`가 변경되면 React는 변경된 값에 따라 자동으로 UI를 업데이트한다.
- 결과적으로 코드가 간결해지고, 화면 업데이트를 위한 추가 작업이 줄어든다.

<br>

#### 3️⃣ 화면 업데이트가 빠르게 처리된다.

> **💡 선수 지식**
>
> 1. 브라우저는 어떻게 동작하는가?
> 2. HTML, CSS로 만든 페이지를 어떻게 렌더링하는가?
> 3. 화면 업데이트는 어떻게 처리되는가?

<br>

##### 💡 브라우저 렌더링 과정과 React의 최적화 방식

> React는 어떻게 화면 업데이트를 쉽게 구현하면서, 동시에 빠르게 처리해줄 수 있을까?
>
> - React의 빠른 화면 업데이트는 Virtual DOM을 활용한 최적화 덕분이다.

<br>

1. **브라우저의 렌더링 과정 (Critical Rendering Path)**
   1. HTML과 CSS를 각각 DOM(Document Object Model)과 CSSOM(CSS Object Model)로 변환한다.
   2. DOM과 CSSOM을 결합해 Render Tree 생성
   3. Layout (요소 배치)
   4. Painting (화면에 요소 그리기)

<br>

2. **화면 업데이트 시 발생하는 문제점**

   > JavaScript가 DOM을 수정하게 되면 업데이트가 발생한다.

   <br>

   1. DOM이 수정되면 브라우저는 전체 렌더링 과정(Critical Rendering Path)을 다시 실행한다. (Reflow 및 Repaint 발생)
      - Reflow: Layout을 다시 계산하는 작업
      - Repaint: 화면에 요소를 다시 그리는 작업
   2. DOM 조작이 많아질수록 브라우저 성능이 저하된다. (Reflow와 Repaint는 시간이 오래 걸리는 작업이기 때문)

<br>

3. **React의 Virtual DOM**

   - React는 실제 DOM 대신 「Virtual DOM(가상 DOM)」을 사용해 성능을 최적화한다.
   - Virtual DOM은 메모리 내에 존재하는 DOM의 복제판으로, 변경 사항을 가상 DOM에서 먼저 반영하고, 최소한의 변경만 실제 DOM에 적용한다.
     - 즉, React는 DOM 업데이트를 모아서 한 번에 처리해 브라우저 렌더링 과정을 최소화한다.
   - 변경 사항 비교(디프 알고리즘) → DOM 수정 최소화 → 브라우저 렌더링 성능 개선

<br>
<br>

## 첫 React App 생성하기

> React로 만든 웹 서비스들은 보통, React App 또는 React Application이라고 부른다.

<br>

### 1️⃣ Node.js 패키지 생성

- 먼저, Node.js가 설치되어 있어야 한다.
- 설치가 되지 않았다면, [Node.js 공식 웹 사이트](https://nodejs.org/en)에서 설치할 수 있다.

<br>

### 2️⃣ React 라이브러리 설치 (Vite)

- Vite는 최신의 프론트엔드 개발 툴로, 기본 설정이 적용된 React 앱을 쉽고 빠르게 생성할 수 있다.
- 설치 명령어
  ```bash
   npm create vite@latest
   Project name : section04         # 프로젝트 이름
   Select a framework : React       # 사용할 프레임워크 선택
   Select a variant : JavaScript    # 사용할 언어 선택
  ```
- 설치가 완료되면, 프로젝트 디렉토리로 이동하여 필요한 `devDependencies`를 설치한다.
  `node_modules`와 `package-lock.json`이 생성된다.

  ```bash
  npm install # package.json의 devDependencies 설치
  ```

- 설치된 파일 목록
  ```bash
  section04/
    public/             # 정적 파일 (예: favicon, index.html 등)
    src/                # React 컴포넌트 및 JavaScript 코드
    .gitignore          # Git에서 추적하지 않을 파일 목록
    eslint.config.js    # ESLint 설정 파일
    index.html          # 기본 HTML 템플릿
    package.json        # 프로젝트 메타데이터 및 종속성 관리
    README.md           # 프로젝트 설명
    vite.config.js      # Vite 설정 파일
  ```

<br>

### 3️⃣ 기타 도구 설치 및 설정

- React 앱을 만들 때 기본적인 개발 도구들(`ESLint`, `Prettier` 등)을 설치할 수 있다.
- 필요에 따라 프로젝트에 추가적인 라이브러리를 설치할 수 있다.

<br>
<br>

## React App 구동원리 살펴보기

> 리액트 앱이 어떠한 원리로 구동되는지 살펴보자.

<br>

### 1️⃣ Vite로 React 앱 생성:

- `npm create vite` 명령어를 사용하여 Vite로 React 앱을 생성한다.
- 생성된 앱을 실행하려면 터미널에서 `npm run dev`를 입력하여 개발 서버를 시작한다.

<br>

### 2️⃣ 개발 서버 실행

- `npm run dev` 명령어는 Vite 개발 서버를 실행시킨다.
- 개발 서버는 기본적으로 `localhost:5173`에서 실행된다.
- 포트 번호는 Vite의 기본 설정에 따라 달라질 수 있다. (Vite의 설정 파일에서 포트를 변경할 수 있음)

<br>

### 3️⃣ `localhost:5173`

- `localhost`는 현재 사용하는 컴퓨터를 의미한다.
- `5173`은 Vite 개발 서버의 기본 포트 번호이다.
- 이는 개발 중에만 사용되는 포트 번호로, 실제 배포 시에는 다른 서버에서 제공되는 URL을 사용한다.

<br>

### 4️⃣ `index.html`

- React 앱은 `index.html` 파일을 기반으로 동작한다.
- `index.html` 파일의 `<body>` 태그는 비어 있으며, 실제 React 컴포넌트들은 `main.jsx` 파일에 의해 동적으로 로드된다.

<br>

### 5️⃣ `main.jsx`

- `main.jsx`에서 `ReactDOM.createRoot()`를 사용하여 React 앱을 DOM에 연결한다.
- `ReactDOM.createRoot()`는 React 18에서 도입된 새로운 방법으로, 앱의 루트 컴포넌트를 HTML에 렌더링하는 역할을 한다.
- 기본적으로 `index.html` 파일에 `<div id="root"></div>`가 포함되어 있으며, React는 이 `<div>` 태그를 찾아서 해당 위치에 앱을 렌더링한다.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

<br>

### 6️⃣ `App` 컴포넌트

- `App.jsx`는 React 앱의 루트 컴포넌트로, 모든 UI 요소가 이 컴포넌트 내에서 관리된다.
- 기본적으로 Vite에서 생성된 템플릿에는 `App` 컴포넌트가 기본 UI로 설정되어 있다.

<br>

### 7️⃣ Vite와 React의 동작

- Vite는 빠른 번들링과 핫 리로드(Hot Module Replacement, HMR)를 지원하는 개발 서버이다.
  이를 통해 파일을 수정하면 브라우저가 자동으로 리로드되어 최신 상태를 빠르게 반영할 수 있다.
- Vite는 또한 ES 모듈을 사용하여 더 빠르고 효율적인 빌드를 가능하게 한다.

<br>
<br>

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
