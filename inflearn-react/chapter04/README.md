# chapter 04. LifeCycle과 Hooks

<br>

#### 🌱 목차

- [x] 1. Hooks 종류
- [x] 2. React 렌더링 과정
- [x] 3. 아코디언 컴포넌트 만들기

---

## 1. Hooks 종류

- `useState`
- `useEffect`
- `useCallback`
- `useMemo`, `useContext`, `useRef`, `useLayoutEffect` 등

<br>

### 1-1. `useState`

- 상태(state)를 관리하기 위한 Hook으로, 함수형 컴포넌트에서 상태를 선언하고 업데이트할 수 있다.
- 사용법

  ```javascript
  const [state, setState] = useState(initialValue);
  ```

- `state` : 상태 값
- `setState` : 상태를 업데이트하는 함수
- `initialValue` : 초기 상태 값

<br>

### 1-2. `useEffect`

- 컴포넌트가 렌더링된 이후 실행되는 사이드 이펙트를 처리하는 Hook이다.
- 사용법
  ```javascript
  const [state, setState] = useState(initialValue);
  ```
- `effectFunction` : 실행될 함수.
- `dependencyArray` : 의존성 배열. 특정 값이 변경될 때만 `effectFunction`이 실행된다. 빈 배열(`[]`)을 전달하면 마운트 시 한 번만 실행된다.

<br>

### 1-3. `useCallback`

- 메모이제이션된 콜백 함수를 반환하여, 동일한 의존성을 가진 함수가 재생성되지 않도록 방지하는 Hook이다.
- 사용법
  ```javascript
  const memoizedCallback = useCallback(callbackFunction, [dependencyArray]);
  ```
  - `callbackFunction` : 메모이제이션할 함수.
  - `dependencyArray` : 의존성 배열. 이 값이 변경될 때만 `callbackFunction`이 재생성된다.

---

## 2. React 렌더링 과정

- React는 상태(State) 또는 Props가 변경되면 해당 컴포넌트를 다시 평가하고 화면을 업데이트 한다.

<br>

### 2-1. React의 라이프 사이클💫

#### 1️⃣ 클래스형 컴포넌트

- 마운트 : 컴포넌트가 처음 생성되어 화면에 추가되는 과정
- 업데이트: 상태 또는 Props 변경 시
  - 순서: `getDerivedStateFromProps` → `shouldComponentUpdate` (렌더링 여부 결정) → `render` → `componentDidUpdate`
- 언마운트: 컴포넌트가 화면에서 제거되는 과정
  - `componentWillUnmount` 실행

<br>

#### 2️⃣ 함수형 컴포넌트

- 마운트:
  - 컴포넌트가 호출되어 JSX를 반환하고 DOM에 반영
  - 이후 `useEffect` Hook 실행 (`componentDidMount`와 유사)
- 업데이트:
  - 상태나 Props 변경 시 컴포넌트를 다시 평가하고 DOM에 반영
  - 이후 `useEffect` 재실행 (`componentDidUpdate`와 유사)
- 언마운트:
  - `useEffect`의 클린업 함수 실행 (`componentWillUnmount`와 유사)

<br>

### 2-2. ⚠️ Hooks 사용 시 주의사항 ⚠️

#### 1️⃣ 조건적으로 사용 금지

- Hook은 호출 순서가 보장되어야 하므로 조건문 안에서 호출하면 React의 내부 규칙이 깨질 수 있다.
- ❌ 예시
  ```javascript
  if (someCondition) {
    useState(); // 조건문 안에서 사용하면 안 됩니다.
  }
  ```

<br>

#### 2️⃣ Hooks는 React 컴포넌트에서만 사용 가능

- 일반 JavaScript 함수에서 사용하면 오류 발생
- ✅ 올바른 예
  ```javascript
  function MyComponent() {
    const [count, setCount] = useState(0);
    return <div>{count}</div>;
  }
  ```

---

## 3. 아코디언 컴포넌트 만들기

### 📌 요구사항

- 펼쳤다 접었다 할 수 있는 아코디언 컴포넌트를 구현하세요.
- 아코디언 콘텐츠가 펼쳐져 있을 때는 상단 오른쪽에 `-` 문자가, 접혀있을 때는 `+` 문자가 표시됩니다.
