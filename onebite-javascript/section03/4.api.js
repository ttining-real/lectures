// https://jsonplaceholder.typicode.com/users

// API 호출 테스트
// let test = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(test);
// Promise 객체가 반환됨

// then과 catch 사용
// let response = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// console.log(response);

// async & await 사용
// const getData = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(response);
// };

// getData();

// JSON 형식 데이터 얻기
// const getData = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   console.log(response);
//   console.log(data);
// };

// getData();

// try와 catch문을 사용해 에러 처리 하기
const getData = async () => {
  try {
    let response = await fetch("https://jsonplaceholer.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getData();
