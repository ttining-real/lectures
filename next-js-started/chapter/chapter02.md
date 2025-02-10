# 2. Routing

- [x] Introduction
- [x] Defining Routes
- [x] Not Found Routes
- [x] SSR vs CSR
- [x] Hydration
- [x] `use client`
- [x] Recap
- [x] Layouts
- [ ] Metadata
- [ ] Dynamic Routes
- [ ] Conclusions

<br>

---

<br>

## ✅ Routing

> react-router : Next.js 없이 기본적인 React 애플리케이션에서 라우팅하는 방법
>
> - 각 path에 component를 연결

<br>

#### 1️⃣ `app/new-folder/page.tsx` 생성

- `app/about-us` 폴더 생성
- `app/about-us/page.tsx` 파일 생성
  ```tsx
  export default function AboutUs() {
    return <h1>About us!</h1>;
  }
  ```
- `localhost:3000/about-us`가 `url`이 됨 (폴더명이 `path`가 됨)
- `about-us`의 하위 페이지를 만들고 싶을 경우,
  `about-us/company/sales/page.tsx`와 같이 경로에 맞게 폴더와 `page.tsx`를 생성해주면 된다.

<br>

#### 2️⃣ `app`의 하위 폴더

> `page`라는 파일을 만들지 않는다면, 실제 경로에 포함되지 않고 렌더링도 되지 않는다.

<br>

- `app/components/avatar.tsx` 파일 생성
  - `page` 파일을 가지고 있지 않기 때문에 `url`이 되지 않는다.
  - 따라서, `app/components` 폴더는 컴포넌트들을 갖고 있는 일반적인 폴더가 된다.

<br>

---

<br>

## ✅ Not Found

> 존재하지 않는 url에 접근 시

- `app/not-found.tsx`
  ```tsx
  export default function NotFound() {
    return <h1>Not Found!</h1>;
  }
  ```

<br>

---

<br>

## ✅ SSR vs CSR

> Next.js는 다양한 렌더링 방식을 지원하여, 성능과 SEO를 최적화할 수 있다.
>
> 주요 렌더링 방식은 다음과 같다.

<br>

### 1. 서버 사이드 렌더링 (SSR, Server-Side Rendering)

- 매 요청마다 서버에서 HTML을 생성하여 클라이언트에 반환하는 방식
- app 라우터에서 서버 컴포넌트(Server Components) 가 기본값으로 동작
- API 요청이 필요하고, SEO가 중요한 페이지에서 유용

#### 📍 사용 방식

- `app` 디렉터리에서 기본적으로 서버 컴포넌트 사용 (`use client`가 없는 경우)
- `pages` 디렉터리에서는 `getServerSideProps`를 사용

```tsx
// 예제 (app 디렉터리)
export default async function Page() {
  const data = await fetch("https://api.example.com/data").then((res) =>
    res.json()
  );

  return <div>{data.message}</div>;
}
```

<br>

### 2. 정적 사이트 생성 (SSG, Static Site Generation)

- 빌드 시 HTML을 생성하여 배포 후에는 서버 부담 없이 빠르게 제공하는 방식
- Next.js 14에서는 서버 컴포넌트 기반으로 더욱 최적화됨
- `pages` 디렉터리에서는 `getStaticProps` 사용

#### 📍 사용 방식

- `app` 디렉터리에서는 `fetch` 요청을 캐싱하여 정적 HTML 생성.
- `pages` 디렉터리에서는 `getStaticProps` 사용.

```tsx
// 예제 (pages 디렉터리)
export async function getStaticProps() {
  const data = await fetch("https://api.example.com/data").then((res) =>
    res.json()
  );

  return { props: { data } };
}

export default function Page({ data }) {
  return <div>{data.message}</div>;
}
```

<br>

### 3. 증분 정적 생성 (ISR, Incremental Static Regeneration)

- 기존 SSG의 한계를 보완하여, 특정 간격마다 페이지를 다시 생성할 수 있도록 함
- 최신 데이터 반영이 필요하지만 서버 부하를 줄이고 싶을 때 유용

#### 📍 사용 방식

- `app` 디렉터리에서는 fetch 요청에 `{ next: { revalidate: 10 } }` 옵션 사용
- `pages` 디렉터리에서는 `getStaticProps`의 `revalidate` 속성 사용.

```tsx
// 예제 (app 디렉터리)
export default async function Page() {
  const data = await fetch("https://api.example.com/data", {
    next: { revalidate: 10 },
  }).then((res) => res.json());

  return <div>{data.message}</div>;
}
```

<br>

### 4. 클라이언트 사이드 렌더링 (CSR, Client-Side Rendering)

- 페이지 로딩 후 브라우저에서 데이터를 가져와 렌더링하는 방식
- SEO가 필요 없는 대시보드나 개인화된 페이지에서 주로 사용

#### 📍 사용 방식

- `use client` 선언 후 `useEffect` 또는 `useSWR`을 사용하여 클라이언트에서 데이터 요청

```tsx
"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;
  return <div>{data.message}</div>;
}
```

<br>

### 5. React 서버 컴포넌트 (RSC, React Server Components) [기본값]

- Next.js 14에서는 app 디렉터리에서 기본적으로 서버 컴포넌트를 사용
- 클라이언트에서 불필요한 JavaScript를 줄여 성능 향상
- 기존 SSR, SSG 방식과 함께 사용 가능
- 클라이언트에서 필요한 경우 use client를 추가하여 클라이언트 컴포넌트로 변환

#### 📍 사용 방식

```tsx
// 서버 컴포넌트 (기본값)
export default async function Page() {
  const data = await fetch("https://api.example.com/data").then((res) =>
    res.json()
  );

  return <div>{data.message}</div>;
}
```

```tsx
// 클라이언트 컴포넌트
"use client";

import { useState, useEffect } from "react";

export default function ClientComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;
  return <div>{data.message}</div>;
}
```

<br>

### 6. 부분 정적 렌더링 (PPR, Partial Prerendering) [실험적 기능]

- 정적인 부분과 동적인 부분을 조합하여 페이지를 렌더링하는 새로운 방식
- 일부 데이터는 빌드 타임에 미리 렌더링하고, 나머지는 클라이언트에서 로딩
- 현재 실험적 기능이므로 `next.config.js`에서 활성화 필요

#### 📍 사용 방식

```tsx
// next.config.js
module.exports = {
  experimental: {
    ppr: true,
  },
};
```

<br>

### 📌 정리

| 렌더링 방식                    | 데이터 요청 시점       | 특징                              | 주요 사용 사례                  |
| ------------------------------ | ---------------------- | --------------------------------- | ------------------------------- |
| SSR (서버 사이드 렌더링)       | 요청 시                | 최신 데이터 반영, SEO 최적화      | 동적 콘텐츠, 사용자 맞춤 페이지 |
| SSG (정적 사이트 생성)         | 빌드 시                | 빠른 속도, 변경 없는 데이터       | 블로그, 문서 사이트             |
| ISR (증분 정적 재생성)         | 빌드 후 일정 주기마다  | 최신 데이터 반영 + 정적 성능 유지 | 제품 목록, 뉴스 페이지          |
| CSR (클라이언트 사이드 렌더링) | 클라이언트에서 요청 후 | 초기 로딩 빠름, JavaScript 의존   | 대시보드, 개인화 페이지         |
| RSC (React 서버 컴포넌트)      | 서버에서 실행          | 클라이언트 JS 최소화, 성능 향상   | Next.js 14 기본 방식            |
| PPR (부분 정적 렌더링)         | 빌드 시 + 클라이언트   | 정적 + 동적 콘텐츠 혼합           | 실험적 기능                     |

<br>

#### 🪄 Next.js 14에서 SSR과 SSG는 사라진걸까?

- 여전히 지원되지만, `app` 디렉터리를 사용하면 기본적으로 서버 컴포넌트(RSC) 방식이 적용된다.
- `use client`를 선언해야 CSR 방식으로 동작한다.

<br>

#### 🪄 어떤 방식이 가장 좋을까?

- SEO 중요 + 실시간 데이터 필요 → SSR
- SEO 중요 + 변경 없는 데이터 → SSG
- SEO 중요 + 자주 바뀌는 데이터 → ISR
- SEO 불필요 + 대시보드, 사용자 인터페이스 → CSR
- 최신 Next.js 권장 방식 → RSC

##### 결론: Next.js 14에서는 React 서버 컴포넌트(RSC)가 기본값이므로, SSR/SSG보다 RSC를 먼저 고려하는 게 좋다.

<br>

---

<br>

## ✅ Hydration

> Hydration(하이드레이션) 은 서버에서 렌더링된 HTML을 클라이언트에서 React 애플리케이션으로 변환하는 과정을 말한다.
>
> 즉, 정적인 HTML에 React의 이벤트 핸들러와 상태(state)를 추가하여 대화형(Interactive) 애플리케이션으로 만드는 작업이다.

<br>

### 1. Hydration 과정 (SSR 또는 SSG + CSR)

1. 서버에서 HTML을 렌더링하여 클라이언트로 전송 (SSR 또는 SSG).
2. 클라이언트에서 React가 초기화되면서 해당 HTML을 "Hydrate(하이드레이션)" 함.
3. Hydration이 완료되면 React의 상태(state), 이벤트 핸들러 등이 활성화되면서 동적으로 동작함.

#### 📍 Hydration 예제 (SSR + Hydration)

```tsx
// app/page.tsx (서버 컴포넌트)
export default async function Page() {
  const data = await fetch("https://api.example.com/data").then((res) =>
    res.json()
  );

  return <div>{data.message}</div>;
}
```

```tsx
// app/client-component.tsx (클라이언트 컴포넌트)
"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>클릭 {count}</button>;
}
```

- `page.tsx`는 서버 컴포넌트로, 서버에서 HTML을 생성해 클라이언트에 전달
- `client-component.tsx`는 클라이언트 컴포넌트로, Hydration 후 버튼 클릭이 가능해짐

<br>

### 2. Hydration이 중요한 이유

- 빠른 초기 로딩 → 사용자가 페이지를 빠르게 볼 수 있음.
- SEO 최적화 → 정적인 HTML이 먼저 제공되므로 검색엔진 크롤러가 읽기 좋음.
- 대화형 기능 유지 → React 상태(state)와 이벤트 핸들러가 추가됨.

<br>

### 3. Hydration 최적화 방법

#### 1️⃣ 서버 컴포넌트(RSC) 활용

- `app` 디렉터리에서는 서버 컴포넌트가 기본값이므로 불필요한 Hydration을 줄일 수 있음.

```tsx
export default async function Page() {
  const data = await fetch("https://api.example.com/data").then((res) =>
    res.json()
  );
  return <div>{data.message}</div>;
}
```

- 위 코드는 클라이언트에서 추가적인 Hydration 없이 사용 가능.

#### 2️⃣ 클라이언트 컴포넌트를 최소화 (`use client` 최소화)

- 상태(`state`)나 이벤트 핸들러가 필요한 경우만 `use client` 사용.

```tsx
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>클릭 {count}</button>;
}
```

#### 3️⃣ 부분 Hydration (Partial Hydration) 사용

- Next.js 14에서는 React 서버 컴포넌트(RSC) 를 기본값으로 사용하여 불필요한 Hydration을 줄일 수 있음.

#### 4️⃣ 지연 Hydration (Lazy Hydration) 활용

- `next/dynamic`을 사용하여 Hydration을 늦출 수 있음.

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  ssr: false,
});

export default function Page() {
  return <HeavyComponent />;
}
```

<br>

### 📌 정리

- Hydration은 서버에서 전달된 HTML을 React 애플리케이션으로 변환하는 과정이다.
- Next.js 14에서는 서버 컴포넌트(RSC) 가 기본이므로 Hydration을 최소화할 수 있다.
- 클라이언트 컴포넌트를 최소화하고, 지연 Hydration을 활용하는 것이 성능 최적화의 핵심! 🚀

<br>

---

<br>

## ✅ `use client`

> Next.js 13부터 도입된 React 서버 컴포넌트(RSC) 환경에서 특정 컴포넌트를 클라이언트 컴포넌트로 명시하는 지시어
>
> 클라이언트에서 실행되어야 하는 상태(state), 이벤트 핸들러, 브라우저 API 등을 사용할 때 필요하다.

<br>

### 1. 기본 사용법

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>클릭 {count}</button>;
}
```

- `use client`를 선언하면 해당 파일이 클라이언트에서 실행됨
- `useState`, `useEffect` 같은 훅을 사용할 수 있음
- 이벤트 핸들러 (`onClick` 등) 도 정상적으로 동작함

<br>

### 2. 서버 컴포넌트 🆚 클라이언트 컴포넌트

|                                         | 서버 컴포넌트 (기본값) | 클라이언트 컴포넌트 (`use client`) |
| --------------------------------------- | ---------------------- | ---------------------------------- |
| 렌더링 위치                             | 서버 (Node.js)         | 클라이언트 (브라우저)              |
| 초기 로딩 속도                          | 빠름                   | 상대적으로 느림 (Hydration 필요)   |
| 상태 관리 (`useState`)                  | ❌ 사용 불가           | ✅ 사용 가능                       |
| 이벤트 핸들러 (`onClick`)               | ❌ 사용 불가           | ✅ 사용 가능                       |
| 브라우저 API (`window`, `localStorage`) | ❌ 사용 불가           | ✅ 사용 가능                       |

<br>

### 3. 언제 `use client`를 사용할까?

- 상태(state) 관리 → `useState`, `useReducer`
- 이벤트 핸들링 → `onClick`, `onChange`
- 브라우저 API 사용 → `window`, `localStorage`, `sessionStorage`
- React 훅 사용 → `useEffect`, `useRef`, `useContext`

<br>

### 4. 주의할 점

#### 1️⃣ 불필요하게 use client를 남발하면 성능 저하 발생!

- 클라이언트 컴포넌트는 Hydration 과정이 필요하므로, 가능한 서버 컴포넌트를 사용하자.

#### 2️⃣ 서버 컴포넌트 내부에서 use client 선언 불가!

```tsx
export default function Page() {
  "use client"; // ❌ 서버 컴포넌트에서 선언하면 에러 발생!
  return <div>클라이언트 컴포넌트</div>;
}
```

#### 3️⃣ 클라이언트 컴포넌트에서 서버 전용 기능 (`fetch()`, `db 쿼리`) 사용 불가

```tsx
"use client";

export default function Component() {
  const data = await fetch("/api/data"); // ❌ 클라이언트에서 직접 fetch 사용 불가!
  return <div>{data.message}</div>;
}
```

- 해결 방법 : useEffect를 사용하거나 서버 컴포넌트에서 데이터를 받아와야 한다.

<br>

### 📌 정리

- `use client`를 선언하면 해당 파일이 클라이언트 컴포넌트가 된다.
- Next.js 14에서는 서버 컴포넌트(RSC) 가 기본이므로,
  상태 관리, 이벤트 핸들러가 필요한 경우만 `use client`를 추가하는 것이 좋다. 🚀

<br>

---

<br>

## ✅ Layouts

> Next.js에서 `layout.tsx`는 페이지 구조를 정의하는 공통 레이아웃을 제공하며, 중첩(Nested Layouts)이 가능하다.
>
> 즉, 상위 레이아웃을 하위 레이아웃이 감싸면서 페이지별로 다른 UI를 구성할 수 있다.

<br>

### 1. 기본 사용법

- `layout.tsx`는 페이지 간 공통 UI(예: 네비게이션, 사이드바, 푸터 등)를 유지할 때 사용한다.

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <header>헤더</header>
        <main>{children}</main>
        <footer>푸터</footer>
      </body>
    </html>
  );
}
```

- 모든 페이지가 `<header>`, `<footer>`를 공통으로 가짐
- `{children}` 부분에 각 페이지의 내용이 들어감.

<br>

### 2. 중첩 레이아웃 (Nested Layouts)

- `layout.tsx`는 특정 폴더 내부에 추가하면, 해당 폴더의 모든 페이지에서만 적용된다.
- 이를 활용하면 페이지 그룹별 다른 레이아웃을 구성할 수 있다.
- 디렉토리 구조
  ```
  app/
  ├── layout.tsx        ← 전체 페이지에 적용되는 전역 레이아웃
  ├── page.tsx         ← 홈페이지
  ├── dashboard/
  │   ├── layout.tsx    ← `dashboard` 내에서만 적용되는 레이아웃
  │   ├── page.tsx     ← `/dashboard` 페이지
  │   ├── settings/
  │   │   ├── page.tsx  ← `/dashboard/settings` 페이지
  ```
- 전역 레이아웃 (`app/layout.tsx`)

  ```tsx
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang='ko'>
        <body>
          <header>공통 헤더</header>
          {children}
          <footer>공통 푸터</footer>
        </body>
      </html>
    );
  }
  ```

- 대시보드 전용 레이아웃 (`app/dashboard/layout.tsx`)

  ```tsx
  export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section>
        <nav>대시보드 네비게이션</nav>
        <div>{children}</div>
      </section>
    );
  }
  ```

  > `dashboard/layout.tsx`는 `/dashboard` 내부 페이지들에만 적용됨.

- 대시보드 페이지 (`app/dashboard/page.tsx`)

  ```tsx
  export default function DashboardPage() {
    return <h1>대시보드 메인</h1>;
  }
  ```

<br>

### 3. 레이아웃 적용 결과

| 페이지                | 적용된 레이아웃                               |
| --------------------- | --------------------------------------------- |
| `/` (홈)              | `app/layout.tsx`                              |
| `/dashboard`          | `app/layout.tsx` → `app/dashboard/layout.tsx` |
| `/dashboard/settings` | `app/layout.tsx` → `app/dashboard/layout.tsx` |

- `layout.tsx`는 상위 레이아웃을 감싼 채로 하위 레이아웃이 중첩됨.
- `/dashboard/settings` 페이지는 전역 레이아웃 + 대시보드 레이아웃을 함께 가짐.

<br>

### 4. 언제 `layout.tsx`를 사용할까?

- 페이지 그룹별 공통 UI 유지
- 공통 네비게이션, 사이드바, 푸터 적용
- 페이지별 다른 레이아웃 구조 필요할 때
- 접근 권한이 필요한 페이지를 그룹화할 때 (예: 로그인 필요 페이지)

<br>

### 📌 정리

- `layout.tsx`는 페이지 간 공통 레이아웃을 정의하는 데 사용된다.
- 폴더별 `layout.tsx`를 추가하면 중첩 레이아웃을 구성할 수 있다.
- 불필요한 `layout.tsx` 사용을 최소화하여 성능 최적화하기 (✨중요)
