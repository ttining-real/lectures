// * void

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;

a = 1;
a = "hello";
a = {};
a = undefined;
a = null;

// * never
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let anyVar: any;

let a: never;
a = 1;
a = {};
a = "";
a = undefined;
a = null;
a = anyVar;
