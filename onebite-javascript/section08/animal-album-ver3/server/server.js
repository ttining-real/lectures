// console.log("hello");

// express 모듈 불러오기
const express = require("express");

// path 모듈 불러오기 (파일 시스템의 경로 다루기)
const path = require("path");

// express 함수를 호출해서 express 애플리케이션 객체를 생성
const app = express();

// 포트 번호 설정
const PORT = 3000;

// 정적 파일을 제공하는 미들웨어 함수
// app.use(express.static(_dirname + "/.."));
app.use(express.static(path.join(__dirname, "..")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.listen(PORT, () => {
  console.log("START SERVER");
});
