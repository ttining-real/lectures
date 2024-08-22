# 🍰 한입 크기로 잘라 먹는 리액트

```
2024. 08. 22(목)
```

<br>

### 섹션 3. Node.js 기초

- [x] Node.js 소개
- [x] Node.js 설치하기
- [x] Node.js 사용하기
- [x] Node.js 모듈 시스템 이해하기
- [x] Node.js 라이브러리 사용하기

<br>

**💡 Node.js 설치하기**

> **[Node.js 설치 바로가기](https://nodejs.org/en)**
>
> - **LTS** (Long term support, 장기적으로 지원)
>   대부분의 유저들에게 추천하는 가장 안정적인 버전
> - **Current**
>   가장 최신 버전
> - **NPM (Node Package Manager)**
>   Node.js의 프로젝트 단위인 패키지를 관리하는 도구
>   새로운 패키지 생성, 외부 라이브러리 설치 또는 삭제 기능 제공

- `node -v` : 노드 버전 확인 (v20. 이상 유지)
- `npm -v` : npm 버전 확인하기
- `npm init` : 패키지 초기화

<br>

**💡 Node.js 사용하기**

- package.json : 설정 파일
  - `scripts` > `start` > `node src/index.js` 설정
- 실행하기
  - `node index.js` : index.js 파일 실행
  - `npm run start` : scripts > start에 등록된 파일 실행

<br>

**💡 모듈 시스템**

JavaScript의 모듈 시스템

- Common JS (CJS) (`module.exports` / `require`)
- ES Module (ESM) (`import` / `export`)
- AMD
- UMD
- ...

<br>

**💡 라이브러리**

- [npmjs](https://www.npmjs.com/) node.js 라이브러리
