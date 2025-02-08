# 1. INTRODUCTION

- [x] Welcome
- [x] Requirements
- [x] Library vs Framework
- [x] Old vs New Version
- [x] Project Setup

<br>

- 프로젝트 초기화

  ```bash
  npm init -y
  ```

- package.json : `license` 변경

  ```json
  {
    "license": "MIT" // ISC → MIT 변경
  }
  ```

- react, next, react-dom 설치

  ```bash
  npm install react@latest next@latest react-dom@latest
  ```

- package.json : `scripts` 명령어 등록

  ```json
  {
    "scripts": {
      "dev": "next dev"
    }
  }
  ```

- `app/pages.tsx` or `app/pages.jsx` 파일 생성
