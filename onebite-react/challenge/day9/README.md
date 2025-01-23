## React.js 개론

<br>

### React.js는 어떤 기술이며 왜 활용되나요?

> 자바스크립트 라이브러리 중 하나이다.

1. 재사용 가능한 컴포넌트 기반으로 UI를 구성하기 때문에 확장성과 유지보수성이 높다.
2. 선언형 프로그래밍 방식을 사용함으로써, 코드가 간결하다.
3. 실제 DOM 대신 Virtual DOM을 사용하여 브라우저 렌더링 과정을 최소화함으로써 렌더링 성능 개선에 도움을 준다.

​<br>

### React App은 어떻게 생성할 수 있나요?

- 번들링 도구 Vite를 사용하면 리액트 앱을 쉽고 빠르게 생성할 수 있다. (단, Node.js가 설치되어 있어야한다.)
- 설치 명령어 : `npm create vite@latest`

​<br>

### React App은 어떻게 구동되나요?

- package.json에 설정한 `scripts` 명령어로 개발 서버를 실행할 수 있다. (예. `npm run dev`)
- 리액트 앱은 index.html 파일을 기반으로 동작하며, `script` 태그로 연결된 jsx 파일에 의해 실제 리액트 컴포넌트들이 동적으로 로드된다.
- `ReactDOM.createRoot()` : 리액트 앱을 DOM에 연결
