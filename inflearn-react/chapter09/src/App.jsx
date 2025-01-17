import "./index.css";

import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import CompletionPage from "./pages/CompletionPage";
import SurveyPage from "./pages/SurveyPage";

function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path='/done' element={<CompletionPage />} />
          <Route path='/survey/:surveyId' element={<SurveyPage />}>
            <Route path=':step' />
          </Route>
        </Routes>
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e5e5e5;
`;

const Box = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 700px;
  min-height: 500px;
  padding: 60px 60px;
  border-radius: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
`;

/*

* "/survey" 경로에서 추가로 필요한 것 : 설문 ID
http://www.surveypie.com/survey?id=abc123
=> 전통적인 웹 서비스 방식 (id=abc123 : query-string)
=> query-string을 이용해 DB에서 데이터 api 요청을 보냄

http://www.surveypie.com/survey/abc123
=> query-string이 아닌, path에 포함하는 방식
=> ⚠️ 문제점 : abc123이 진짜 path인건지, 데이터를 담아둔 영역인건지 판단이 필요하다.
=> [URL Values](https://reactrouter.com/start/library/url-values)

✨ path='/survey/:surveyId/:step'
질문의 step을 state로 관리해서 화면만 바꿔주는 게 아니라,
라우터로서 관리를 해주는 것이 사용성 면에서 더욱 유리하다.

*/

export default App;
