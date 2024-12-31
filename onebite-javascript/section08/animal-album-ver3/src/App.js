import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

export default function App($app) {
  // 상태 정의 + 초기화
  this.state = {
    // currentTab: "all",
    // URL 값에 따라 알맞은 값으로 변경
    currentTab: window.location.pathname.replace("/", "") || "all",
    photos: [],
  };

  // TabBar 컴포넌트
  // 컴포넌트에 필요한 상태 & 기능 전달
  const tabBar = new TabBar({
    $app, // $app 전달
    initialState: "", // 컴포넌트의 초기 상태
    onClick: async (name) => {
      // history API - 웹 페이지 라우팅 기능
      history.pushState(null, `${name} 사진`, name);
      // this.setState({
      //   ...this.state, // 기존 상태 유지
      //   currentTab: name, // name 전달
      //   photos: await request(name === "all" ? "" : name), // 배열 값을 request 함수의 결과 값으로 변경(새로운 사진 전달)
      // });
      this.updateContent(name);
    },
  });

  // Content 컴포넌트
  // 컴포넌트에 필요한 상태 & 기능 전달
  const content = new Content({
    $app,
    initialState: [],
  });

  // 상태 업데이트
  this.setState = (newState) => {
    this.state = newState;

    // 컴포넌트 상태 업데이트
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  // tabBar 컴포넌트와 onClick 메서드의 코드가 비슷함
  // this.updateContent 함수로 분리
  this.updateContent = async (tabName) => {
    try {
      const currentTab = tabName === "all" ? "" : tabName;
      const photos = await request(currentTab);
      this.setState({
        ...this.state, // 기존 상태 유지
        currentTab: tabName,
        photos: photos, // 초기값 설정
      });
    } catch (err) {
      console.log(err);
    }
  };

  // popstate
  // /penguin → penguin 사진 출력
  window.addEventListener("popstate", async () => {
    // URL의 '/' 제거(replace)
    // const tabName = window.location.pathname.replace("/", "") || "all";
    // // API 호출 결과 할당
    // const photos = await request(tabName === "all" ? "" : tabName);
    // // state 값 업데이트
    // this.setState({
    //   ...this.state, // 기존 state 값 유지
    //   currentTab: tabName, // currentTab 값 업데이트
    //   photos: photos,
    // });
    // popstate 이벤트가 발생할 때, url 뒤에 어떤 문자열이 있는지 판단하기 위해
    // 윈도우 객체의 location.pathname을 사용
    // console.log(window.location.pathname);
    this.updateContent(window.location.pathname.replace("/", ""));
  });

  // 초기 상태 설정
  const init = async () => {
    // 모든 동물의 사진
    // try {
    //   const currentTab = this.state.currentTab;
    //   const initialPhotos = await request(
    //     currentTab === "all" ? "" : currentTab
    //   );
    //   this.setState({
    //     ...this.state, // 기존 상태 유지
    //     photos: initialPhotos, // 초기값 설정
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    this.updateContent(this.state.currentTab);
  };

  // 웹 애플리케이션이 실행될 때 init 함수가 실행되어야 함
  init();
}
