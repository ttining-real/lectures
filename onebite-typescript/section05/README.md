# Section 05. 인터페이스

<br>

### 🎯 목차

- [x] 인터페이스
- [ ] 인터페이스 확장하기
- [ ] 인터페이스 합치기

<br>

---

<br>

### 준비

- `section05` 폴더 만들기
- `package.json`, `package-lock.json`, `tsconfig.json` 파일 복사
- `package.json`의 `name` 고쳐주기
- 다음 단계 따르기

  ```bash
  nnpm i
  tsc
  node dist/index.js
  tsx src/index.ts
  ```

<br>
<br>

# 인터페이스

- 타입에 이름을 지어주는 또 다른 문법
- 객체의 구조를 정의하는 데 특화된 문법
  - 상속, 합침 등의 특수한 기능을 제공한다.

```typescript
// 타입
type A = {
	a : string;
	b : number;
}

// 인터페이스
interface A = {
	a : string;
	b : number;
}
```

<br>
<br>

# 인터페이스 확장하기

<br>
<br>

# 인터페이스 합치기

<br>
<br>
