// * Unknown 타입
// 전체 집합

function unknownExam() {
  // 업 캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운 캐스팅
  let num: number = unknownVar; // 오류 발생
  let str: string = unknownVar; // 오류 발생
  let bool: boolean = unknownVar; // 오류 발생
}

// * Never 타입
// 공집합

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업 캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운 캐스팅
  let never1: never = 10; // 오류 발생
  let never2: never = "string"; // 오류 발생
  let never3: never = true; // 오류 발생
}

// * Void 타입

function voidExam() {
  function voidFunc(): void {
    console.log("hi");

    return undefined;
  }

  let voidVar: void = undefined;
}

// * Any 타입

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 다운 캐스팅
  anyVar = unknownVar; // 오류 발생 안함

  undefinedVar = anyVar; // 오류 발생 안함

  neverVar = anyVar; // Type 'any' is not assignable to type 'never'.
}
