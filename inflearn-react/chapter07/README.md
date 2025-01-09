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

<br>

**📌 관심사의 분리 / Props Drilling**

- **`MemoList`**
  - 메모 목록과 선택 상태를 관리하는 상태 관리 중심의 컴포넌트
  - 메모의 `index`나 `setSelectedMemoIndex` 등 상태 관련 세부 로직을 처리한다.
- **`MemoItem`**
  - 개별 메모의 UI와 클릭 이벤트를 렌더링한다.
  - 상태 관리 없이 전달받은 `props`만 활용해 렌더링한다.

💫 결과적으로 **컴포넌트 간의 역할을 명확히 분리**하여 코드의 재사용성과 가독성을 높였다.

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

**1️⃣ `deleteMemo` 추가하기**

- ❌ 원본 배열을 훼손한다.

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

<br>

**2️⃣ 조건문을 사용하여 분기 처리하기**

- 모든 메모가 삭제됐을 경우, `MemoContainer`에 `undefined`를 넘겨주게 된다.
- 이때, `undefined`로 인해 생기는 에러를 `if` 문을 사용하여 해결해주자.
  ```jsx
  if (memo === undefined) {
    return (
      <div className='MemoContainer'>
        <h2 className='MemoContainer_title'>메모가 없습니다.</h2>
        <p className='MemoContainer_content'>새로운 메모를 추가해주세요.</p>
      </div>
    );
  }
  ```

<br>

**3️⃣ 컴포넌트를 단위로 관리하기**

- 💫 컴포넌트별로 폴더를 구성해 관리하면, 관심사를 분리할 수 있어 유지보수가 더욱 용이하다.
  ```markdown
  Project/
  ├── src/
  │ ├── components/
  │ │ ├── MemoContainer/
  │ │ │ ├── index.jsx
  │ │ │ └── index.css
  │ │ ├── MemoLoist/
  │ │ │ ├── index.jsx
  │ │ │ └── index.css
  │ │ ├── SideBar/
  │ │ │ ├── index.jsx
  │ │ │ └── index.css
  │ │ ├── SideBarHeader/
  │ │ │ ├── index.jsx
  │ │ │ └── index.css
  │ │ ├── SideBarFooter/
  │ │ │ ├── index.jsx
  │ │ │ └── index.css
  │ ├── App.css
  │ ├── App.jsx
  │ ├── main.css
  │ └── main.jsx
  ├── public/
  └── package.json
  ```

---

### 6. localStorage로 데이터 보관하기

#### 💡 Web Storage와 Cookie

브라우저는 클라이언트 측 데이터를 저장하고 관리하기 위해 **Web Storage**와 **Cookie**를 제공한다.  
Web Storage는 네트워크 요청에 데이터를 포함하지 않아 더 효율적이며, 크게 두 가지 종류가 있다.

- Local Storage
- Session Storage

<br>

##### 🍪 Cookie : 서버와의 통신을 위한 데이터 저장소

- **정의** : 서버와의 통신을 위해 네트워크 요청 시 포함되는 문자열 기반 데이터 저장소
- **주요 역할** : 사용자의 활동 정보를 브라우저에 기록한 후 서버로 전달
- **특징**
  - 모든 네트워크 요청마다 쿠키가 포함되어 서버로 전달된다.
  - 세션 아이디, 엑세스 토큰과 같은 사용자 정보를 저장해 서버와 통신할 때 사용된다.
- **단점**
  - 쿠키가 많아지거나, 네트워크 요청 증가 시 비효율적이다.
  - 데이터 용량 제한(4KB) 존재

<br>

##### 📌 Local Storage : 지속 가능한 클라이언트 측 저장소

- **정의** : `key`-`value` 쌍으로 데이터를 저장하고 조회할 수 있는 클라이언트 측 데이터 저장소
- **특징**
  - 서버로 전달되지 않음.
  - 브라우저나 탭을 닫았다 열어도 데이터가 유지됨.
  - 용량 제한: 약 5~10MB
- **사용 예**
  - 사용자 설정 저장 (예: 다크 모드)
  - 즐겨찾기 항목 또는 최근 검색 기록 관리

<br>

##### 📌 Session Storage : 세션 한정 클라이언트 저장소

- **정의** : `key`-`value` 쌍으로 데이터를 저장하고 조회할 수 있는 클라이언트 측 데이터 저장소
- **특징**
  - 서버로 전달되지 않음.
  - 현재 세션(탭)이 유지되는 동안만 데이터 저장
  - 탭을 닫거나 새로 열면 데이터 삭제
- **사용 예**
  - 페이지 이동 중 폼 데이터 임시 저장
  - 단기 상태 관리 (예: 검색 조건 유지)

<br>

#### Cookie 🆚 Local Storage 🆚 Session Storage 비교

| 특성               | Cookie                 | Local Storage          | Session Storage     |
| ------------------ | ---------------------- | ---------------------- | ------------------- |
| 데이터 저장 방식   | 문자열                 | `key`-`value`          | `key`-`value`       |
| 네트워크 포함 여부 | 포함                   | 포함되지 않음          | 포함되지 않음       |
| 데이터 유지 기간   | 만료 설정에 따름       | 영구적                 | 탭 종료 시 삭제     |
| 용량 제한          | 약 4KB                 | 약 5~10MB              | 약 5~10MB           |
| 사용 예            | 세션 아이디, 인증 정보 | 사용자 설정, 최근 기록 | 폼 데이터 임시 저장 |

<br>

#### ⚠️ 보안 관련 주의사항

- **쿠키**: `HttpOnly`와 `Secure` 속성을 설정해 민감한 정보를 보호.
- **Web Storage(Local & Session)**:
  - XSS 공격에 민감하므로 중요한 데이터(예: 비밀번호, 토큰)를 저장하지 않도록 주의.
  - 민감한 정보는 암호화 또는 별도 보안 메커니즘 사용.

#### 💡 Local Storage 사용하기

로컬 스토리지는 `key`-`value` 쌍으로 **문자열 데이터**를 저장하는 브라우저의 클라이언트 측 데이터 저장소이다.

##### 📌 사용 방법

**1️⃣ 데이터 저장 : `localStorage.setItem()`**

로컬 스토리지에 데이터를 저장하려면 `setItem()` 메서드를 사용한다.

- **문자열 데이터 저장**
  ```javascript
  localStorage.setItem("name", "ttining");
  localStorage.setItem("age", "100");
  ```
- **객체 데이터 저장** : 객체 형태의 데이터를 저장하려면, `JSON.stringify()`를 사용하여 문자열로 변환해야 한다.
  ```javascript
  localStorage.setItem("test", JSON.stringify({ test: 123 })); // '{"test": 123}'
  ```
- **🚫 잘못된 예** : `JSON.stringify()`를 사용하지 않으면, 데이터가 [object object]로 저장되어 제대로 활용할 수 없다.
  ```javascript
  localStorage.setItem("test", { test: 123 }); // [object object]
  ```

<br>

**2️⃣ 데이터 읽기 : `localStorage.getItem()`**

저장된 데이터를 읽으려면 `getItem()` 메서드를 사용한다.

- **사용 방법**
  ```javascript
  localStorage.getItem("name"); // 'ttining'
  localStorage.getItem("age"); // '100'
  ```
- **객체 데이터 읽기** : 문자열로 저장된 데이터를 다시 객체로 변환하려면 `JSON.parse()`를 사용한다.
  ```javascript
  const testData = JSON.parse(localStorage.getItem("test"));
  console.log(testData); // {test: 123}
  ```

<br>

**3️⃣ 데이터 삭제 : `localStorage.removeItem()`**

특정 데이터를 삭제하려면 `removeItem()` 메서드를 사용한다.

- **사용 방법**
  ```javascript
  localStorage.removeItem("age");
  localStorage.getItem("age"); // null
  ```

<br>

**4️⃣ 데이터 초기화 : `localStorage.clear()`**

로컬 스토리지의 모든 데이터를 삭제하려면 `clear()` 메서드를 사용한다.

- **사용 방법**
  ```javascript
  localStorage.clear();
  localStorage.getItem("age"); // null
  localStorage.getItem("test"); // null
  ```

<br>

**5️⃣ 데이터 수정**

로컬 스토리지의 데이터를 수정하려면 기존 데이터를 삭제하거나 덮어쓴다.

- **문자열 데이터 수정**
  ```javascript
  localStorage.setItem("name", "newName");
  localStorage.getItem("name"); // 'newName'
  ```
- **객체 데이터 수정**

  1. 기존 데이터를 가져온다.
  2. 수정 후 다시 `setItem()`으로 저장한다.

  ```javascript
  const testData = JSON.parse(localStorage.getItem("test")); // {test: 123}
  testData.test = 456; // 데이터 수정
  localStorage.setItem("test", JSON.stringify(testData));

  const updateData = JSON.parse(localStorage.getItem("test"));
  console.log(updateData); // {test: 456}
  ```

<br>

##### 📌 로컬 스토리지 확인하기

로컬 스토리지에 저장된 데이터를 브라우저에서 직접 확인하는 방법

1. 브라우저에서 개발자 도구 열기
   - Chrome에서는 `F12` 또는 `Ctrl` + `Shift` + `I` (Mac은 `Cmd` + `Option` + `I`)
2. Application 탭으로 이동하기
3. 좌측 메뉴에서 Storage 섹션 아래의 Local Storage 선택하기
4. 해당 도메인에서 저장된 키-값 쌍을 확인할 수 있다.

<br>

#### 👀 성능 관점에서 둘러보기

##### ⚠️ 로컬 스토리지는 편리하지만, 성능에 영향을 줄 수 있는 작업이다.

- `localStorage.setItem()`은 브라우저에서 로컬 스토리지에 데이터를 저장하는 작업으로, 비교적 무거운 작업에 속한다.
- 이유
  - 데이터를 저장할 때, 로컬 스토리지에 접근하고 새 데이터를 기록하는 작업이 반복된다.
  - 예를 들어, 사용자가 입력 필드에 데이터를 빠르게 입력하는 경우,
    - 매 입력마다 setItem이 호출되어 로컬 스토리지에 여러 번 접근하게 된다.
    - 특히, 데이터 양이 많거나 반복 호출이 빈번할 경우, 서비스 전체적인 성능에 영향을 줄 수 있다.

<br>

##### 💫 성능 최적화 : `setItem` 호출 최소화하기

**1️⃣ 디바운스 (Debounce)를 통해 불필요한 호출 줄이기**

디바운스는 여러 번의 로직 실행 중 마지막 호출만 처리하도록 만드는 기법이다.
이렇게 하면 빠르게 반복되는 `setItem` 호출을 줄일 수 있다.

- 디바운스 라이브러리 : [lodash](https://lodash.com/)
- 적용 방법

  ```javascript
  import debounce from "lodash/debounce";

  const debouncedSetItem = debounce(setItem, 300);

  // 호출 예시
  debouncedSetItem("memo", newMemos);
  ```

<br>

**2️⃣ `useCallback`으로 불필요한 함수 생성 방지**

- React에서 컴포넌트가 리렌더링되면, 기존 함수가 다시 생성된다.
- 이로 인해 같은 로직을 반복 생성하거나 실행하면 비효율이 발생할 수 있다.
- `useCallback`으로 최적화

  ```javascript
  import { useCallback } from "react";
  const addMemo = useCallback(() => {
    setMemos((memos) => {
      const now = new Date().getTime();
      const newMemos = [
        ...memos,
        {
          title: "Untitled",
          content: "",
          createAt: now,
          updateAt: now,
        },
      ];

      debouncedSetItem("memo", newMemos);
      return newMemos;
    });

    setSelectedMemoIndex(memos.length);
  }, [memos]);
  ```

- 효과
  - `useCallback`은 함수 재생성을 방지하고, 동일한 함수 인스턴스를 계속 재사용한다.
  - 리렌더링 시, 성능 저하를 줄여준다.
