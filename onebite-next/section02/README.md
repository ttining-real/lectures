# Section 2. Page Router 핵심 정리

<br>

### 🎯 목차

- [x] Page Router를 소개합니다
- [x] 페이지 라우팅 설정하기
- [x] 네비게이팅
- [x] 프리페칭
- [x] API Routes
- [x] 스타일링
- [x] 글로벌 레이아웃 설정하기
- [x] 페이지별 레이아웃 설정하기
- [x] 한입 북스 UI 구현하기
- [x] 사전 렌더링과 데이터 페칭
- [x] SSR 1. 소개 및 실습
- [x] SSR 2. 실습
- [x] SSG 1. 소개
- [ ] SSG 2. 정적 경로에 적용하기
- [ ] SSG 3. 동적 경로에 적용하기
- [ ] SSG 4. 폴백 옵션 설정하기
- [ ] ISR 1. 소개 및 실습
- [ ] ISR 2. 주문형 재검증
- [ ] SEO 설정하기
- [ ] 배포하기
- [ ] 페이지 라우터 정리

<br>

---

<br>

# 1. Page Router를 소개합니다

<br>
<br>

# 2. 페이지 라우팅 설정하기

## 1️⃣ Query String

- 페이지 경로에 영향을 주는 것이 아니기 때문에 pages 폴더 내에서는 별도의 설정을 하지 않아도 된다.
- 대신, 컴포넌트 내부에서 쿼리 스트링의 값을 읽어오기 위해 `useRouter` 훅을 사용하여 `router.query` 프로퍼티를 통해 불러와야 한다.

### ✍️ 예시

```tsx
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const { q } = router.query;

  return <h1>Search {q} </h1>;
}
```

#### `next/router`와 `next/navigation`의 차이

- `next/router` : Page Router에서 사용
- `next/navigation` : App Router에서 사용

<br>

## 2️⃣ URL Parameter

- `book/10` … `book/100`과 같이 가변적인 값들을 **URL Parameter**라고 부른다.
- 이와 같이 URL Parameter 경로의 페이지를 만들고 싶다면, `pages/{폴더명}` 폴더 하위에 `[id].tsx` 파일을 생성하면 된다.

### ✍️ 예시

```tsx
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const { id } = router.query;

  return <h1>Book {id}</h1>;
}
```

<br>
## 3️⃣ Catch All Segment

- `book/123` 경로가 아닌, `book/123/123` 처럼 `id`가 연속으로 나오는 페이지를 만들고 싶다면 **Catch All Segment**를 사용할 수 있다.
- 이는 파일명을 `[id].tsx`가 아닌, `[...id].tsx`로 만들어주면 된다.

<br>

## 4️⃣ Optional Catch All Segment

- Catch All Segment로 대응할 수 없는 경로가 있다. 바로 `/book` 경로이다.
- `book` 폴더 하위에 `index.tsx` 파일을 생성해주면 해결된다.
- 그러나 `index` 파일을 만들지 않고 `[...id]` 파일을 범용적으로 사용하고 싶다면,
  파일명을 `[[...id]]`로 변경해주면 된다.
- `[[...id]]`와 같이 설정된 파일을 **Optional Catch All Segment**라고 한다.

<br>

## 5️⃣ Not Found

- `pages` 폴더 하위에 `404.tsx` 파일을 생성하면 된다.

### ✍️ 예시

```tsx
export default function Page() {
  return <div>존재하지 않는 페이지입니다.</div>;
}
```

<br>
<br>

# 3. 네비게이팅

- `<a>` : 클라이언트 사이드 렌더링 방식이 아닌, 매번 새로운 페이지를 요청하는 방식으로 상당히 느리다.
- Next App에서는 자체적으로 제공하는 `<Link>` 컴포넌트를 이용하는 것이 좋다.
- `<Link>` 컴포넌트는 `href`가 필수 속성이다.

<br>

## 1️⃣ 프로그래매틱한 페이지 이동 (Programmatic Navigation)

특정 버튼이 클릭되었거나, 특정 조건을 만족시켰을 때 페이지가 이동하는 것을 말한다.

- 버튼이 클릭 되었을 때 실행될 이벤트 핸들러
- `useRouter` 훅 사용 (클라이언트 사이드 방식)

```tsx
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    // 클라이언트 사이드 방식 페이지 이동
    router.push("/test");
  };
  return (
    <>
      <button onClick={onClickButton}>/test 페이지</button>
    </>
  );
}
```

- `router.push()` : 인수로 전달 받은 경로로 페이지를 이동시킨다.
- `router.replace()` : 뒤로 가기를 방지하며 페이지를 이동시킨다.
- `router.back()` : 페이지를 뒤로 이동시킨다.

<br>
<br>

# 4. 프리페칭

> Pre-Fetching : 사전이, 미리 불러온다

빠른 페이지 이동을 위해 제공되는 기능이다.

<br>
<br>

# 5. API Routes

Next.js에서 API를 구축할 수 있게 해주는 기능

<br>
<br>

# 6. 스타일링

- 글로벌 CSS 파일은 App 컴포넌트가 아닌 곳에서는 불러올 수 없다.
- module.css 사용하기

<br>
<br>

# 7. 글로벌 레이아웃 설정하기

<br>
<br>

# 8. 페이지별 레이아웃 설정하기

- index 페이지 : 검색바 ⭕
- 검색 페이지 : 검색바 ⭕
- books 페이지 : 검색바 ❌
- 검색바가 필요한 페이지에 `getLayout` 메서드 추가

<br>
<br>

# 9. 한입 북스 UI 구현하기

- mockData.json 생성
- index, 검색, books 페이지 UI 구현

<br>
<br>

# 10. 사전 렌더링과 데이터 페칭

## 1️⃣ 서버 사이드 렌더링 (SSR)

- 페이지 요청 시마다 서버에서 HTML을 생성하여 응답하는 방식
- `getServerSideProps()` 함수를 사용
- 매 요청마다 최신 데이터를 가져와야 하는 경우 유용 (예: 로그인한 사용자 정보, 실시간 데이터)
- ⚠️ 단점 : 매번 서버 요청이 발생하므로 속도가 느릴 수 있음

```tsx
export async function getServerSideProps(context) {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return { props: { data } };
}
```

<br>

## 2️⃣ 정적 사이트 생성 (SSG)

- 빌드 시 HTML을 미리 생성하여 정적 파일로 제공하는 방식
- `getStaticProps()`를 사용하여 데이터를 빌드 시점에 가져옴
- 변경되지 않는 콘텐츠(블로그 글, 문서 등)에 적합
- ✅ 장점: 페이지 로딩 속도가 빠름
- ⚠️ 단점: 데이터가 변경되면 다시 빌드해야 함

```tsx
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return { props: { data } };
}
```

<br>

## 3️⃣ 증분 정적 재생성 (ISR)

- SSG와 비슷하지만, 지정된 시간마다 정적 페이지를 다시 생성할 수 있음
- `getStaticProps()`에서 `revalidate` 옵션을 사용
- ✅ 장점: 빠른 로딩 속도 유지하면서 데이터 업데이트 가능
- ⚠️ 단점: 특정 시간이 지나야 새로운 데이터가 반영됨

```tsx
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60, // 60초마다 새로운 데이터를 가져옴
  };
}
```

<br>
<br>

# 11. SSR 1. 소개 및 실습

<br>
<br>

# 12. SSR 2. 실습

<br>
<br>

# 13. SSG 1. 소개

> SSG : Static Site Generation

- ✅ 장점 : 사전 렌더링에 많은 시간이 소요되는 페이지더라도, 사용자의 요청에는 매우 빠른 속도로 응답 가능
- ⚠️ 단점 : 매번 똑같은 페이지만 응답함, 최신 데이터 반영은 어렵다.
