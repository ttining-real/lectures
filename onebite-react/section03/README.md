# 🍰 한입 크기로 잘라 먹는 리액트

## 섹션 3. Node.js 기초

<br>

### 🌱 목차

- [x] Node.js를 소개합니다.
- [x] Node.js 설치하기
- [x] Node.js 사용하기
- [x] Node.js 모듈 시스템 이해하기
- [x] Node.js 라이브러리 사용하기

<br>

### 1. Node.js를 소개합니다.

#### Node.js란?

- Node.js는 브라우저 환경이 아닌 **서버 환경에서 JavaScript를 실행**할 수 있도록 만든 **JavaScript 런타임**이다.
- Google의 V8 JavaScript 엔진을 기반으로 하며,
  비동기 이벤트 기반, 단일 스레드 아키텍처를 통해 **높은 처리 성능**과 **비동기 처리**를 제공한다.
- Node.js와 npm은 React, Vue, Next.js 등의 프론트엔드 프레임워크와 개발 환경에서 핵심적인 역할을 한다.

<br>

#### Node.js 특징

- **비동기 I/O**
  비동기적으로 파일 시스템, 데이터베이스, 네트워크 요청 등을 처리하여 높은 성능을 제공한다.
- **단일 스레드**
  하나의 스레드에서 이벤트 루프를 통해 작업을 처리한다.
- **확장성**
  경량화된 모듈 시스템을 제공하며, `npm`을 통해 다양한 라이브러리를 쉽게 활용할 수 있다.
- **크로스 플랫폼**
  Windows, macOS, Linux 등 다양한 플랫폼에서 동작한다.

- React.js, Next.js, Vue.js, Svelte 등 Node.js 기반으로 동작한다.
- JavaScript 실행 환경(Run Time) = 구동기

<br>

### 2. Node.js 설치하기

#### 1️⃣ 다운로드

[Node.js 공식 웹 사이트](https://nodejs.org/en)

> - LTS (Long Term Support) : 안정성과 호환성이 중요한 경우 권장되는 버전
> - Current : 최신 기능이 포함된 개발자용 버전

<br>

#### 2️⃣ 설치 후 확인 명령어

```bash
node -v # 설치된 Node.js 버전 확인 (최소 v20 이상 권장)
npm -v # npm 버전 확인
```

<br>

#### 3️⃣ 프로젝트 초기화

```bash
npm init # 프로젝트 초기화 명령어
```

<br>

#### ✅ `npm` (Node Package Manager)

Node.js의 패키지 관리 도구로, 프로젝트에 필요한 **외부 라이브러리를 설치, 관리**할 수 있다.

- 패키지 생성 : `npm init` 명령어를 통해 초기 설정 가능
- 패키지 설치 : `npm install <패키지명>` 명령어로 외부 라이브러리 설치 가능
- 글로벌 설치 : `-g` 옵션을 사용하여 전역에서 사용할 수 있도록 설치

<br>
<br>

### 3. Node.js 사용하기

Node.js는 프로그램의 단위를 **「패키지」** 로 관리하며,  
프로젝트 초기화 및 실행을 통해 Node.js의 기능을 활용할 수 있다.

> 패키지란?
>
> - Node.js에서 사용하는 프로그램 단위를 말한다.
> - 프로젝트의 정보를 포함하고 의존성을 관리하는 핵심 요소이다.

<br>

#### ✅ 사용 예시

1. 프로젝트 초기화
   ```bash
   npm init
   ```
2. 패키지 초기화 시 입력 값
   ```bash
   package name: (section03) # 패키지 이름 설정, 기본값은 디렉토리 이름
   version: (1.0.0) # 초기 버전 설정, 기본값은 1.0.0
   description: # 패키지 설명
   entry point: # 진입점 파일 (기본값: index.js)
   test command: # 테스트 명령어
   git repository: # Git 저장소 URL
   keywords: # 키워드
   author: # 작성자
   license: (ISC) # 라이선스, 기본값은 ISC
   ```
3. 초기화 완료 시 생성되는 파일
   - `package.json`
     - 프로젝트 메타데이터 및 의존성을 관리하는 파일
     - 아래와 같은 정보를 포함한다.
       - 프로젝트 이름
       - 버전
       - 설명
       - 주요 스크립트
       - 의존성 정보 등

<br>

#### ✅ scripts 명령어 사용하기

package.json에 정의된 `scripts`는 실행 명령어를 간편하게 관리할 수 있다.

```json
"scripts": {
  "start": "node src/index.js" // Node.js 실행 명령어 정의
},
```

- `"start"` : `npm run start` 명령어로 실행 가능하다.

<br>

#### ✅ 실행하기

1. 직접 실행
   ```bash
   node src/index.js # Node.js로 파일 실행
   ```
2. `npm` 명령어로 실행
   ```bash
   npm run start # scripts에 등록된 "start" 명령어 실행
   ```

  <br>
  <br>

### 4. Node.js 모듈 시스템 이해하기

Node.js의 모듈 시스템은 코드의 재사용성과 유지보수성을 높이기 위해,  
코드를 모듈 단위로 분리하고 불러와 사용하는 방법을 제공한다.

<br>

#### ✅ 모듈(Module)이란,

- 특정 기능을 수행하는 코드를 모아 놓은 파일 단위의 코드 묶음
- 예시
  - 회원 관리 기능 → `user.js` → `user` 모듈
  - 장바구니 기능 → `cart.js` → `cart` 모듈
  - 결제 기능 → `payment.js` → `payment` 모듈

<br>

#### ✅ JavaScript의 모듈 시스템

Node.js는 다양한 모듈 시스템을 지원한다.

1. **Common JS (CJS)**

   - Node.js에서 기본적으로 사용하는 모듈 시스템
   - Exports: `module.exports`로 외부에 제공
   - Imports: `require`로 모듈 불러오기
   - 예시

     ```javascript
     // math.js
     module.exports = { add, sub };

     // index.js
     const { add, sub } = require("./math");

     console.log(add(1, 2));
     console.log(sub(1, 2));
     ```

2. **ES Module (ESM)**

   - ES6 이후 도입된 표준 모듈 시스템
   - Exports: `export` 키워드 사용
   - Imports: `import` 키워드로 모듈 불러오기
   - `package.json`에서 `"type": "module"`을 설정해야 사용 가능
   - 예시

   ```javascript
   // math.js
   export { add, sub }; // 함수 선언문 앞에 export 키워드를 작성해도 된다.

   // index.js
   import mul, { add, sub } from "./math.js"; // 확장자 명시하기

   console.log(add(1, 2));
   console.log(sub(1, 2));
   console.log(mul(2, 3));
   ```

3. **AMD (Asynchronous Module Definition)**
   - 비동기 로딩을 지원하는 모듈 시스템으로, 브라우저 환경에서 주로 사용된다.
   - 예시: `RequireJS`.
4. **UMD (Universal Module Definition)**
   - CommonJS와 AMD를 모두 지원하는 모듈 시스템으로, 라이브러리 개발에서 활용된다.

<br>

#### ⚠️ ES Module 사용 시 주의사항

- **`package.json`에서 `type` 설정하기**
  ```json
  {
    "type": "module" // type 명시
  }
  ```
- **ESM과 CommonJS를 함께 사용할 수 없다.**
  ESM 프로젝트에서 CommonJS 모듈을 사용할 경우, `import` 대신 `createRequire`를 사용할 수 있다.
  ```javascript
  import { createRequire } from "module";
  const require = createRequire(import.meta.url);
  const user = require("./user"); // CommonJS 모듈 로드
  ```

<br>
<br>

### 5. Node.js 라이브러리 사용하기

#### 라이브러리란?

- 라이브러리는 프로그램 개발에 필요한 다양한 기능을 미리 구현하고 모듈화한 코드 모음이다.
- 개발자는 직접 모든 코드를 작성하지 않고, 라이브러리를 사용하여 시간을 절약하고 효율적으로 개발할 수 있다.

> Node.js 라이브러리는 [npmjs 웹 사이트](https://www.npmjs.com/)에서 쉽게 검색하고 설치할 수 있다.
> (npmjs : 라이브러리계의 백화점과 같은 역할)

<br>

#### Random Color 라이브러리 사용하기

Random Color는 랜덤 색상을 생성하는 간단한 라이브러리이다.

1. 라이브러리 설치
   ```bash
   npm i randomcolor
   ```
2. 설치 후 변경된 파일
   - package.json
     ```json
     {
       "dependencies": {
         "randomcolor": "^0.6.2"
       }
     }
     ```
   - `package-lock.json`
     - 설치된 라이브러리의 버전 및 의존성을 기록한 파일
   - `node_modules`
     - 실제 라이브러리 코드가 설치된 디렉토리
3. 사용하기

   ```javascript
   import randomColor from "randomcolor"; // 라이브러리 이름만 명시

   const color = randomColor(); // 랜덤 색상 생성
   console.log(color); // #0b187a
   ```

<br>

#### ⚠️ `node_modules`와 `package-lock.json`이 삭제되었다면?

1. 프로젝트 실행 시 에러가 발생한다.
2. 하지만, `package.json`의 `dependencies` 목록을 참조해, 다음 명령어로 다시 설치할 수 있다.
   ```bash
   npm install
   npm i
   ```
   이 명령어는 `node_modules`와 `package-lock.json`을 재생성한다.

<br>

#### 💡 `node_modules`를 GitHub에 올리지 않는 이유

- `node_modules`는 용량이 크고 불필요하다.
- 대신, `package.json`과 `package-lock.json`만 업로드하면,
  협업 시 다른 개발자들도 `npm install` 명령어로 동일한 라이브러리를 설치할 수 있다.

---
