/* -------------------------------------------------------------------------- */
/*                                  프로미스                                   */
/* -------------------------------------------------------------------------- */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~~~ 때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // 20
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

// * 프로미스를 반환하는 함수의 타입 정의

// 서버로부터 하나의 게시글의 데이터를 불러오는 함수를 만들어야 하는 상황

// 게시글의 타입 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

// 게시글 하나를 불러오는 함수
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 내용",
      });
    }, 3000);
  });
}

// fetchPost 함수 호출의 결과값을 담는 변수
const postRequest = fetchPost(); // Promise 객체가 담긴다.

// 결과값 처리
postRequest.then((post) => {
  post.id;
});
