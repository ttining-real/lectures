# Section 06. 클래스

<br>

### 🎯 목차

- [x] 자바스크립트의 클래스 소개
- [ ] 타입스크립트의 클래스
- [ ] 접근 제어자
- [ ] 인터페이스와 클래스

<br>

---

<br>

# 자바스크립트의 클래스 소개

### 중복 코드

```javascript
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

let studentB = {
  name: "bonobono",
  grade: "B-",
  age: 100,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};
```

<br>

### class를 사용하여 중복 코드 개선하기

```javascript
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

// 인스턴스 : 클래스를 이용해서 만든 객체
// Student 인스턴스
let studentB = new Student("bonobono", "B-", 100);
console.log(studentB);
studentB.study();
studentB.introduce();
```

<br>

### 클래스 추가 하기

- 동일한 구조의 `class`가 중복되어 코드가 길어진다.
  - `Student`, `StudentDeveloper`

```javascript
class StudentDeveloper {
  // 필드
  name;
  grade;
  age;
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    this.name = name;
    this.grade = grade;
    this.age = age;
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  study() {
    console.log("열심히 공부함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("띠닝", "A", 100, "TypeScript");

console.log(studentDeveloper);
studentDeveloper.programming();
```

<br>

### 클래스 상속

- 위와 같이 `Student` 클래스의 파생 클래스들이 계속 생성된다면, 중복 코드가 많아진다.
- 이때, **클래스의 상속** 기능을 사용할 수 있다.

```javascript
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
```

<br>
<br>

# 타입스크립트의 클래스

<br>
<br>

# 접근 제어자

<br>
<br>

# 인터페이스와 클래스
