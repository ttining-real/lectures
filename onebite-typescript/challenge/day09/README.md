### Quiz 1.

다음 요구사항을 만족하는 Pokemon 클래스를 완성하세요.

- 다음 3개의 필드를 갖습니다.
  - `name` 필드는 `String` 타입이며 `Public` 입니다.
  - `skill` 필드는 `String` 타입이며 `Public` 입니다.
  - `type` 필드는 `String` 타입이며 `ReadOnly`(읽기 전용)필드 입니다.
- 다음 2개의 메서드를 갖습니다.
  - `getName` 메서드는 `name` 필드의 값을 반환합니다.
  - `setSkill` 메서드는 `String` 타입의 매개변수를 받아 `skill` 필드의 값을 업데이트 합니다.

```typescript
class Pokemon {}

const pikachu = new Pokemon("피카츄", "백만볼트", "전기");
pikachu.getName();
pikachu.setSkill("천만볼트!");
```
