/* -------------------------------------------------------------------------- */
/*                             인덱스트 엑세스 타입                            */
/* -------------------------------------------------------------------------- */

// Indexed Access Type
// 객체, 배열, 튜플에 모두 사용할 수 있다.

// 게시글 타입
// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 작성자 - id 출력하는 함수
// * author 매개변수 타입을 직접 정의
// 만약 Post 타입에 프로퍼티를 추가한다면? → 매개변수의 타입을 일일히 수정해야 한다.
// function printAuthorInfo(author: { id: number; name: string; age: number }) {
//   console.log(`${author.name} - ${author.id}`);
// }

// * 인덱스드 액세스 타입 사용
// function printAuthorInfo(author: Post["author"]) {
//   console.log(`${author.name} - ${author.id}`);
// }

function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

// Post 타입을 갖는 변수 post
// const post: Post = {
//   title: "게시글 제목",
//   content: "게시글 제목",
//   author: {
//     id: 1,
//     name: "ttining",
//     age: 100,
//   },
// };

const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 제목",
  author: {
    id: 1,
    name: "ttining",
    age: 100,
  },
};

printAuthorInfo(post.author);

// * 튜플
type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type Tup3 = Tup[3]; // 오류 발생

type TupNum = Tup[number]; // Tup 타입의 최적의 공통 타입을 추출한다.
