const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// 개발을 계속 하다보면 routing 조건문이 너무 길어지게 됨. => express framework를 사용하는 이유!
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
  } else if (req.url === "/users") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("User list");
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

// listen: 서버를 요청 대기 상태로 만들어주는 함수
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
