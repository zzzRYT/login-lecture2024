//내장 모듈이라 npm이 필요없음
const http = require("http");
const app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (req.url === "/") {
    res.end("여기는 root입니다.");
  } else if (req.url === "/login") {
    res.end("여기는 로그인입니다.");
  }
});

app.listen(3001, () => {
  console.log("http로 가동된 서버 입니다.");
});

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   // "/"페이지로 들어갔을 때, 해당 기능을 수행하겠다는 의미
//   res.send("여기는 root입니다.");
// });

// app.get("/login", (req, res) => {
//   res.send("여기는 로그인입니다.");
// });

// /*node app.js 를 사용하면 실행이 가능
// node.js v8엔진은 크롬브라우저에서도 사용되는 자바스크립트 컴파일러
// */
// app.listen(3000, (req, res) => {
//   console.log("서버가동");
// });
