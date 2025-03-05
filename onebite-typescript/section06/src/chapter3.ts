// * 인터페이스와 클래스

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// implements : 구현하다
// 인터페이스가 정의하는 타입의 객체를
// Character 클래스가 생성하도록 정의한다.
class Character implements CharacterInterface {
  // interface로 정의하는 필드들은 무조건 public이다.
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
