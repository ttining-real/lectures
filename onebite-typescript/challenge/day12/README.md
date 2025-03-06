### Quiz 1.

다음 요구사항을 만족하도록 `getSellersFromProducts` 함수의 매개변수와 반환값 타입을 정의하세요.

- `getSellersFromProducts` 함수는 매개변수로 받은 `Product` 배열로부터,
  `seller` 객체만 추출해 새로운 배열로 반환하는 함수입니다.
- 반환값을 명시적으로 설정해야 합니다 (인덱스드 엑세스 타입)

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    company: string;
  };
}

function getSellersFromProducts(products: any): any {
  return products.map((product) => product.seller);
}
```

<br>

### Quiz 2.

다음 조건을 만족하는 3개의 타입을 추가로 정의하세요.

- `PartialProduct` 타입은 `Product` 타입의 모든 프로퍼티를 다 선택적 프로퍼티로 바꾼 타입입니다.
- `ReadonlyProduct` 타입은 `Product` 타입의 모든 프로퍼티를 다 읽기 전용 프로퍼티로 바꾼 타입입니다.
- `ReadonlyPartialProduct` 타입은 `Product` 타입의 모든 프로퍼티를 다 선택적, 읽기 전용 프로퍼티로 바꾼 타입입니다.

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    company: string;
  };
}

type PartialProduct = any;

type ReadonlyProduct = any;

type ReadonlyPartialProduct = any;
```

<br>

### Quiz 3.

다음 조건을 만족하는 `Score` 타입을 구현하세요.

- `Score` 타입은 점수를 나타내기 위한 문자열 타입으로 `'${0부터 9까지의 정수}-${0부터 9까지의 정수}'`형식을 갖습니다.
  - ex) "1-0", "3-2", "0-4" 이런 형태의 문자열 타입입니다.
  - ex) 어느쪽의 점수에도 두 자리수는 올 수 없습니다.

```typescript
type Score = any;
```

<br>
