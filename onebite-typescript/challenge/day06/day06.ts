/* -------------------------------------------------------------------------- */
/*                                   Quiz 1                                   */
/* -------------------------------------------------------------------------- */

type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person;

/* -------------------------------------------------------------------------- */
/*                                   Quiz 2                                   */
/* -------------------------------------------------------------------------- */
let value = 10 as const;
giveMe10(value);

function giveMe10(value: 10) {
  return value;
}

/* -------------------------------------------------------------------------- */
/*                                   Quiz 3                                   */
/* -------------------------------------------------------------------------- */
type Boss = {
  type: "Boss";
  car: string;
};

type Employee = {
  type: "Employee";
  salary: number;
};

type CompanyMember = Employee | Boss;

function test(companyMember: CompanyMember) {
  if (companyMember.type === "Boss") {
    console.log("사장님 또 차 바꿨다 : ", companyMember.car);
  } else if (companyMember.type === "Employee") {
    console.log("아직도 월급은 : ", companyMember.salary);
  }
}
