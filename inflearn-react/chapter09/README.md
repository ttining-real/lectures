## chapter 09. SurveyPie 설계

#### 🌱 목차

- [x] 1. 요구사항 분석
- [x] 2. 컴포넌트 구조 설계
- [x] 3. 데이터 정의
- [x] 4. 프로젝트 세팅 및 환경설정
- [ ] 5. 기본 컴포넌트 구현

---

### 1. 요구사항 분석

---

### 2. 컴포넌트 구조 설계

---

### 3. 데이터 정의

- 설문조사 데이터
  - 각 질문 데이터, 고유 번호, 생성 날짜
- 질문 데이터
  - 질문 내용, 설명, 필수 여부, 옵션
- 응답 데이터

---

### 4. 프로젝트 세팅 및 환경설정

#### 1️⃣ 프로젝트 생성

```bash
npx create-react-app survey-pie
pnpm dlx create-react-app survey-pie
```

<br>

#### 2️⃣ prettier 설정

- `.prettierrc.json` 파일 생성
  ```json
  {
    "trailingComma": "all",
    "singleQuote": true,
    "tabWidth": 2,
    "semi": true
  }
  ```
- VS Code에 `prettier`가 설치되어 있어야 함.
- [Prettier 설정하기](https://velog.io/@ttining/Config)

<br>

#### 3️⃣ eslint 설정

**`eslint-plugin-simple-import-sort`를 사용해보자.**

1. `eslint-plugin-simple-import-sort`란? [알아보기](https://github.com/lydell/eslint-plugin-simple-import-sort)

- `import` 구문을 정렬 기준에 맞춰서 그 기준에 맞지 않으면 에러를 표시해주는 플러그인

2. **설치 방법**
   ```bash
   npm install --save-dev eslint-plugin-simple-import-sort
   pnpm add -D eslint-plugin-simple-import-sort
   ```
3. `eslint.config.js` 수정하기

   ```json
   plugins: {
     "simple-import-sort": pluginSimpleImportSort,
   },
   rules: {
     "simple-import-sort/imports": "error",
     "simple-import-sort/exports": "error",
   },
   ```

4. VS Code → setting → `code actions` 검색
   **Editor: Code Actions On Save** → Edit in `settings.json` 클릭
   ```json
   "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
   }
   ```

---

### 5. 기본 컴포넌트 구현
