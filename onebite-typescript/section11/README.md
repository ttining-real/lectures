# Section 11. 리액트와 타입스크립트

<br>

### 🎯 목차

- [x] 타입스크립트 리액트 시작하기
- [x] 상태 관리와 `Props` 1️⃣
- [x] 상태 관리와 `Props` 2️⃣
- [ ] Context API
- [ ] 외부 라이브러리 사용하기
- [ ] 타입스크립트 템플릿 소개

<br>

---

<br>

# 1. 타입스크립트 리액트 시작하기

## 1-1. React App 생성

### 1️⃣ 리액트 앱 생성 (CRA 사용)

> 현재는 Vite를 사용하여 리액트 앱을 생성하는 것을 권장한다.

```bash
npx create-react-app .
```

- `.` : 새로운 폴더를 생성하지 않고 현재 폴더에 리액트 앱 생성

<br>

### 2️⃣ 불필요한 파일 제거

- `src/app.test.js`
- `src/reportWebVitals.js`
- `src/setupTests.js`
- `logo.svg`

<br>

### 3️⃣ `index`, `app` 파일 수정

#### `index.js` 수정

- `import reportWebVitals from './reportWebVitals';` 제거
- 주석 제거
- `reportWebVitals();` 제거

#### `app.js` 수정

- `import logo from './logo.svg';` 제거
- `return` 문 내부 제거

  ```javascript
  import "./App.css";

  function App() {
    return <div className='App'></div>;
  }

  export default App;
  ```

<br>

## 1-2. React App에 TypeScript 적용하기

### 1️⃣ 타입 선언 패키지 추가

```bash
npm i @types/node @types/react @types/react-dom @types/jest
```

- `package.json` 파일 내 `dependencies`에 `@types/` 항목들이 생김
- `node_modules/@types` 폴더 생성

<br>

### 2️⃣ 컴파일러 옵션 설정

프로젝트의 `root` 위치에 `tsconfig.json` 파일 생성

```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "strict": true,
    "allowJs": true
  },
  "include": ["src"]
}
```

<br>

#### 오류 1.

```jsx
🚫 No inputs were found in config file '파일위치'. Specified 'include' paths were '["**/*"]' and 'exclude' paths were '[]'
```

- 💡 `include` 옵션 필요

<br>

#### 오류 2.

```jsx
🚫 Cannot write file '경로/App.js'. because it would overwrite input file.
```

- 💡 `js` 확장자 → `jsx`로 변경

  - `app.js`와 `index.js` 파일에서 `jsx` 문법을 사용 중이다.
  - 그러나 TypeScript는 `js` 확장자 파일로부터 `jsx` 문법을 해석할 수 없다.

- ❓ `jsx` 파일을 `tsx`로 바꾸지 않았는데?
  - `allowJS` 옵션을 `true`로 설정해놨기 때문에 문제가 되지 않고 있다.

<br>

### 3️⃣ 타입 검사 수행

`JSX` 확장자 → 타입스크립트 파일로 변경 → 타입 검사 수행

> - 모든 파일을 한번에 TypeScript 파일로 바꿔도 되긴 하지만,
>   동시에 많은 오류를 해결해야 한다.
> - JavaScript 프로젝트를 TypeScript로 변경할 때에는,
>   파일별로 하나씩 변경하는 게 훨씬 유리하다.

<br>

#### 파일 확장자 변경

- `index.jsx` → `index.tsx`
- `App.jsx` → `App.tsx`

<br>

#### `import` 문 오류 해결

```tsx
🚫 'react', 'react-dom/client'에는 기본 내보내기가 없습니다.
```

- 해당 파일 확인
  - `export default`가 아닌 일반 `export` 사용
- 💡 오류 해결
  - `tsconfig.json` 파일 내 `compilerOptions` 추가하기
    ```json
    "esModuleInterop": true
    ```
    `esModuleInterop` : 디폴트로 내보낸 값이 없는 모듈에서도 값을 불러올 수 있도록 허용해주는 옵션

<br>

#### JSX 문법 오류 해결

```tsx
🚫 '--jsx' 플래그를 제공하지 않으면 JSX를 사용할 수 없습니다.
```

- TypeScript 컴파일러는 기본적으로 JSX 문법을 해석할 수 없기 때문에
  옵션을 추가하여 해석할 수 있도록 해야 한다.
- 💡 오류 해결
  - `tsconfig.json` 파일 내 `compilerOptions` 추가하기
    ```json
    "jsx": "react-jsx"
    ```

#### `document.getElementById("root")` 오류 해결

```tsx
🚫 'HTMLElement | null' 형식의 인수는 'Element | DocumentFragment' 형식의 매개 변수에 할당될 수 없습니다.
🚫 'null' 형식은 'Element | DocumentFragment' 형식에 할당될 수 없습니다.
```

- `document.getElementById` 함수의 반환 값 타입이 `HTMLElement` 이거나 `null` 타입일 수 있다.
- 그런데, `createRoot` 메서드는 `null` 타입의 값을 인수로 받지 않기 때문에 오류가 발생하는 것이다.
- 💡 오류 해결

  - `index.tsx` 파일 내 `createRoot` 함수 수정하기

    ```tsx
    const root = ReactDOM.createRoot(
      document.getElementById("root") as HTMLElement
    );
    ```

<br>

> 💡 자바스크립트 프로젝트를 타입스크립트로 마이그레이션 하는 과정
>
> - 하나의 파일을 타입스크립트 파일로 변경
> - 그 파일 내에 존재하는 타입 오류를 순서대로 해결

<br>

<br>
<br>

# 2. 상태 관리와 `Props` 1️⃣

## 2-1. 이벤트 핸들러 타입 정의

```tsx
function App() {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <input type='text' value={text} onChange={onChangeInput} />
    </div>
  );
}
```

### `useState` 타입 정의

- `useState`에 `useState<string>`과 같이 타입을 정의하게 되면,
  `text: string | undefined`가 되기 때문에,
  `useState`의 초기값에 값을 전달하는 것이 좋다. `useState('')`

<br>

### 이벤트 핸들러 `e` 객체의 타입 정의

- `any` 타입을 정의하는 것은 좋지 않다.
- `e: { target: { value: string } }`과 같이 정의하는 것은 위험한 방식이다.
- 처음 `input`에 전달했던 이벤트 핸들러의 `e` 객체를 보면
  `(parameter) e: React.ChangeEvent<HTMLInputElement>`라는 타입이 나온다.
  해당 타입으로 정의하는 것이 좋다.
  ```tsx
  onChange={(e) => {
    setText(e.target.value);
  }}
  ```

<br>

## 2-2. `Props`와 `Children`

> `App.tsx`에서 `Editor.tsx`로 `Props`와 `Children`을 전달하는 방법

### `App.tsx`

```tsx
return (
  <div className='App'>
    <h1>Todo List</h1>
    <Editor onClickAdd={onClickAdd}>
      <div>children</div>
    </Editor>
  </div>
);
```

### `Editor.tsx`

```tsx
interface Props {
  onClickAdd: (text: string) => void;
  children: ReactElement;
}

export default function Editor(props: Props) {}
```

- `interface Props` : `Props`의 타입을 별도로 정의해주어야 한다.
- `ReactElement` : React가 기본적으로 제공하는 타입

<br>
<br>

# 3. 상태 관리와 `Props` 2️⃣

## 3-1. `todos` 리스트 렌더링

```tsx
<div>
  {todos.map((todo) => (
    <div key={todo.id}>{todo.content}</div>
  ))}
</div>
```

<br>

### 1️⃣ `todo` 아이템 컴포넌트

> Todo 아이템을 별도의 컴포넌트로 분리하기

```tsx
interface Props {
  id: number;
  content: string;
}

export default function TodoItem() {
  return <div></div>;
}
```

- 이때, `Props` 타입 정의는 이미 `App` 컴포넌트에서 정의해두었기 때문에, 중복 코드가 된다.
  - 수정이 필요한 경우, 문제가 생길 수 있다. (두 군데에서 수정)
- 여러 컴포넌트에 공통으로 사용되는 타입을 유지해야 되는 경우,
  별도의 타입스크립트 파일을 만들어서 분리하는 것이 좋다.

<br>

### 2️⃣ 타입 분리

### `src/types.ts`

```tsx
export interface Todo {
  id: number;
  content: string;
}
```

- 타입 별칭이나 `interface`로 만든 타입들도 `export` 키워드로 내보낼 수 있다.

<br>

### `TodoItem.tsx`

```tsx
import { Todo } from "./types";

interface Props extends Todo {
  extra: string;
}

export default function TodoItem(props: Props) {
  return <div></div>;
}
```

<br>

## 3-2. 리스트 아이템 개별 삭제 기능

- `onClickDelete` 함수 전달

#### `App.tsx`

```tsx
const onClickDelete = (id: number) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

return (
  <div className='App'>
    <h1>Todo List</h1>
    <Editor onClickAdd={onClickAdd} />
    <div>
      {todos.map((todo) => (
        // <div key={todo.id}>{todo.content}</div>
        <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete} />
      ))}
    </div>
  </div>
);
```

<br>

#### `TodoItem.tsx`

```tsx
interface Props extends Todo {
  onClickDelete: (id: number) => void;
}

export default function TodoItem(props: Props) {
  const onClickButton = () => {
    props.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
```

<br>

## 3-3. `useReducer`로 업그레이드

```tsx
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
}
```

- `App.tsx`에서 `useState`를 사용한 코드를 `useReducer`로 업그레이드해보자.

<br>

### `useReducer`

```tsx
useRecuder(첫 번째 인수, 두 번째 인수)
```

- 첫 번째 인수 : 상태 변화를 직접 처리하는 `reducer` 함수
- 두 번째 인수 : 초기값

<br>

```tsx
function reducer() {}

function App() {
  // - Todo 아이템을 보관할 State
  const [todos, dispatch] = useReducer(reducer, []);
}
```

<br>

### `onClickAdd`

> `setTodos` → `dispatch`로 변경하기

```tsx
const onClickAdd = (text: string) => {
  setTodos([
    ...todos,
    {
      id: idRef.current++,
      content: text,
    },
  ]);
};
```

```tsx
const onClickAdd = (text: string) => {
  dispatch({
    type: "CREATE",
    data: {
      id: idRef.current++,
      content: text,
    },
  });
};
```

<br>

### `onClickDelete`

> `setTodos` → `dispatch`로 변경하기

```tsx
const onClickDelete = (id: number) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};
```

```tsx
const onClickDelete = (id: number) => {
  dispatch({
    type: "DELETE",
    id: id,
  });
};
```

<br>

### `reducer` 함수

```tsx
// 타입 별칭으로 Action 타입 정의
type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: "DELETE";
      id: number;
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id);
    }
  }
}
```

- 매개변수로 `state`와 `action` 객체를 받는다.
- `Action` 타입 : 유니온 타입으로 `CREATE` 객체와 `DELETE` 객체 정의

<br>

> 타입스크립트에서 `useReducer`를 사용할 때,
>
> `Action` 객체 타입을 서로소 유니온 타입으로 정의하기 때문에
>
> `dispatch`를 호출할 때 일어나는 실수들을 최대한 방지할 수 있다.

<br>
<br>

# 4. Context API

<br>
<br>

# 5. 외부 라이브러리 사용하기

<br>
<br>

# 6. 타입스크립트 템플릿 소개

<br>
<br>
