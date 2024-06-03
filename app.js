const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // "/"페이지로 들어갔을 때, 해당 기능을 수행하겠다는 의미
  res.send("여기는 root입니다.");
});

app.get("/login", (req, res) => {
  res.send("여기는 로그인입니다.");
});

/*node app.js 를 사용하면 실행이 가능
node.js v8엔진은 크롬브라우저에서도 사용되는 자바스크립트 컴파일러
*/
app.listen(3000, (req, res) => {
  console.log("서버가동");
});
