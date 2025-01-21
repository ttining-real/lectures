# chapter 13. SurveyPie API 연동

#### 🌱 목차

- [x] 1. Axios 설치
- [x] 2. Recoil의 `Selector`로 API 연동
- [x] 3. 설문 답변 저장하기

---

<br>

## 1. Axios 설치

[Axios 공식 웹 사이트](https://axios-http.com/kr/docs/intro)

### 1-1. Axios 설치하기

```bash
npm install axios --save

pnpm add axios
```

<br>

### 1-2. Axios 사용하기

```javascript
import axios from "axios";

function Test() {
  axios.get("http://localhost:3000").then((res) => {
    console.log("res", res);
    console.log("data", res.data);
  });
}

export default Test;
```

<br>

### 1-3. 서버 설치하기

```bash
git clone https://github.com/hackurity01/survey-pie-server.git
cd survey-pie-server
pnpm i
npm start run
```

<br>

### 1-4. 실제 서버 주소로 변경하기

```javascript
import axios from "axios";

function Test() {
  axios.get("http://localhost:3001/surveys").then((res) => {
    console.log("data", res.data);
  });
}

export default Test;
```

<br>

---

## 2. Recoil의 `Selector`로 API 연동

### Rerendering

React에서 리렌더링(Rerendering)은 다음과 같은 조건에서 발생한다.

1. **컴포넌트의 상태(state)가 변경될 때**
   - `useState`로 관리되는 상태가 업데이트되면 컴포넌트가 리렌더링된다.
2. **부모 컴포넌트가 리렌더링될 때**
   - 자식 컴포넌트는 부모 컴포넌트가 리렌더링될 때 기본적으로 다시 리렌더링된다.
3. **프로퍼티(`props`)가 변경될 때**
   - 부모 컴포넌트에서 전달된 `props`가 변경되면 자식 컴포넌트가 리렌더링된다.
4. **컨텍스트(`Context`)의 값이 변경될 때**
   - `React.createContext`로 생성한 값이 바뀌면 해당 컨텍스트를 구독하는 모든 컴포넌트가 리렌더링된다.

<br>

### React에서 API 호출 과정

React에서 API 호출은 주로 **`useEffect`** 를 활용하여 컴포넌트가 마운트될 때 수행된다.

1. 기본적인 구조

   ```jsx
   import { useState, useEffect } from "react";
   import axios from "axios";

   function App() {
     const [data, setData] = useState(null);
     const [loading, setLoading] = useState(true); // 로딩 상태
     const [error, setError] = useState(null); // 에러 상태

     useEffect(() => {
       // 데이터 가져오기 함수 정의
       const fetchData = async () => {
         try {
           const response = await axios.get("https://api.example.com/data");
           setData(response.data);
         } catch (err) {
           setError(err.message);
         } finally {
           setLoading(false);
         }
       };

       fetchData();
     }, []); // 빈 배열로 설정하면 컴포넌트 마운트 시 1회만 실행됨

     if (loading) return <p>로딩 중...</p>;
     if (error) return <p>에러: {error}</p>;

     return <div>{JSON.stringify(data)}</div>;
   }

   export default App;
   ```

2. `useEffect`의 의존성 배열
   - `useEffect`의 두 번째 매개변수인 의존성 배열에 특정 값을 추가하면, 해당 값이 변경될 때마다 API 호출이 다시 실행된다.

<br>

### React에서 외부 데이터 관리

```jsx
function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://test.com").then((response) => {
      setData(response.data);
    });
  }, []);

  return <div className='App'>{data}</div>;
}
```

1. **로컬 상태(`State`)로 관리**
   - 위의 예처럼 `useState`를 사용하여 API 데이터를 관리한다.
   - 컴포넌트 단위로 관리되며, 간단한 앱에서 적합하다.
2. **컨텍스트(`Context`)로 관리**
   - 전역 데이터가 필요할 때 `React.createContext`를 사용한다.
   - 예시 : 사용자 인증 정보, 테마 설정 등.
3. **전역 상태 관리 라이브러리**
   - Redux, Zustand, Recoil 등으로 상태를 관리하면 컴포넌트 간 데이터 공유가 더 편리하다.
   - 이 경우, API 데이터를 `store`에 저장하고, 필요한 컴포넌트에서 구독하여 사용한다.

<br>

### 전역 Store에 API 연동

- [Asynchronous Example (비동기 예제)](https://recoiljs.org/ko/docs/guides/asynchronous-data-queries#asynchronous-example-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%98%88%EC%A0%9C)
- [Async Queries Without React Suspense (React Suspense를 사용하지 않은 비동기 쿼리)](https://recoiljs.org/ko/docs/guides/asynchronous-data-queries#async-queries-without-react-suspense-react-suspense%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80-%EC%95%8A%EC%9D%80-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%BF%BC%EB%A6%AC)

<br>

### Axios Config 기본값 설정하기

- [Config 기본값](https://axios-http.com/kr/docs/config_defaults)

---

## 3. 설문 답변 저장하기

<br>

---
