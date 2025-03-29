# 🍿 ONEBITE CINEMA 🍿

<br>
<br>

## Day 5. 한입-씨네마 UI 구현하기

### 1️⃣ 더미데이터 설정하기

- mock/dummy.json

### 2️⃣ 타입 설정하기

- types.ts
- `MovieData` 타입 정의 및 내보내기

### 3️⃣ 인덱스 페이지 UI 구현

- 검색바 레이아웃 적용
- `section`
  - 지금 가장 추천하는 영화 (3개의 `MovieItem`)
  - 등록된 모든 영화 (한줄당 5개의 `MovieItem`)
- `MovieItem` 컴포넌트 클릭 시, `~/movie/[id]` 경로로 이동

### 4️⃣ 서치 페이지 UI 구현

- 검색바 레이아웃 적용
- 검색 결과로 `MovieItem` 컴포넌트 한줄에 3개씩 렌더링
- `MovieItem` 컴포넌트 클릭 시, `~/movie/[id]` 경로로 이동

## 5️⃣ 상세 페이지 UI 구현

- `posterImgUrl`, `title`, `releaseDate`, `genres`, `runtime`, `company`, `subTitle`, `description` 필드 값 렌더링
- dummy.json에 저장된 하나의 영화 데이터 활용

<br>
<br>

## Day 4. 한입-씨네마 레이아웃 설정하기

### 1️⃣ 글로벌 레이아웃 설정하기

1. `header` 요소
2. `children` 요소
3. 스타일링

### 2️⃣ 검색바 레이아웃 설정하기

1. `/`, `/search` 페이지에만 적용
2. 검색 버튼 클릭 시, `/search` 페이지로 이동 (쿼리스트링 `q` 전달)

<br>
<br>

## Day 3. 한입 씨네마 백엔드 서버 세팅하기

- Supabase 프로젝트 생성
- Connection String 설정
- 백엔드 서버 실행
- API 문서 페이지 인증

<br>
<br>

## Day 2. 한입 씨네마 프로젝트 생성 + 라우팅 설정하기

### 1️⃣ 새로운 Next App 생성하기 (Page Router 버전)

### 2️⃣ 라우팅 설정하기

1. `/` : 인덱스 페이지
   - "ONEBITE CINEMA" 텍스트 렌더링
2. `/search` : 검색 페이지
   - "검색 결과 : `{q}`" 렌더링
3. `/movie/[id]` : 영화 상세 페이지
   - "{id} 영화 상세페이지" 렌더링
