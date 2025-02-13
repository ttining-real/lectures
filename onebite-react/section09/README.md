# 🍰 한입 크기로 잘라 먹는 리액트

## 섹션 9. useReducer

<br>

### 🌱 목차

- [x] `useReducer`를 소개합니다
- [x] 투두리스트 업그레이드

<br>
<br>

## 1. `useReducer`를 소개합니다

<br>

### 📍 `useReducer`

- 컴포넌트 내부에 새로운 `State`를 생성하는 React Hook
- 모든 `useState`는 `useReducer`로 대체 가능하다.

<br>

### 📍 `useState`와의 차이점

- 상태 관리 코드를 컴포넌트 외부로 분리할 수 있다.

<br>

#### 1️⃣ `useState` 사용 예시

```jsx
function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };
}
```

- 컴포넌트 내부에 상태 관리 코드를 작성해야 한다.

<br>

#### 2️⃣ `useReducer` 사용 예시

```jsx
function reducer() {
  // ...
}

function App() {
  const [todos, dispatch] = useReducer(reducer);

  // ...
}
```

- 컴포넌트 외부에 상태 관리 코드를 분리할 수 있다.

<br>

### 📍 `useReducer` 예제

```jsx
import { useReducer } from "react";

// reducer : 변환기
// → 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  console.log(state, action); // 0 {typs: 'INCREASE', data: 1}

  // if (action.type === "INCREASE") {
  //   return state + action.data;
  // } else if (action.type === "DECREASE") {
  //   return state - action.data;
  // }

  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      state;
  }
}

const Exam = () => {
  // dispatch : 발송하다, 급송하다
  // → 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    // → 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
```

- `const [state, dispatch] = useReducer(reducer 함수, 초기값);`
- ✨ 복잡한 구조의 상태 관리는 `useReducer`로,
  `counter` 같은 간단한 상태 관리는 `useState`로 하면 된다.

<br>
<br>

## 2. 투두리스트 업그레이드
