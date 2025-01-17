/* -------------------------------------------------------------------------- */
/*           Quiz 1. 영화 리뷰 정보 출력하기 (feat. 하얼빈 & 위키드)             */
/* -------------------------------------------------------------------------- */

function printMovieReview({ title, releaseYear, reviewers }) {
  const [firstReviewers] = reviewers;

  console.log(`제목 : ${title}`);
  console.log(`개봉 : ${releaseYear}`);
  console.log(`첫 번째 리뷰어 : ${firstReviewers || "리뷰어 미정"}`);
}

printMovieReview({
  title: "하얼빈",
  releaseYear: 2024,
  reviewers: ["박정민", "김효빈", "이정환"],
});

printMovieReview({
  title: "위키드",
  releaseYear: 2024,
  reviewers: [],
});

/* -------------------------------------------------------------------------- */
/*                         Quiz 2. 평균 성적 출력하기                           */
/* -------------------------------------------------------------------------- */

function printAvgScore(students) {
  // 여기에 코드를 작성하세요 ...
  for (const name in students) {
    const { scores } = students[name];

    let sum = 0;
    for (const score of scores) {
      sum += score;
    }

    const average = Math.floor(sum / scores.length);
    console.log(`${name} : ${average}`);
  }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});
