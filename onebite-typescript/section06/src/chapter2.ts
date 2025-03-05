// * 접근 제어자 (access modifier)
// public, privat, protected

class Employee {
  // 필드
  // private name: string;
  // protected age: number;
  // public position: string;

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

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

  // 메서드
  func() {
    this.age;
    this.name;
  }
}

const employee = new Employee("ttining", 100, "developer");
employee.name = "bonobono";
employee.age = 101;
employee.position = "designer";

console.log(employee);
