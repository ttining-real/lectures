# Section 02. 타입스크립트 기본

<br>

### 🎯 목차

- [x] 기본 타입
- [ ] 원시 타입과 리터럴 타입
- [ ] 배열과 튜플
- [ ] 객체
- [ ] 타입 별칭과 인덱스 시그니처
- [ ] `Enum` 타입
- [ ] `Any`와 `Unknown` 타입
- [ ] `Void`와 `Never` 타입

<br>

#### ✨ 복습

- `node.js` 패키지 초기화 : `npm init`
- `ts-node` 설치 : `npm i @types/node`
- 컴파일러 옵션 파일 생성 : tsconfig.json
- ⛔ `node dist/index.js` 시, 에러가 발생한다면?
  - package.json에서 `"type": "module"` 추가해주기
- `tsx src/index.ts`
  - `tsc` : 파일 변환만 함
  - `ts-node` : 컴파일 + 실행
  - `tsx` : 컴파일 + 실행

---

<br>

# 기본 타입

| 타입        | 설명                               |
| ----------- | ---------------------------------- |
| `number`    | 숫자 타입(정수, 소수 등)           |
| `string`    | 문자열 타입                        |
| `boolean`   | 불리언 (`true` / `false`)          |
| `null`      | `null` 값                          |
| `undefined` | `undefined` 값                     |
| `bigint`    | 큰 정수를 표현하는 타입 (ES2020)   |
| `symbol`    | 고유한 값을 가지는 심볼 타입 (ES6) |

### 👀 예시

```typescript
let age: number = 100;
let userName: string = "ttining";
let isAdmin: boolean = true;
let emptyValue: null = null;
let notDefined: undefined = undefined;
let bigNumber: bigint = 9007199254740991n;
let uniqueKey: symbol = Symbol("key");
```

<br>
<br>

# 원시 타입과 리터럴 타입

<br>
<br>

# 배열과 튜플

<br>
<br>

# 객체

<br>
<br>

# 타입 별칭과 인덱스 시그니처

<br>
<br>

# `Enum` 타입

<br>
<br>

# `Any`와 `Unknown` 타입

<br>
<br>

# `Void`와 `Never` 타입
