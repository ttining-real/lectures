// CSS-in-JS
import "./style.css";

// 2. style 재활용
const roundBoxStyle = {
  position: "absolute",
  top: 50,
  left: 50,
  width: "50%",
  height: "200px",
  padding: 20,
  background: "rgba(162,216,235,0.6)",
  // 3. 속성은 camelCase
  borderRadius: 50,
};

function Styling() {
  return (
    <>
      <div
        style={{
          // 1. Object로 css 작성
          position: "relative",
          width: 400,
          height: 1000,
          background: "#f1f1f1",
        }}
      >
        <div style={roundBoxStyle}>Hello1</div>

        <div style={{ ...roundBoxStyle, top: 350 }}>
          {/* 4. className을 통한 스타일링 (CSS-in-JS) */}
          <div className='highlight'>Hello2</div>
        </div>

        <div style={{ ...roundBoxStyle, top: 650 }}>
          {/* 5. 조건적 스타일 */}
          <div className={1 + 1 === 2 ? "highlight" : ""}>Hello3</div>
          {/* <div className={1 + 1 === 2 && "highlight"}>Hello3</div> */}
        </div>
      </div>
    </>
  );
}

export default Styling;
