# 🍰 한입 크기로 잘라 먹는 리액트

## 섹션 7. 라이프 사이클

<br>

### 🌱 목차

- [x] 라이프사이클이란?
- [x] `useEffect` 사용하기
- [x] `useEffect`로 라이프사이클 제어하기
- [x] React 개발자 도구 사용하기

<br>
<br>

## 1. 라이프 사이클이란?

> 생애 주기
>
> 모든 리액트 컴포넌트는 라이프 사이클(생애 주기)을 가진다.

<br>

### 📌 Mount → Update → UnMount

#### Mount

> 탄생

- 컴포넌트가 탄생하는 순간
- 화면에 처음 렌더링 되는 순간
- 예시
  "A 컴포넌트가 Mount 되었다." → A 컴포넌트가 화면에 처음으로 렌더링 되었다.
- 서버에서 데이터를 불러오는 작업

<br>

#### Update

> 변화

- 컴포넌트가 다시 렌더링 되는 순간
- 리렌더링 될 때를 의미
- 예시
  "A 컴포넌트가 Update 되었다." → A 컴포넌트가 리렌더링 되었다.
- 어떤 값이 변경되었는지 콘솔에 출력

#### UnMount

> 죽음

- 컴포넌트가 화면에서 사라지는 순간
- 렌더링에서 제외되는 순간을 의미
- 예시
  "A 컴포넌트가 UnMount 되었다." → A 컴포넌트가 화면에서 사라졌다.
- 컴포넌트가 사용하던 메모리 정리 (클린업)

<br>
<br>

## 2. `useEffect`

- 리액트 컴포넌트의 사이드 이펙트를 제어하는 React Hook
  > 사이드 이펙트(Side Effect) : 부수적인, 파생되는 효과

<br>

### 📍 리액트 컴포넌트의 사이드 이펙트

- 컴포넌트의 동작에 따라 파생되는 여러 효과

  | 동작                      | 사이드 이펙트             |
  | ------------------------- | ------------------------- |
  | 컴포넌트 내부의 값 변경   | 콘솔에 변경된 값 출력     |
  | 컴포넌트 마운트           | 콘솔에 `Mount`라고 출력   |
  | 컴포넌트 업데이트(리렌더) | 콘솔에 `Update`라고 출력  |
  | 컴포넌트 언마운트         | 콘솔에 `UnMount`라고 출력 |

- 사용 방법
  ```jsx
  useEffect(() => {}, []);
  ```
  - `() => {}` : 콜백 함수
  - `[]` : 의존성 배열(dependency array, deps)

<br>
<br>

## 3. `useEffect`로 라이프사이클 제어하기

### 1️⃣ 마운트 : 탄생

```jsx
// 컴포넌트가 처음 렌더링 될 때 한 번만 실행
useEffect(() => {
  console.log("mount");
}, []);
```

- 빈 배열 `[]`

<br>

### 2️⃣ 업데이트 : 변화, 리렌더링

```jsx
useEffect(() => {
  console.log("mount");
});
```

- `[]` 생략

<br>

### 3️⃣ 언마운트 : 죽음

```jsx
useEffect(() => {
  // 클린업, 정리 함수
  return () => {
    console.log("UnMount");
  };
}, []);
```

<br>
<br>

## 4. React 개발자 도구 사용하기

> [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)

### 📌 확장 프로그램 관리

- React Developer Tools 스위치 On
- 세부 정보
  - 사용 : 스위치 On
  - 사이트 액세스 : '모든 사이트에서'
  - 파일 URL에 대한 액세스 허용 : 스위치 On
