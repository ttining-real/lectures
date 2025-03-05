/* -------------------------------------------------------------------------- */
/*                                   Quiz 1                                   */
/* -------------------------------------------------------------------------- */

function add(): number;
function add(a: number): number;
function add(a: number, b: number, c: number): number;

function add(a?: number, b?: number, c?: number) {
  return (a ?? 0) + (b ?? 0) + (c ?? 0);
}

/* -------------------------------------------------------------------------- */
/*                                   Quiz 2                                   */
/* -------------------------------------------------------------------------- */

type Guest = {
  visitCount: number;
};

type Member = {
  id: string;
};

type User = Guest | Member;

function isGuest(user: User): user is Guest {
  return (user as Guest).visitCount !== undefined;
}

function isMember(user: User): user is Member {
  return (user as Member).id !== undefined;
}

function inviteUser(user: User) {
  if (isGuest(user)) {
    console.log(`${user.visitCount}번째 방문입니다`);
  } else if (isMember(user)) {
    console.log(`${user.id}님 안녕하세요!`);
  }
}

/* -------------------------------------------------------------------------- */
/*                                   Quiz 3                                   */
/* -------------------------------------------------------------------------- */

interface Person {
  name: string;
}

interface Student extends Person {
  grade: "A" | "B" | "C";
}

interface Developer extends Person {
  skills: string[];
}

interface Boss extends Person {
  company: string;
}

const student: Student = {
  name: "이정환",
  grade: "A",
};
const developer: Developer = {
  name: "이정환",
  skills: ["React", "TypeScript"],
};
const boss: Boss = {
  name: "이정환",
  company: "한입 스튜디오",
};
