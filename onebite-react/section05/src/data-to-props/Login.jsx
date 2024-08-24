import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './Main.css';

// App 컴포넌트 → 조상 컴포넌트 (Root 컴포넌트)
// 부모 컴포넌트
function App() {
  const user = {
    name: 'ttining',
    isLogin: true,
  };

  if (user.isLogin) {
    return (
      // <div
      //   style={{
      //     display: "inline-block",
      //     padding: "4px",
      //     borderRadius: "4px",
      //     backgroundColor: "#e0e0e0",
      //   }}
      // >
      //   로그인
      // </div>
      <div className="login">로그인</div>
    );
  } else {
    return <div>로그아웃</div>;
  }

  // return (
  //   <>
  //     {user.isLogin ? <div>로그인</div> : <div>로그아웃</div>}
  //     {/* 자식 컴포넌트 */}
  //     <Header />
  //     <Main />
  //     <Footer />
  //   </>
  // );
}

export default App;
