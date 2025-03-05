# Section 06. 클래스

<br>

### 🎯 목차

- [x] 자바스크립트의 클래스 소개
- [x] 타입스크립트의 클래스
- [x] 접근 제어자
- [x] 인터페이스와 클래스

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

- 타입스크립트의 `class`는 타입으로 활용할 수 있다. (구조적 타입 시스템)

```typescript
const employee = {
  name: "ttining",
  age: 100,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employeeB = new Employee("ttining", 100, "Developer");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
```

<br>

### 클래스 확장하기

- `Employee` 클래스를 확장한 세분화된 클래스 만들기
- 파생 클래스의 생성자는 `super` 호출을 포함해야 한다.

```typescript
class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
```

<br>
<br>

# 접근 제어자 (access modifier)

- 생성자의 매개변수 앞에 다는 것도 가능하다.
- 생성자에 접근 제어자를 달면, 자동으로 필드를 만든다. (필드 정의 생략)

### `public`

- 가장 기본적인 접근 제어자
- 아무것도 제한하지 않는다.

### `private`

- 가장 제한적인 접근 제어자
- 클래스 내부가 아니면 어디서도 접근할 수 없다.
- 파생 클래스에서도 접근할 수 없다.

### `protected`

- `public`과 `private` 중간 쯤에 있는 접근 제어자
- 파생 클래스 내부에서는 접근할 수 있도록 해준다.
- 외부에서는 아예 접근 자체가 불가능하다.

<br>
<br>

# 인터페이스와 클래스

- `implements` : 인터페이스로 정의한 타입의 객체를 클래스가 생성하도록 정의한다.
- `interface`로 정의한 필드들은 `public`이다.
  - `private` 필드를 만들고 싶다면, `interface`에 정의하지 않고 따로 추가해주어야 한다.
- `Character` 클래스에서는 생성자에 접근 제어자를 사용했기 때문에, 필드 정의를 생략할 수 있다.

```typescript
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
```
