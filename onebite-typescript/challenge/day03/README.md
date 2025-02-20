### Quiz 1.

다음 요구사항을 만족하는 4개의 타입을 정의하세요.

- Any 타입은 사용할 수 없습니다.
- Nums 타입은 숫자만 담을 수 있는 배열 타입입니다.
- Colors 타입은 문자열만 담을 수 있는 배열 타입입니다.
- Coords 타입은 [숫자, 숫자] 형태의 배열만 허용하는 타입입니다.
- Info 타입은 [숫자, 문자열] 형태의 배열만 허용하는 타입입니다.

```typescript
type Nums = never;
type Colors = never;
type Coords = never;
type Info = never;
// 위 4개의 타입을 각각 어떻게 구현해야 할까요?
```

<br>

### Quiz 2.

다음 요구사항을 만족하는 Course 타입을 정의하세요.
(이 타입은 마치 인프런에서 활용할 것 같군요?)

- Any 타입은 사용할 수 없습니다.
- Course 타입은 온라인 강의 정보를 포함하는 객체 타입을 정의합니다.
- 문자열을 저장하는 name 프로퍼티를 가져야 합니다.
- 숫자를 저장하는 price 프로퍼티를 가져야 합니다.
- 숫자를 저장하는 student_cnt 프로퍼티를 가져야 합니다.
- 문자열을 저장하는 author 프로퍼티를 가져야 합니다.
- 문자열 배열을 저장하는 related_courses 프로퍼티를 가져야 합니다.

```typescript
type Course = never;
// Course 타입을 어떻게 구현해야 할까요?
```

<br>

### Quiz 3.

다음 요구사항을 만족하는 User 타입을 구현하세요.

- Any 타입은 사용할 수 없습니다.
- 객체 타입이어야 합니다.
- String 타입의 name 프로퍼티가 있어야 합니다.
- String 타입의 email 프로퍼티가 있어야 합니다.
- 그 외의 String 타입의 동적 프로퍼티들도 추가할 수 있어야 합니다.

```typescript
type User = never;
// User 타입을 어떻게 구현해야 할까요?
```
