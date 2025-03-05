/* -------------------------------------------------------------------------- */
/*                                   Quiz 1                                   */
/* -------------------------------------------------------------------------- */

function func<T>(value: T): T {
  return value;
}

// const tc1: number = func(1);
// const tc2: string = func("hello");
// const tc3: boolean = func(true as boolean);
// const tc4: number[] = func([1, 2, 3]);

/* -------------------------------------------------------------------------- */
/*                                   Quiz 2                                   */
/* -------------------------------------------------------------------------- */

function getLastValue<T>(data: [...any, T]): T {
  return data[data.length - 1];
}

// const tc1 = getLastValue([1, 1]);
// const tc2 = getLastValue([1, "2"]);
// const tc3 = getLastValue([1, true]);
// const tc4 = getLastValue([1, undefined]);

/* -------------------------------------------------------------------------- */
/*                                   Quiz 3                                   */
/* -------------------------------------------------------------------------- */

function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  // let result = [];
  let result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const tc1: number[] = map([1, 2, 3], (item) => item);
const tc2: string[] = map([1, 2, 3], (item) => item.toString());
