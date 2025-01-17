# chapter 11. SurveyPie 컴포넌트 스타일링

#### 🌱 목차

- [x] 1. styled-components
- [x] 2. 질문 유형 별, 컴포넌트 만들기
- [x] 3. 스타일 변수 만들기
- [x] 4. 나머지 컴포넌트 스타일링 하기

---

## 1. styled-components

### 1-1. styled-components란?

- **styled-components**는 CSS-in-JS 라이브러리 중 하나로, 컴포넌트 기반 스타일링을 가능하게 해준다.
- JSX와 함께 사용하면 스타일을 컴포넌트처럼 관리할 수 있으며, 스타일과 논리를 하나의 파일에 통합하여 유지보수성을 높이는 데 도움을 준다.

<br>

#### 📌 주요 특징

1. **CSS와 JavaScript의 통합**  
   JavaScript 코드 내부에서 CSS를 작성하고, 컴포넌트의 **동적 스타일링**을 쉽게 구현할 수 있다.

   ```jsx
   const a = 123;

   const CompletionPageWrapper = styled.div`
     padding: ${a === 123 ? "4em" : "1em"};
   `;
   ```

2. **컴포넌트 기반 스타일링**  
   styled-components는 스타일을 **컴포넌트 단위로 분리**하여 코드를 더욱 직관적으로 관리할 수 있다.

3. **스코프 격리**  
   각 컴포넌트의 스타일은 자동으로 스코프가 격리되므로 스타일 충돌을 방지할 수 있다.

4. **가독성과 유지보수성 향상**  
   HTML 태그 대신 스타일 컴포넌트를 사용하므로, **구조와 스타일의 역할이 명확**해지고 협업 시에도 직관적인 코드 작성이 가능하다.

<br>

#### 📌 설치하기

[공식 웹사이트](https://styled-components.com/docs)

```bash
npm install --save styled-components
pnpm add styled-components
```

<br>

#### 📌 사용 예시

```jsx
import styled from "styled-components";

function CompletionPage() {
  return <CompletionPageWrapper>CompletionPage</CompletionPageWrapper>;
}

const CompletionPageWrapper = styled.div`
  background: aqua;
  padding: 4em;
`;

export default CompletionPage;
```

<br>

---

## 2. 질문 유형 별, 컴포넌트 만들기

- 📂 components/SelectInput
- 📂 components/TextAreaInput
- 📂 components/TextInput

---

## 3. 스타일 변수 만들기

> `Button` 컴포넌트 만들기

<br>

### 3-1. 스타일 변수 관리 방법

#### 📌 CSS 변수

- **장점** : 전역적 관리에 용이, CSS 파일에 바로 적용 가능
- **단점** : 조건부 로직 처리에는 JS Object 방식보다 불편
- **예시**

  ```css
  :root {
    --primary-default-color: #6542f1;
    --primary-hover-color: #9982f4;
  }

  button {
    background-color: var(--primary-default-color);
  }

  button:hover {
    background-color: var(--primary-hover-color);
  }
  ```

<br>

#### 📌 JavaScript `Object`

- **장점** : React와 함께 사용하기에 적합, 조건부 로직 처리 가능
- **단점** : JS 파일에서만 사용 가능
- **예시**

  ```javascript
  const COLOR = {
    PRIMARY: "#6542F1",
    SECONDARY: "#DEDEDE",
  };

  const Button = styled.button`
    background-color: ${COLOR.PRIMARY};
  `;
  ```

<br>

---

### 3-2. 사용 예시

#### 📌 상수 정의

```javascript
export const PRIMARY = {
  BUTTON: {
    DEFAULT: {
      COLOR: "#FFFFFF",
      BACKGROUND: "#6542F1",
    },
    HOVER: {
      COLOR: "#FFFFFF",
      BACKGROUND: "#9982F4",
    },
    PRESSED: {
      COLOR: "#FFFFFF",
      BACKGROUND: "#4B31B0",
    },
    DISABLED: {
      COLOR: "#D0CDCD",
      BACKGROUND: "#EDEDED",
    },
  },
};
```

<br>

#### 📌 `import`

```jsx
import { PRIMARY, SECONDARY, TERTIARY } from "@/constants/color";
```

<br>

#### 1️⃣ 기본 사용

```jsx
const Button = styled.button`
  color: ${PRIMARY.BUTTON.DEFAULT.COLOR};
  background-color: ${PRIMARY.BUTTON.DEFAULT.BACKGROUND};
`;
```

<br>

#### 2️⃣ 함수로 분리

```jsx
function getColor(type1, type2) {
  if (type1 === "PRIMARY") {
    return PRIMARY.BUTTON.DEFAULT.COLOR;
  } else if (type1 === "SECONDARY") {
    return SECONDARY.BUTTON.DEFAULT.COLOR;
  }
}

const Button = styled.button`
  color: ${(props) => {
    return getColor(props.type);
  }};
`;
```

<br>

#### 3️⃣ `map` 메서드 활용

```jsx
const colorMap = {
  PRIMARY, // PRIMARY: PRIMARY 축약
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background-color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
`;
```

---

## 4. 나머지 컴포넌트 스타일링 하기

- 📂 components/ActionButtons
- 📂 components/Body
- 📂 components/Button
- 📂 components/Desc
- 📂 components/QuestionBox
- 📂 components/TextAreaInput
- 📂 components/TextInput
- 📂 components/Title
- 📂 pages/SurveyPage

---
