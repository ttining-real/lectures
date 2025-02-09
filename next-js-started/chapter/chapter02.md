# 2. Routing

- [x] Introduction
- [x] Defining Routes
- [ ] Not Found Routes
- [ ] SSR vs CSR
- [ ] Hydration
- [ ] `use client`
- [ ] Recap
- [ ] Layouts
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
