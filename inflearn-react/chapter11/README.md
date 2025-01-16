# chapter 11. SurveyPie 컴포넌트 스타일링

#### 🌱 목차

- [x] 1. styled-components
- [x] 2. 질문 유형 별, 컴포넌트 만들기
- [x] 3. 스타일 변수 만들기
- [ ] 4. 나머지 컴포넌트 스타일링 하기

---

## 1. styled-components

### 설치하기

[공식 웹사이트](https://styled-components.com/docs)

```bash
npm install --save styled-components
pnpm add styled-components
```

<br>

### 사용 예시

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

### styled components의 장점

1. 자바스크립트 코드와 조합하여 styled components를 동적으로 생성해서 사용할 수 있다.

   ```jsx
   import styled from "styled-components";

   // 글로벌 변수
   const a = 123;

   function CompletionPage() {
     return <CompletionPageWrapper>CompletionPage</CompletionPageWrapper>;
   }

   const CompletionPageWrapper = styled.div`
     background: aqua;
     padding: ${a === 123 ? "4em" : "1em"};
   `;

   export default CompletionPage;
   ```

2. 컴포넌트처럼 태그 형태로 사용하기 때문에 JSX 태그를 봤을 때, 어떤 역할을 하는 애들인지 명확하게 파악할 수 있다.

---

## 2. 질문 유형 별, 컴포넌트 만들기

- 📂 components/TextInput
- 📂 components/TextAreaInput
- 📂 components/SelectInput

---

## 3. 스타일 변수 만들기

> `Button` 컴포넌트 만들기

<br>

### 3-1. `style` 변수 관리하기

#### 📌 CSS 변수로 색상 값 정의하는 방법

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

#### 📌 JavaScript `Object`로 값을 정의하는 방법

```javascript
const COLOR = {
  PRIMARY: "#6542F1",
  SECONDARY: "#DEDEDE",
};

const Button = styled.button`
  background-color: ${COLOR.PRIMARY};
`;
```

#### 📌 어떤 방법이 좋을까?

- 상황에 따라, 서비스 환경에 따라, 취향에 따라 결정
- 중요한 건, 스타일링 할 때, 디자인 관련 값들을 얼마나 효율적으로 관리하고 재사용 용이하도록 만드는지

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

#### 1️⃣ 기본

```jsx
const Button = styled.button`
  color: ${PRIMARY.BUTTON.DEFAULT.COLOR};
  background-color: ${PRIMARY.BUTTON.DEFAULT.BACKGROUND};
`;
```

<br>

#### 2️⃣ 함수 분리

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

#### 3️⃣ `map` 메서드 사용

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

---
