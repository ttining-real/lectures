// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해준다.

// async function getData() {
//   return {
//     name: "띠닝",
//     id: "ttining",
//   };
// }

// console.log(getData());

// 프로미스를 반환하는 함수라면
// async는 별 다른 동작을 하지 않고
// 그냥 프로미스를 반환하도록 내버려둔다.
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "띠닝",
        id: "ttining",
      });
    }, 1500);
  });
}

// console.log(getData());

// await
// sync 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// function printData() {
//   getData().then((result) => {
//     console.log(result);
//   });
// }

// printData();

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
