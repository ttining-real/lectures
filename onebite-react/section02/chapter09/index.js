// 5가지 배열 변형 메서드
// * 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "ttining", hobby: "테니스" },
  { name: "anggeol", hobby: "테니스" },
  { name: "꽝꽝이", hobby: "깡-" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

console.log(tennisPeople);
// ✅ 결과
// 0: {name: 'ttining', hobby: '테니스'}
// 1: {name: 'anggeol', hobby: '테니스'}

const tennisPeople2 = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople2);

console.clear();

// * 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백 함수를 실행하고
// 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];

arr2.map((item, index, arr) => {
  // console.log(index, item);
  // ✅ 결과
  // 0 1
  // 1 2
  // 2 3
});

const mapResult = arr2.map((item, index, arr) => {
  return item * 2;
});

console.log(mapResult); // [2, 4, 6]

// 활용
let names = arr1.map((item) => item.name);

console.log(names); // ['ttining', 'anggeol', '꽝꽝이']

console.clear();

// * 3. sort
// 배열을 사전순으로 정렬하는 메서드 (원본 배열 정렬)

let arr3 = ["b", "c", "a"];

arr3.sort();
console.log(arr3); // ['a', 'b', 'c']

let arr4 = [10, 3, 5];

arr4.sort();
console.log(arr4); // [10, 3, 5]

// 오름차순 정렬
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 위치
    return 1; // → b, a 배치
  } else if (a < b) {
    // a가 b 앞에 위치
    return -1; // → a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 않고 위치
    return 0; // → a, b 자리를 그대로 유지
  }
});

console.log(arr4); // [3, 5, 10]

// 내림차순 정렬
arr4.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 위치
    return -1;
  } else if (a < b) {
    // b가 a 앞에 위치
    return 1;
  } else {
    // 두 값의 자리를 바꾸지 않고 유지
    return 0;
  }
});

console.log(arr4); // [10, 5, 3]

console.clear();

// * 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5); // ['c', 'a', 'b']
console.log(sorted); // ['a', 'b', 'c']

console.clear();

// * 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "ttining"];
let joined = arr6.join();
let joined2 = arr6.join(" ");

console.log(joined); // hi,im,ttining
console.log(joined2); // hi im ttining
