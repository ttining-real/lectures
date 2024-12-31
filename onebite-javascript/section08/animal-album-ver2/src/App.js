import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

export default function App($app) {
  // 상태 정의 + 초기화
  this.state = {
    currentTab: "all",
    photos: [],
  };

  // TabBar 컴포넌트
  // 컴포넌트에 필요한 상태 & 기능 전달
  const tabBar = new TabBar({
    $app, // $app 전달
    initialState: "", // 컴포넌트의 초기 상태
    onClick: async (name) => {
      this.setState({
        ...this.state, // 기존 상태 유지
        currentTab: name, // name 전달
        photos: await request(name === "all" ? "" : name), // 배열 값을 request 함수의 결과 값으로 변경(새로운 사진 전달)
      });
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

  // 초기 상태 설정
  const init = async () => {
    // 모든 동물의 사진
    try {
      const initialPhotos = await request();
      this.setState({
        ...this.state, // 기존 상태 유지
        photos: initialPhotos, // 초기값 설정
      });
    } catch (err) {
      console.log(err);
    }
  };

  // 웹 애플리케이션이 실행될 때 init 함수가 실행되어야 함
  init();
}
