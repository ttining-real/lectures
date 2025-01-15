# 섹션 1. JavaScript 기본

#### 🌱 목차

- [x] 1. 안녕 자바스크립트
- [x] 2. VS Code 설치하기
- [x] 3. 자바스크립트 실습 환경 설정하기

---

<br>

## 1. 안녕 자바스크립트

> 오늘날 가장 많이 사용하는 프로그래밍 언어이다.

<br>

### 1-1. JavaScript는 무슨 역할을 하는 언어일까?

- JavaScript는 웹 페이지를 개발하는 데 필수적인 세 가지 언어 중 하나이다.
- 다른 두 언어와 함께 협력하여 웹을 구성하고, 디자인하며, 기능을 추가한다.

#### 📌 HTML (HyperText Markup Language)

- 역할 : 페이지의 구조를 정의한다.
- 한계 : 내용의 배치나 형태는 지정할 수 있지만, 색상이나 스타일의 세부 조정은 어렵다.

<br>

#### 📌 CSS (Cascading Style Sheets)

- 역할 : 페이지의 시각적인 스타일을 지정한다.
- 기능 : 색상, 글꼴 크기, 레이아웃 등을 조정할 수 있다.

<br>

#### 📌 JavaScript

- 역할 : 웹 페이지의 동작을 제어한다.
- 기능 : 사용자와의 상호작용을 처리하며, 웹 페이지를 「살아 움직이게」 만든다.
- > JavaScript는 웹 페이지의 「근육」이라고 할 수 있다.
  > 단순히 보이는 것을 넘어, 버튼을 클릭하거나 데이터를 처리하는 등 동적인 작업을 가능하게 한다.

<br>

### 1-2. JavaScript는 어떻게 실행될까?

JavaScript는 "JavaScript 엔진"에 의해 이루어진다.

> 이를 비유로 이해해 보자.
>
> - JavaScript 엔진 : 게임을 실행하는 게임 구동기
> - JavaScript 코드 : 실제로 게임 안에서 이루어지는 다양한 동작들

<br>

#### ✨ 특징

- JavaScript 엔진은 대부분의 웹 브라우저에 기본 내장되어 있다.
- 대표적인 브라우저의 JavaScript 엔진
  - Google Chrome : V8 엔진
  - Mozilla Firefox : SpiderMonkey
  - Safari : JavaScriptCore (Nitro)
  - Microsoft Edge : Chakra (이후 Chfomium 기반으로 V8 사용)

<br>

#### 🤔 어떻게 실행하나요?

1. **브라우저 콘솔 사용하기**
   대부분의 브라우저에서 `F12` 또는 `Ctrl` + `Shift` + `I`를 눌러 개발자 도구를 열 수 있다.
2. **예시**
   ```javascript
   console.log("Hello, JavaScript!");
   alert("자바스크립트를 실행했습니다!");
   ```

<br>

#### 🤔 JavaScript는 왜 중요할까?

- **범용성**
  - 웹 개발 뿐 아니라, 서버 개발(Node.js), 게임, 앱 등 다양한 분야에서 사용된다.
- **배우기 쉬움**
  - 초보자도 웹 브라우저만 있으면 바로 실행해볼 수 있다.
- **커뮤니티**
  - 방대한 자료와 커뮤니티 덕분에 문제 해결이 쉽다.

---

## 2. VS Code 설치하기

### 2-1. VS Code란?

> **VS Code(Visual Studio Code)** 는 Microsoft에서 개발한 오픈 소스 코드 편집기이다.
> 개발자들이 효율적으로 작업할 수 있도록 다양한 기능과 확장성을 제공한다.
> [VS Code 공식 웹사이트](https://code.visualstudio.com/)

<br>

### 2-2. VS Code의 특징

#### 📌 경량화된 텍스트 및 코드 편집기

- **빠른 속도와 가벼움**
  큰 프로젝트에서도 부드럽게 동작하며 리소스를 적게 사용한다.
- **다양한 언어 지원**
  JavaScript, Python, C++, HTML/CSS 등 다양한 프로그래밍 언어를 지원한한다.

<br>

#### 📌 강력한 개발 도구

- **IntelliSense**
  코드 자동 완성 및 실시간 문법 오류 검출 기능을 제공한다.
- **디버깅**
  내장된 디버거로 코드를 실행하며 문제를 찾고 해결할 수 있다.
- **Git 통합**
  Git 명령어를 터미널 없이도 실행하며, 변경 사항을 시각적으로 확인할 수 있다.

<br>

#### 📌 확장 가능성

- **확장 프로그램(Extensions)**
  - 필요에 따라 언어나 프레임워크에 맞는 플러그인을 설치할 수 있다.
  - **예시**
    Prettier(코드 포맷터), ESLint(코드 검사기), Live Server(실시간 미리보기) 등
- **테마 커스터마이징**
  코드 편집기의 색상과 레이아웃을 개인 취향에 맞게 설정 가능하다.

<br>

#### 📌 멀티 플랫폼 지원

- Windows, macOS, Linux 등 다양한 운영 체제에서 사용할 수 있다.

<br>

#### 📌 사용자 친화적인 인터페이스

- 직관적인 UI로 초보자도 쉽게 사용할 수 있다.
- 편리한 탭 시스템과 파일 탐색기를 통해 여러 파일을 빠르게 관리 가능하다.

<br>

### 2-3. VS Code의 유용한 플러그인

#### 1️⃣ Prettier

> 코드 포맷터(Formatter)

- 코드 스타일을 자동으로 정리하고 통일시켜준다.
- 괄호, 들여쓰기, 세미콜론 등의 형식을 설정된 규칙에 맞게 자동으로 수정한다.
- 협업 시 일관된 코드 스타일을 유지할 수 있어 유용하다.

<br>

#### 2️⃣ Material Icon Theme

> 파일 및 폴더 아이콘 테마

- 파일 유형에 따라 VS Code 탐색기의 아이콘을 시각적으로 구분한다.
- 프로젝트를 보기 좋게 정리하고, 파일의 역할을 직관적으로 파악할 수 있도록 도와준다.
- 예시 : HTML 파일은 HTML 아이콘, JavaScript는 JS 아이콘 표시

<br>

#### 3️⃣ Error Lens

> 오류와 경고를 코드에 직접 표시

- 오류 메시지나 경고를 에디터의 오른쪽 하단에 표시하는 대신, 코드 줄에 바로 보여준다.
- 문제의 원인을 즉각적으로 확인할 수 있어 디버깅 속도가 향상된다.
- 중요한 오류를 쉽게 놓치지 않게 도와준다.

<br>

#### 4️⃣ Live Server

> 실시간 개발 서버

- HTML, CSS, JavaScript 파일의 변경 사항을 브라우저에 자동으로 반영한다.
- 저장할 때마다 새로고침 없이 변경 내용을 즉시 확인할 수 있다.
- 빠르게 프론트엔드 작업 결과를 미리 볼 수 있어 효율적이다.

<br>

---

## 3. 자바스크립트 실습 환경 설정하기

- 📂 `section01`
  - `chapter03.js`

---