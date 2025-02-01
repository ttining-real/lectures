# chapter 15. Admin 설계

#### 🌱 목차

- [x] 1. 요구사항 분석
- [x] 2. 컴포넌트 구조 설계
- [x] 3. 프로젝트 세팅
- [x] 4. Ant Design 설치
- [ ] 5. 라우터 적용

---

<br>

## 1. 요구사항 분석

<br>
<br>

## 2. 컴포넌트 구조 설계

<br>
<br>

## 3. 프로젝트 세팅

- 프로젝트 설치

  ```bash
  pnpm create vite@latest # react app 설치
  ```

- `.prettierrc.json` 파일 생성 및 작성
  ```json
  {
    "trailingComma": "all",
    "singleQuote": true,
    "tabWidth": 2,
    "semi": true
  }
  ```
- 플러그인 설치
  ```bash
    pnpm add -D eslint-plugin-simple-import-sort # 플러그인 설치
  ```
  - `eslint.config.js` 파일 내용 추가 : `plugins`, `rules`

<br>
<br>

## 4. Ant Design 설치

> **🪄 UI 라이브러리 선택 기준**
>
> - 필요한 컴포넌트 제공 여부
> - 사용 편의성성
> - 디자인 스타일과의 적합성
> - 커스텀 가능 여부
> - 문서화 및 커뮤니티 지원
> - 성능 및 번들 크기
> - 접근성(A11y) 지원 여부
> - 서비스 확장성
> - 다른 라이브러리와의 호환성

### 👨‍🎨 Ant Design이란?

- [Ant Design](https://ant.design/)은 React 기반의 UI 라이브러리로, 기업용(B2B) 애플리케이션을 위한 디자인 시스템을 제공한다.
- 사용하기 쉬운 풍부한 UI 컴포넌트(버튼, 모달, 테이블 등)와 테마 커스터마이징 기능을 제공하여 빠르게 고품질의 UI를 구현할 수 있다.

<br>

### 🕹️ 설치 방법

```bash
# npm으로 설치
npm install antd

# pnpm으로 설치
pnpm add antd
```

<br>

### 🕹️ 기본 사용법

#### 1️⃣ 컴포넌트 임포트 후 사용

설치 후, 필요한 컴포넌트를 가져와 사용할 수 있다.

```jsx
import { Button } from "antd";

const App = () => <Button type='primary'>클릭</Button>;

export default App;
```

<br>

#### 2️⃣ CSS 스타일 적용

> Ant Design의 기본 스타일을 사용하려면 `antd/dist/reset.css` 또는 `antd/dist/antd.css`를 추가해야 한다.

- ✅ 최신 버전(5.x 이상) - reset.css 사용 권장
  ```jsx
  import "antd/dist/reset.css";
  ```
- ✅ 구버전(4.x 이하) - antd.css 사용
  ```jsx
  import "antd/dist/antd.css";
  ```

<br>
<br>

## 5. 라우터 적용

<br>

---
