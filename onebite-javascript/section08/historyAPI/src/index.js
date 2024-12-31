const changePage = (page) => {
  let $content = document.getElementById("content");
  $content.textContent = `현재 보고 있는 페이지는 ${page} 페이지 입니다.`;

  // 히스토리 api 사용하기 - history.pushState(state, title, url);
  // 페이지가 이동될 때마다 히스토리 객체를 사용해서 이동한 페이지의 정보를 저장
  history.pushState({ page: page }, `Title ${page}`, `/${page}`);
};

// 윈도우 객체의 popstate
window.addEventListener("popstate", (event) => {
  // 만약, 전달받은 event의 state 값이 null이 아니라면
  // 웹 페이지에 나오는 텍스트를 알맞은 페이지로 설정
  if (event.state) {
    let $content = document.getElementById("content");
    $content.textContent = `현재 보고 있는 페이지는 ${event.state.page} 페이지 입니다.`;
  }
});

document.getElementById("page1").addEventListener("click", () => {
  changePage("page1");
});
document.getElementById("page2").addEventListener("click", () => {
  changePage("page2");
});
document.getElementById("page3").addEventListener("click", () => {
  changePage("page3");
});

// 뒤로 가기
const goBack = () => {
  history.back();
};
document.getElementById("goBack").addEventListener("click", goBack);

// 앞으로 가기
const goForward = () => {
  history.forward();
};
document.getElementById("goForward").addEventListener("click", goForward);
