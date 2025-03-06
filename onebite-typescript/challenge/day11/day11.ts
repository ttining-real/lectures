/* -------------------------------------------------------------------------- */
/*                                   Quiz 1                                   */
/* -------------------------------------------------------------------------- */

interface Video {
  playTime: number;
}

interface Book {
  pageNumber: number;
}

interface Content<T> {
  name: string;
  info: T;
}

function watchVideo(content: Content<Video>) {
  console.log(`${content.info.playTime}시간의 강의를 시청함`);
}

function readBook(content: Content<Book>) {
  console.log(`${content.info.pageNumber}권의 책을 읽음`);
}

watchVideo({
  name: "한 입 크기로 잘라먹는 타입스크립트",
  info: {
    playTime: 10.5,
  },
});

readBook({
  name: "한 입 크기로 잘라먹는 리액트",
  info: {
    pageNumber: 700,
  },
});

/* -------------------------------------------------------------------------- */
/*                                   Quiz 2                                   */
/* -------------------------------------------------------------------------- */

interface UserComment {
  id: number;
  author: string;
  content: string;
}

function getUserComments(): Promise<UserComment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          author: "이정환 & 김효빈",
          content: "한입 FE 챌린지! 완강까지 화이팅!",
        },
      ]);
    }, 2000);
  });
}
