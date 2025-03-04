### Quiz 1. 타입 단언을 이용해 person 변수에 빈 객체를 할당하세요.

> 💡 힌트. 초과 프로퍼티 검사 방지를 위한 타입 단언

```typescript
type Person = {
  name: string;
  age: number;
};

let person: Person = {};
```

<br>

### Quiz 2. 타입 단언을 이용해 함수 호출에서의 오류를 해결하세요.

> 💡 힌트. `const` 단언

```typescript
let value = 10;
giveMe10(value);

function giveMe10(value: 10) {
  return value;
}
```

<br>

### Quiz 3. 다음 요구사항을 만족하는 코드를 작성하세요.

- `CompanyMember` 타입을 `Boss`와 `Employee`의 서로소 유니온 타입으로 정의하세요.

```typescript
type Boss = {
  car: string;
};

type Employee = {
  salary: number;
};

type CompanyMember = Employee | Boss;
```
