# 🍰 한입 크기로 잘라 먹는 리액트

```
2024. 08. 30(금)
```

<br>

### 섹션 9. useReducer

- [x] useReducer 소개
- [x] To Do List 업그레이드

**`useReducer`**

- 컴포넌트 내부에 새로운 `State`를 생성하는 React Hook
- `useState`와 달리 상태 관리 코드를 컴포넌트 외부로 분리할 수 있다.
- 모든 `useState`는 `useReducer`로 대체 가능
- `const [state, dispatch] = useReducer(reducer 함수, 초기값);`
- 복잡한 구조의 상태 관리는 `useReducer`로, `counter` 같은 간단한 상태 관리는 `useState`로~
