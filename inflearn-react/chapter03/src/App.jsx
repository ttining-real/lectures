// import "./App.css";
import CourseCard from "./components/CourseCard";

function App() {
  return (
    <div style={{ padding: 30 }}>
      <CourseCard
        img='https://dst6jalxvbuf5.cloudfront.net/media/images/Course/cover_image/220228_161957/%E1%84%8F%E1%85%A9%E1%84%89%E1%85%B3%E1%84%8F%E1%85%A1%E1%84%83%E1%85%B3_%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3%E1%86%B8%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A5%E1%86%BC_PC.png'
        tags={["발표", "패키지", "최대할인"]}
        title='7일만에 끝내는 무자본 글쓰기 수익화 패키지'
        startPrice={349000}
        types={["동영상 강의", "dd"]}
      />
    </div>
  );
}

export default App;
