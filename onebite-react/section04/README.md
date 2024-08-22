# 🍰 한입 크기로 잘라 먹는 리액트

```
2024. 08. 22(목)
```

<br>

### 섹션 4. React.js 개론

- [x] React.js 소개
- [x] 첫 React App 생성하기
- [x] React App 구동원리 살펴보기

<br>

**React의 기술적 특징**

1. 컴포넌트를 기반으로 UI를 표현한다.
   > 컴포넌트란(Component),
   > 우리말로 **「구성요소」** 라는 뜻
   > 화면을 구성하는 요소, UI를 구성하는 요소를 말한다.
2. 화면 업데이트 구현이 쉽다.
   > 리액트는 **선언형 프로그래밍** 이다.
   > 과정은 생략하고 목적만 간결히 명시하는 방법 (코드가 간결함)
   > ↔ 명령형 프로그래밍
   > 목적을 이루기 위한 모든 일련의 과정을 설명하는 방식 (코드가 길고 복잡함)
3. 화면 업데이트가 빠르게 처리된다.

   > 브라우저의 렌더링 과정 (Critical Rendering Path) → DOM / CSSOM
   > JavaScript가 DOM을 수정하면 업데이트가 일어난다. → Render Tree, Layout, Painting
   >
   > > ⚠️ Layout, Painting은 시간이 오래 걸리는 작업이다.
   > > Reflow : Layout을 다시 한다.
   > > Repaint : Painting을 다시 한다.

   > 💡 리액트는 **Virtual DOM**을 사용한다!
   > 다양한 업데이트를 한 곳에 모아 한 번에 수정한다.
   >
   > > Virtual DOM이란,
   > > DOM을 자바스크립트 객체로 흉내낸 것으로 일종의 「복제판」이라고 생각하면 된다.
   > > React는 업데이트가 발생하면 실제 DOM을 수정하기 전에 가상의 복제판 DOM에 먼저 반영한다. (연습 스윙 같은 느낌)

<br>

**React로 만든 웹 서비스**
보통, React App 또는 React Application이라고 부른다.

<br>

**React x Vite 설치하기**
`npm create vite@latest`

- Project name : section04
- Select a framework : React
- Select a variant : JavaScript

<br>

> **React + Vite**
> This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
> Currently, two official plugins are available:
>
> - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
> - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
