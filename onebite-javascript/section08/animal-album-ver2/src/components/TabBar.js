export default function TabBar({ $app, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;

  this.$target = document.createElement("div"); // temp를 감싸는 div 생성
  this.$target.className = "tab-bar"; // class 설정
  $app.appendChild(this.$target); // $app요소에 target 요소 추가

  this.template = () => {
    let temp = `<div id="all">전체</div><div id="penguin">펭귄</div><div id="koala">코알라</div><div id="panda">판다</div>`;

    return temp;
  };

  // 화면 렌더링
  this.render = () => {
    // console.log(this.template());
    this.$target.innerHTML = this.template(); // this.template 함수의 반환 값 할당

    // onClick 함수 실행, 클래스 설정
    let $currentTab = document.getElementById(this.state); // 현재 state값과 동일한 아이디를 갖는 요소

    // (1) 삼항연산자 사용 ($currentTab이 존재한다면 ? 클래스 명을 clicked로 설정 : '')
    // $currentTab ? ($currentTab.className = "clicked") : "";
    // (2) AND 연산자(&&) 사용 ($currentTab이 참이면 오른쪽 코드 실행, 거짓이면 오른쪽 코드 실행 X)
    $currentTab && ($currentTab.className = "clicked");

    // 4개의 버튼을 감싸고 있는 $target 요소에
    // 클래스명이 tab-bar인 요소의 내부에 있는 모든 div 요소들을
    // $tabBar 변수에 담는다
    const $tabBar = this.$target.querySelectorAll("div");

    // 모든 버튼에 addEventListener 설정 (onClick 함수 실행행)
    $tabBar.forEach((elm) => {
      elm.addEventListener("click", () => {
        onClick(elm.id); // 어떤 버튼이 눌렸는 지 알기 위해 버튼의 id값 전달달
      });
    });
  };

  // state 값 업데이트
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
