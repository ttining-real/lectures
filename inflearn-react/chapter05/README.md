## chapter 05. 이벤트 핸들링

<br>

#### 🌱 목차

- [x] 1. 이벤트 연결하기
- [x] 2. 이벤트 종류
- [x] 3. Form
- [x] 4. 설문조사 만들기

---

### 1. 이벤트 연결하기

#### 1️⃣ JSX에서 함수 연결

- React에서 이벤트는 특정 동작이 발생했을 때 실행될 함수와 연결된다.
- camelCase 규칙에 따라 `onClick`과 같은 속성을 사용하며, 여기에 이벤트를 처리할 함수를 전달한다.
- 버튼이 클릭되었을 때 `handleClick` 함수가 실행되는 예

  ```javascript
  function MyButton() {
    function handleClick() {
      console.log("버튼 클릭됨!");
    }

    return <button onClick={handleClick}>클릭</button>;
  }
  ```

<br>

#### 2️⃣ HTML과 차이점

HTML과 React에서 이벤트를 설정하는 방식에는 차이가 있다.

- **HTML** : 소문자 `onclick` 속성에 실행할 코드 직접 작성
  ```html
  <button onclick="alert('버튼 클릭')">클릭</button>
  ```
- **React** : camelCase 규칙을 따르는 `onClick` 속성에 함수 참조를 전달

  ```javascript
  function handleClick() {
    alert("버튼 클릭");
  }

  return <button onClick={handleClick}>클릭</button>;
  ```

---

### 2. 이벤트 종류

#### 1️⃣ 마우스와 관련된 이벤트

- `onMouseDown` : 마우스 버튼이 눌렸을 때 발생
- `onMouseUp` : 눌렀던 버튼을 뗐을 때 발생
- `onClick` : 마우스 버튼을 눌렀다 뗄 때 발생 (Down + Up)
- `onMouseEnter` : 특정 요소에 마우스 커서가 들어갔을 때 발생 (이벤트 버블링 없음)
- `onMouseLeave` : 특정 요소에서 마우스 커서가 나갔을 때 발생
- `onMouseMove` : 마우스 커서를 움직이면 발생

<br>

#### 2️⃣ 키보드와 관련된 이벤트

- `onKeyDown` : 키가 눌렸을 때 발생
- `onKeyUp` : 누른 키를 뗐을 때 발생

> `onKeyPress` : 권장하지 않음
> React 17 이후로 `onKeyPress`는 더 이상 사용되지 않으며,
> 대신 `onKeyDown` 또는 `onKeyUp`을 사용하는 것이 권장된다.

<br>

#### 3️⃣ Focus 이벤트

- `onFocus` : 요소가 포커스를 받을 때 발생
- `onBlur` : 요소의 포커스가 사라질 때 발생

<br>

#### 4️⃣ Form 관련 이벤트

- `onChange` : Form 요소(텍스트 입력 박스 등)의 값이 변경되었을 때 발생
- `onInput` : 사용자가 Form 요소에 입력을 시작했을 때 발생
- `onSubmit` : Form이 제출될 때 발생

---

### 3. Form

#### 1️⃣ Controlled Component란?

- Controlled Component는 React 상태(state)에 의해 입력 요소(`<input>`, `<textarea>`, `<select>` 등)의 값이 제어되는 컴포넌트를 의미합니다.
- 상태와 입력 값이 동기화되어 데이터 흐름이 **단방향**으로 유지됩니다.

  ```jsx
  function TextInput() {
    const [text, setText] = useState("");

    return (
      <input
        type='text'
        value={text} // 상태와 동기화
        onChange={(e) => setText(e.target.value)} // 상태 업데이트
      />
    );
  }
  ```

<br>

#### 2️⃣ Controlled Component의 동작 과정

1. **초기 상태 설정**
   - 컴포넌트의 상태를 초기화하고 이를 입력 요소의 `value` 속성에 연결한다.
2. **`onChange` 이벤트 처리**
   - 사용자가 입력 필드에 값을 입력하면 `onChange` 이벤트 핸들러가 호출된다.
   - 이 이벤트 핸들러는 상태 업데이트 함수(`setState`)를 호출하여 입력 값을 React 상태에 반영한다.
3. **상태 업데이트 및 리렌더링**

   - 상태가 업데이트 되면 React가 컴포넌트를 다시 렌더링하여 입력 필드의 `value`를 최신 상태로 유지한다.

4. **예시**

   ```jsx
   import React, { useState } from "react";

   function TextInput() {
     const [text, setText] = useState(""); // 상태 초기화

     const handleChange = (e) => {
       setText(e.target.value); // 상태 업데이트
     };

     return (
       <div>
         <label htmlFor='textInput'>텍스트 입력:</label>
         <input
           id='textInput'
           type='text'
           value={text} // 상태와 연결
           onChange={handleChange} // 상태 업데이트
         />
         <p>입력된 값: {text}</p>
       </div>
     );
   }
   ```

<br>

#### 3️⃣ Controlled Component의 특징

**🟢 장점**

- **신뢰 가능한 단일 출처** : 상태와 입력 값이 동기화되어 일관성을 유지한다.
- **중앙 집중식 관리** : 입력 값을 다른 컴포넌트로 전달하거나 로직에 활용하기 쉽다.
- **유효성 검증 용이** : 입력 값에 대한 검증 로직을 간단히 구현할 수 있다.

<br>

**🟠 단점**

- **성능 문제** : 값 변경 시마다 렌더링이 발생하므로, 성능 최적화가 필요할 수 있다.
- **코드 복잡성** : 입력 필드가 많아질수록 상태 관리와 코드가 복잡해질 수 있다.

<br>

**Controlled Component 🆚 Uncontrolled Component 차이점**

| 특징             | Controlled Component                      | Uncontrolled Component         |
| ---------------- | ----------------------------------------- | ------------------------------ |
| 데이터 관리 주체 | React 상태                                | DOM 자체                       |
| 예시             | `value`와 `onChange`를 사용하여 상태 제어 | `ref`를 사용해 DOM에서 값 읽기 |
| 장점             | 상태와 값 동기화, 유효성 검증 용이        | 간단한 구현, 최소 렌더링       |
| 단점             | 코드 복잡성 증가, 성능 최적화 필요        | 상태와 데이터 흐름 관리 어려움 |

<br>

#### 💫 최적화 팁

- 상태 변경이 빈번한 경우, 상태를 분리하거나 성능 최적화 도구(`React.memo`, `useCallback`)를 활용
- 간단한 입력 필드나 외부 라이브러리를 사용할 때는 Uncontrolled Component를 병행하여 사용

---

### 4. 설문조사 만들기

**📌 요구사항**

- 이름과 사는 곳을 입력 받는 설문조사 폼을 구현해보세요.
- `TextInput`, `Select` 컴포넌트를 생성하고, `formValue` 값과 동기화 합니다.
  (`TextInput` 컴포넌트의 `input`에 값이 입력되면 `formValue.name` 값이 동일하게 변경되도록)
- 만약, 2번 항목에 대해 '한국'이라고 답변한 경우, 2-1번 항목이 노출되도록 합니다.
- 1번, 2번 항목을 모두 입력하지 않은 경우, 저장 버튼을 `disabled` 처리 합니다.
- '저장' 버튼을 클릭하면, '저장되었습니다.' 라는 문구를 띄우고(`alert`) 입력된 폼 내용을 모두 제거합니다.
