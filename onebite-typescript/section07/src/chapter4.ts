/* -------------------------------------------------------------------------- */
/*                                제네릭 클래스                                */
/* -------------------------------------------------------------------------- */

// * 일반 class
class List<T> {
  constructor(private list: T[]) {}

  // 메서드
  // 리스트 추가
  push(data: T) {
    this.list.push(data);
  }

  // 리스트 제거
  pop() {
    return this.list.pop();
  }

  // 리스트 출력
  print() {
    console.log(this.list);
  }
}

// 인스턴스 생성
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2", "3"]);
stringList.push("hello");
