# Section 01. 타입스크립트 개론

<br>

### 🎯 목차

- [x] 타입스크립트를 소개합니다.
- [x] 자바스크립트의 한계점과 타입스크립트
- [x] 타입스크립트의 동작 원리
- [x] Hello TS World!
- [x] 타입스크립트 컴파일러 옵션 설정하기

<br>

---

<br>

# Hello TS World!

## 🕹️ 설치하기

1. `node.js` 초기화

   ```bash
   npm init
   ```

   - 일단 다 `enter` 키 눌러서 기본 값으로 설정하기

2. `@types/node` 설치
   ```bash
   npm i @types/node
   ```
   - `package.json` 파일에 `dependencies`로 (`@types/node`) 추가됨
3. 타입스크립트 컴파일러 설치
   ```bash
   npm install typescript -g
   ```
   - 컴파일러 명령어 : `tsc`
   - 컴파일러 버전 확인 : `tsc -v`

<br>

## 🕹️ 사용하기

### 1. 컴파일러 사용하기

1. `src/index.ts` 생성
   ```ts
   console.log("Hello TypeScript");
   const a: number = 1;
   ```
2. 컴파일 명령어 입력
   ```bash
   tsc src/index.ts
   ```
   - `src/index.js` 파일이 추가됨
3. 컴파일 된 js 파일 실행
   ```bash
   node src/index.js
   # Hello TypeScript 출력
   ```

<br>

### 2. 컴파일러 + Node.js 사용하기

1. `tsx` 설치
   ```bash
   npm i -g tsx
   ```
2. 실행
   ```bash
   tsx src/index.ts
   # Hello TypeScript 출력
   ```

<br>

---

<br>

# 타입스크립트 컴파일러 옵션 설정하기

> **컴파일러 옵션**
>
> - 얼마나 엄격하게 타입 오류를 검사할 것인가
> - 자바스크립트 코드의 버전은 어떻게 할 것인가
> - ... 등등
> - 컴파일러 옵션은 Node.js 패키지 단위로 설정할 수 있다. (프로젝트 단위)

<br>

### 1. 컴파일러 옵션 파일 자동으로 생성하기

- TSC 도구 사용
- 기본적인 옵션이 자동으로 설정된 `tsconfig.json` 파일을 생성한다.
- 사용 예시

  ```bash
  tsc --init

  # Created a new tsconfig.json with:
  # target: es2016
  # module: commonjs
  # strict: true
  # esModuleInterop: true
  # skipLibCheck: true
  # forceConsistentCasingInFileNames: true
  ```

<br>

### 2. 컴파일 옵션 파일 직접 설정하기

- 필요한 옵션들을 `tsconfig.json` 파일에 직접 설정해보자.

<br>

### `include`

- TSC가 컴파일할 TypeScript 파일들의 범위와 위치를 알려주는 옵션
- `tsconfig.json`
  ```json
  {
    "include": ["src"]
  }
  ```
- `terminal` 명령어
  ```bash
  tsc
  ```
- ✅ 결과
  `src` 디렉토리 하위의 모든 파일을 컴파일한다.

<br>

### `target`

- 컴파일해서 만들어지는 JavaScript 코드의 버전을 설정하는 옵션
- `tsconfig.json`
  ```json
  {
    "compilerOptions": {
      "target": "ES5" // JavaScript의 버전을 ES5로 설정
    }
  }
  ```
  - `compilerOptions` 항목
    - TypeScript를 JavaScript로 변환하는 과정이나, Type 검사 등 아주 상세한 옵션을 설정할 때에는 `compilerOptions` 항목에 설정한다.

<br>

#### 사용 예시 1️⃣ - `"target": "ES5"`

1. `index.ts`
   ```typescript
   const func = () => console.log("Hello");
   ```
2. `terminal` 명령어
   ```bash
   tsc
   ```
3. `index.js`
   ```javascript
   var func = function () {
     return console.log("Hello");
   };
   ```
4. ✅ 결과

   - 현재 설정된 JavaScript 버전은 ES5이다.
   - 화살표 함수는 ES6부터 도입되었기 때문에, 함수 표현식으로 변환되었다.

<br>

#### 사용 예시 2️⃣ - `"target": "ESNext"`

1. `tsconfig.json`
   ```json
   {
     "compilerOptions": {
       "target": "ESNext", // JavaScript의 최신 버전
       "skipLibCheck": true // 타입 정의 파일의 타입 검사를 생략하는 옵션
     }
   }
   ```
2. `index.ts`
   ```typescript
   const func = () => console.log("Hello");
   ```
3. `terminal` 명령어
   ```bash
   tsc
   ```
4. `index.js`
   ```javascript
   const func = () => console.log("Hello");
   ```
5. ✅ 결과

   - 화살표 함수 그대로 변환되었다.

<br>

### `module`

- JavaScript 코드의 모듈 시스템을 설정하는 옵션
- `tsconfig.json`
  ```json
  {
    "compilerOptions": {
      "module": "CommonJS"
    }
  }
  ```

<br>

#### 사용 예시 1️⃣ - `"module": "CommonJS"`

1. `hello.ts`
   ```typescript
   export const hello = () => {
     console.log("hello");
   };
   ```
2. `index.ts`

   ```typescript
   import { hello } from "./hello";

   hello();
   ```

3. `terminal` 명령어
   ```bash
   tsc
   ```
4. `hello.js`
   ```javascript
   "use strict";
   Object.defineProperty(exports, "__esModule", { value: true });
   exports.hello = void 0;
   const hello = () => {
     console.log("hello");
   };
   exports.hello = hello;
   ```
5. `index.js`
   ```javascript
   "use strict";
   Object.defineProperty(exports, "__esModule", { value: true });
   const hello_1 = require("./hello");
   (0, hello_1.hello)();
   ```
6. ✅ 결과

   - CommonJS의 모듈 시스템으로 변환되었다.

<br>

#### 사용 예시 2️⃣ - `"module": "ESNext"`

1. `hello.ts`
   ```typescript
   export const hello = () => {
     console.log("hello");
   };
   ```
2. `index.ts`

   ```typescript
   import { hello } from "./hello";

   hello();
   ```

3. `terminal` 명령어
   ```bash
   tsc
   ```
4. `hello.js`
   ```javascript
   export const hello = () => {
     console.log("hello");
   };
   ```
5. `index.js`
   ```javascript
   import { hello } from "./hello";
   hello();
   ```
6. ✅ 결과

   - ES Module 모듈 시스템으로 변환되었다.

<br>

### `outDir`

- 컴파일 된 파일이 어디에 위치할지 정하는 옵션
- `tsconfig.json`
  ```json
  {
    "compilerOptions": {
      "outDir": "dist"
    }
  }
  ```
  - 컴파일 결과가 `dist` 디렉토리에 생성된다.

<br>

### `strict`

- 컴파일러가 타입 검사 시, 얼마나 엄격하게 검사할지 결정하는 옵션
- `tsconfig.json`
  ```json
  {
    "compilerOptions": {
      "strict": true
    }
  }
  ```
  - TypeScript에서는 매개변수들의 타입을 프로그래머가 직접 지정하는 것을 권장한다.

<br>

#### 사용 예시 - `"strict": true`

1. `hello.ts`

   ```typescript
   export const hello = (message) => {
     console.log("hello" + message);
   };
   ```

   - **⚠️ 오류 발생**
     - 추론이 되지 않는 변수의 타입을 명시하지 않으면 `Strict` 모드로 인해 오류가 발생한다.

2. 동일한 이름의 변수 사용 ❌
   ```typescript
   // hello.tsx
   const a = 1; // Cannot redeclare block-scoped variable 'a'.
   ```
   ```typescript
   // index.tsx
   const a = 1; // Cannot redeclare block-scoped variable 'a'.
   ```
   - 타입스크립트는 모든 파일을 전역 모듈로 본다.
3. 동일한 이름의 변수 사용 ⭕
   ```typescript
   // hello.tsx
   const a = 1;
   export {};
   ```
   ```typescript
   // index.tsx
   const a = 1;
   export {};
   ```
   - `export`나 `import` 키워드를 작성하면 해당 파일을 독립된 모듈로 본다.
   - 또 다른 방법은 아래(`moduleDetection`)를 참고하기

<br>

### `moduleDetection`

- 모듈 시스템 코드를 자동으로 추가해주는 옵션

<br>

#### 사용 예시 - `"moduleDetection": "force"`

- 동일한 이름의 변수 사용 ⭕

  ```json
  // tsconfig.json
  {
    "compilerOptions": {
      "moduleDetection": "force" // export {}(모듈 시스템 코드)를 자동으로 추가해준다.
    }
  }
  ```

  - 조금 기다려보면 에러가 사라진다.
  - 에러가 사라지지 않는다면? `Ctrl` + `Shift` + `P` → `restart` → TypeScript: TS 서버 다시 시작

<br>

---
