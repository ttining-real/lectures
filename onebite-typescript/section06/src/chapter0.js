// * 클래스

let studentA = {
  name: "ttining",
  grade: "A+",
  age: 100,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

// let studentB = {
//   name: "bonobono",
//   grade: "B-",
//   age: 100,
//   study() {
//     console.log("열심히 공부함");
//   },
//   introduce() {
//     console.log("안녕하세요!");
//   },
// };

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자 (매개변수는 제거하면 안됨)
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 부모 클래스의 생성자가 호출된다.
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("띠닝", "A", 100, "TypeScript");

console.log(studentDeveloper);
studentDeveloper.programming();

// 인스턴스 : 클래스를 이용해서 만든 객체
// Student 인스턴스
// let studentB = new Student("bonobono", "B-", 100);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
