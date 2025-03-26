# Section 2. Page Router 핵심 정리

<br>

### 🎯 목차

- [x] Page Router를 소개합니다
- [x] 페이지 라우팅 설정하기
- [ ] 네비게이팅
- [ ] 프리페칭
- [ ] API Routes
- [ ] 스타일링
- [ ] 글로벌 레이아웃 설정하기
- [ ] 한입 북스 UI 구현하기
- [ ] 사전 렌더링과 데이터 페칭
- [ ] SSR 1. 소개 및 실습
- [ ] SSR 2. 실습
- [ ] SSG 1. 소개
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

# 2. 페이지 라우팅 설정하기

## 1️⃣ Query String

- 페이지 경로에 영향을 주는 것이 아니기 때문에 pages 폴더 내에서는 별도의 설정을 하지 않아도 된다.
- 대신, 컴포넌트 내부에서 쿼리 스트링의 값을 읽어오기 위해 `useRouter` 훅을 사용하여 `router.query` 프로퍼티를 통해 불러와야 한다.

<br>

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
<br>

## 2️⃣ URL Parameter

- `book/10` … `book/100`과 같이 가변적인 값들을 **URL Parameter**라고 부른다.
- 이와 같이 URL Parameter 경로의 페이지를 만들고 싶다면, `pages/{폴더명}` 폴더 하위에 `[id].tsx` 파일을 생성하면 된다.

<br>

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
<br>

## 3️⃣ Catch All Segment

- `book/123` 경로가 아닌, `book/123/123` 처럼 `id`가 연속으로 나오는 페이지를 만들고 싶다면 **Catch All Segment**를 사용할 수 있다.
- 이는 파일명을 `[id].tsx`가 아닌, `[...id].tsx`로 만들어주면 된다.

<br>
<br>

## 4️⃣ Optional Catch All Segment

- Catch All Segment로 대응할 수 없는 경로가 있다. 바로 `/book` 경로이다.
- `book` 폴더 하위에 `index.tsx` 파일을 생성해주면 해결된다.
- 그러나 `index` 파일을 만들지 않고 `[...id]` 파일을 범용적으로 사용하고 싶다면,
  파일명을 `[[...id]]`로 변경해주면 된다.
- `[[...id]]`와 같이 설정된 파일을 **Optional Catch All Segment**라고 한다.

<br>
<br>

## 5️⃣ Not Found

- `pages` 폴더 하위에 `404.tsx` 파일을 생성하면 된다.

<br>

### ✍️ 예시

```tsx
export default function Page() {
  return <div>존재하지 않는 페이지입니다.</div>;
}
```
