## chapter 07. React 메모장 만들기

<br>

#### 🌱 목차

- [x] 1. 메모장 프로젝트 소개 및 설계
- [x] 2. 기본 컴포넌트 구현하기
- [x] 3. 메모 수정 기능 및 메모 선택 기능 구현
- [x] 4. 메모 추가 기능 구현
- [ ] 5. 메모 삭제 기능 구현
- [ ] 6. localStorage로 데이터 보관하기

---

### 1. 메모장 프로젝트 소개 및 설계

#### 📌 요구사항

**1️⃣ 설계 및 기본 컴포넌트 구현**

- `좌측 사이드바`
  - 현재 등록된 메모 목록
- `우측 메모 편집 영역`
  - 제목과 내용을 수정할 수 있는 입력 폼

<br>

**2️⃣ 메모 수정 및 선택 기능 구현**

- `좌측 사이드바`
  - 선택한 메모를 우측 편집 영역에서 확인하고 수정할 수 있다.
  - 수정된 내용은 다른 메모로 이동하더라도 보존된다.

<br>

**3️⃣ 메모 추가 기능 구현**

- `좌측 사이드바` → 새로운 메모 추가 시,
  - 초기 제목은 "Untitled"로 설정되며, 내용은 비어있어야 한다.
  - 해당 메모가 자동으로 선택된다.

<br>

**4️⃣ 메모 삭제 기능 구현**

- `좌측 사이드바`
  - 각 메모의 우측에는 해당 메모를 삭제할 수 있는 ❎ 버튼이 있다.
- ❎ 버튼 클릭 시,
  - 해당 메모는 삭제되며, 만약 해당 메모를 선택한 상태라면 가장 첫 번째 메모로 선택이 변경된다.
- 만약 모든 메모가 삭제될 시,
  - 우측 편집 영역에는 제목과 내용 입력 폼 대신,
    "메모가 없습니다. 새로운 메모를 생성해주세요."라는 문구가 출력된다.

<br>

**5️⃣ 메모 저장 기능 구현**

- 브라우저를 닫아도 편집한 메모가 유지된다 (`localStorage`)

---

### 2. 기본 컴포넌트 구현하기

```markdown
Project/
├── src/
│ ├── components/
│ │ ├── MemoContainer.jsx
│ │ ├── MemoLoist.jsx
│ │ ├── SideBar.jsx
│ │ ├── SideBarHeader.jsx
│ │ └── SideBarFooter.jsx
│ ├── App.jsx
│ └── main.jsx
├── public/
└── package.json
```

---

### 3. 메모 수정 기능 및 메모 선택 기능 구현

#### 🕹️ 메모 수정 기능 구현하기

**1️⃣ `input`, `textarea`와 controlled components**

- 입력 폼을 읽기 전용이 되지 않도록 하려면 `onChange` 핸들러를 활용하여 `state` 값을 업데이트해야 한다.

> **⚠️ 주의사항**
>
> - `input`, `textarea` 등의 입력 폼에 `value` 값을 할당해주면 읽기 전용이 된다. (수정 불가)
> - `onChange`를 통해 동기화해야 제대로 동작한다. (controlled components)
>   - 만약 `input`의 `value`가 변한다면, 그 변한 값으로 메모를 다시 설정하기
>   - `state`가 바뀌면서 리렌더링 → 바뀐 내용(`value`)로 화면에 나타남

<br>

**2️⃣ `setMemos`와 배열 참조(reference)**

```jsx
const setMemo = (newMemo) => {
  memos[selectedMemoIndex] = newMemo;

  console.log("memos", memos);

  setMemos([...memos]);
};
```

- `memos[selectedMemoIndex] = newMemo;`는 기존 `memos` 배열 내부의 요소를 직접 수정한다.
- **React의 상태 관리**에서는 **불변성을 유지**해야만 상태 업데이트가 정상적으로 반영된다.
- 위 코드처럼 배열의 요소를 직접 수정하면 기존 `memos` 배열의 참조가 변경되지 않는다.

> ⚠️ React는 상태가 변경되었다고 인식하지 않을 가능성이 있으며,
> 이로 인해 컴포넌트가 리렌더링되지 않을 수 있다.

<br>

**3️⃣ 해결책**

```jsx
const setMemo = (newMemo) => {
  const newMemos = [...memos];

  newMemos[selectedMemoIndex] = newMemo;

  setMemos(newMemos);
};
```

1. **불변성 유지**

   - `const newMemos = [...memos];` : `memos` 배열을 새로운 변수 `newMemos`에 복사하여 원본 배열을 훼손하지 않는다.
   - 이렇게 생성한 `newMemos`에서 필요한 요소만 수정하면 기존 배열의 참조를 유지하면서 새로운 배열을 생성할 수 있다.
   - React는 `setMemos(newMemos)`를 통해 전달된 새로운 배열이 이전 참조와 다르다고 판단해 상태 업데이트를 트리거 한다.
     <br>

2. **Controlled Components**
   - 입력 폼(`input`, `textarea`)에 `value`와 `onChange`를 연결하여 `memo`와 동기화한다.
   - 사용자가 입력한 값이 변경될 때, `handleInputChange`를 호출하여 `memo` 상태를 업데이트한다.
   - 이 과정에서 `setMemo`를 통해 변경된 메모를 업데이트 하고, 화면에 즉시 반영된다.

> **📌 React에서는 모든 입력 필드를 Controlled Component로 만들 것을 권장한다.**
>
> - value 속성을 사용해 state와 동기화하면 입력 필드의 값은 항상 React의 상태에 따라 결정된다.
> - onChange 핸들러를 활용해 입력 값 변경 시 React의 상태를 업데이트하면, UI는 항상 상태와 일치하게 동작한다.

<br>

#### 🕹️ 메모 선택 기능 구현하기

**코드 설명**

**1️⃣ `MemoList` 컴포넌트**

- **역할**
  메모 목록을 렌더링하며, 선택 상태를 관리하고 클릭 이벤트를 처리합니다.
- **주요 기능**
  - `memos` 배열을 순회하며 각 메모를 `MemoItem` 컴포넌트로 렌더링한다.
  - 각 메모에 대해 클릭 이벤트와 선택 여부를 `props`로 전달한다.
    - `onClick` : 해당 메모를 클릭했을 때, `setSelectedMemoIndex`를 호출하여 현재 선택된 메모의 `index`를 업데이트한다.
    - `isSelected` : `index === selectedMemoIndex` 조건을 확인하여 현재 메모가 선택된 상태인지 판단한다.
- **핵심**
  부모 컴포넌트가 선택 상태를 관리하고, 자식 컴포넌트(`MemoItem`)에 상태를 전달하여 UI를 업데이트 한다.

**2️⃣ `MemoItem` 컴포넌트**

- **역할**
- **주요 기능**
  - `onClick` : 부모 컴포넌트에서 전달받은 클릭 이벤트 핸들러를 실행한다.
  - `isSelected` : 선택 여부에 따라 CSS 클래스 `selected`를 추가하여 스타일링을 적용한다.
- **핵심**
  - 상태와 로직을 부모에서 관리하고, UI와 이벤트 처리에만 집중한다.

```jsx
// 메모 리스트 컴포넌트
function MemoList({ memos, setSelectedMemoIndex, selectedMemoIndex }) {
  return (
    <div className='MemoList'>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClick={() => {
            setSelectedMemoIndex(index);
          }}
          isSelected={index === selectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

// 메모 아이템 컴포넌트
function MemoItem({ children, onClick, isSelected }) {
  return (
    <div
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
```

**1️⃣ 관심사의 분리**

- **`MemoList`**
  - 메모 목록과 선택 상태를 관리하는 상태 관리 중심의 컴포넌트
  - 메모의 `index`나 `setSelectedMemoIndex` 등 상태 관련 세부 로직을 처리한다.
- **`MemoItem`**
  - 개별 메모의 UI와 클릭 이벤트를 렌더링한다.
  - 상태 관리 없이 전달받은 `props`만 활용해 렌더링한다.

💫 결과적으로 **컴포넌트 간의 역할을 명확히 분리**하여 코드의 재사용성과 가독성을 높였다.

<br>

**2️⃣ Props Drilling 해결하기**

- `setSelectedMemoIndex`

---

### 4. 메모 추가 기능 구현

**1️⃣ `SideBarFooter` 컴포넌트**

- 컴포넌트 내 `button` 추가
- `onClick` 이벤트 연결

**2️⃣ `SideBar` 컴포넌트**

- `sideBarFooter` 컴포넌트에 `addMemo` 함수 연결

**3️⃣ `App` 컴포넌트**

- `addMemo` 함수 작성
- `SideBar` 컴포넌트에 `addMemo` 전달

---

### 5. 메모 삭제 기능 구현

**✅ 조건문을 사용하여 분기 처리 해보자**

**1️⃣ `deleteMemo` 추가하기**

- ❌

  ```jsx
  const deleteMemo = (index) => {
    memos.splice(index, 1);

    setMemos(memos);
  };
  ```

- ⭕ 불변성 지키기

  ```jsx
  const deleteMemo = (index) => {
    const newMemos = [...memos];

    newMemos.splice(index, 1);

    setMemos(newMemos);
  };
  ```

### 6. localStorage로 데이터 보관하기
