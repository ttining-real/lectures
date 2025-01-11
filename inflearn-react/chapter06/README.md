# chapter 06. React 환경 설정

<br>

#### 🌱 목차

- [x] 1. Node.js, VS code 설치
- [x] 2. create-react-app 프로젝트 생성
- [x] 3. create-react-app 구조 소개
- [x] 4. eslint, prettier 설정

---

## 1. Node.js, VS code 설치

### 1-1. Node.js

Node.js는 브라우저 밖에서도 (서버를 구축하는 등의) JavaScript를 실행할 수 있게 해주는 런타임 환경

**특징**

- 오픈 소스 JavaScript 엔진인 크롬 V8을 기반으로 동작
- Single-Thread의 non-blocking I/O 이벤트 기반 비동기 방식

<br>

### 1-2. NPM(Node Package Manager)

- JavaScript를 위한 패키지 관리자
- 공개된 JavaScript 라이브러리들을 쉽게 설치해 사용할 수 있음
- Node.js는 NPM을 포함하고 있음(설치 시, 같이 설치됨)

<br>

### 1-3. 설치 확인하기

- `node --version` : node 버전 확인
- `npm --version` : npm 버전 확인
- `node` : node 실행
- `.exit` : 종료

---

## 2. create-react-app 프로젝트 생성

### 2-1. Create React App (CRA)

React 기반의 프로젝트 개발 환경을 구성해주는 툴

1. CRA를 이용하여 프로젝트 생성
   ```
   npx create-react-app project-name
   cd project-name
   ```
2. 생성한 프로젝트 실행
   ```
   npm run start
   ```
   (실행이 완료되면 `localhost:3000` 접속)
3. 실행 종료 : `ctrl` + `c`

<br>

### 2-2. 메모장 프로젝트 `memo-project`

1. 생성
   ```
   npx create-react-app memo-project
   ```
2. 이동
   ```
   cd memo-project
   ```
3. 실행
   ```
   npm start
   ```

---

## 3. create-react-app 구조 소개

### 3-1. `package.json`

- `package.json`은 현재 Node.js 프로젝트에 대한 메타데이터와 의존성을 관리하는 파일이다.
- 프로젝트 이름, 버전, 스크립트, 의존성 정보 등을 포함하고 있으며,  
   Node.js 패키지 매니저(`npm` 또는 `yarn`)가 이를 사용하여 패키지를 설치하고 스크립트를 실행한다.
- `scripts` (명령어)
  - `start` : 개발 서버(`localhost:3000`) 실행
  - `build` : `src` 폴더의 파일들을 단일 자바스크립트 코드로 번들링
  - `test` : 테스트 코드 실행(코드가 정상적으로 실행되고 있는지 검증)
  - `eject` : `react-scripts`의 모든 설정들을 밖으로 꺼내 파일 디렉토리에 나열
    - 🤔 `eject`는 왜 할까?  
      `eject`를 하게 되면, `config` 파일이 보이는데 이 안에 `Webpack`, `env`, `path` 등 다양한 설정 파일이 존재한다.  
      이러한 설정 파일들을 수정할 일이 있을 때 사용한다.
    - ⚠️ `eject`는 한번 하게 되면 되돌릴 수 없고, 프로젝트 중간에 `eject`를 할 수 없다.

<br>

### 3-2. `index.js`

- 프로젝트의 시작점
- `index.js`를 실행하면 `React DOM`에 의해 이 안에 있는 코드들이 렌더링 된다.

<br>

### 3-3. `App.js`

- App 컴포넌트

<br>

### 3-4. `index.css`와 `App.css`

- `index.css` : 전역 스타일을 명시하는 css 파일
- `App.css` : App 컴포넌트 스타일 정의
- ℹ️ `create-react-app`에 의해 만들어진 기본 포맷으로, 프로젝트의 성격에 따라 알맞게 변경하면 된다.

---

## 4. eslint, prettier 설정

### 4-1. `eslint` 🛠️

문법 및 코드 스타일을 검사해주는 도구

- 문법적인 오류를 사전에 발견할 수 있다.
- 협업에서 통일된 코드 스타일을 유지할 수 있도록 도와준다.
- `CRA`에는 자체 내장되어 있다. (`package.json`의 `eslintConfig`)

<br>

#### `eslintConfig`를 별도의 파일로 분리하는 방법 💫초간단💫

- `.eslintrc.json` 파일 생성
- `package.json`의 `eslintConfig` 부분 잘라내기
- `.eslintrc.json` 파일 작성
  ```
   {
      "extends": [
         "react-app",
         "react-app/jest"
      ]
   }
  ```
- 별도의 옵션 추가하기
  ```
   {
      "rules": {
         "no-console": "error"
      }
   }
  ```

<br>

### 4-2. `prettier` 🛠️

정해진 규칙에 맞게 자동으로 코드를 고쳐주는 툴  
`prettierrc.json`에서 규칙 정의

- VS code의 Extension  
   `Prettier - Code formatter` 설치
- VS code ▶️ File ▶️ Preferences ▶️ Settings
  - `Formatter` 검색
  - Editor: Default Formatter ➡️ Prettier - Code formatter로 변경
  - Editor: Format On Save 메뉴 ✅ 체크 표시하기
    - 저장 시, Prettier Formatter에 의해 자동 정렬

<br>

#### `prettier` 커스텀이 하고 싶을 때, 🎨

- `.prettierrc.json` 파일 생성
- 생성한 파일 (`.prettierrc.json`)에서 규칙 정의

```
 {
    "singleQuote": true,
    "semi": true,
    "tabWidth": 2,
    "trailingComma": "all"
 }
```
