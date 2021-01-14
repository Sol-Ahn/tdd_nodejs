const express = require("express");
const morgan = require("morgan"); // third-party middleware
const app = express();

function logger(req, res, next) {
  console.log("I am logger");
  next();
}

function logger2(req, res, next) {
  console.log("I am logger2");
  next();
}

function commonmw(req, res, next) {
  console.log("commonmw");
  next(new Error("error occurred"));
}

// error middleware
function errormw(err, req, res, next) {
  console.log(err.message);
  // 에러 처리
  next();
}

app.use(commonmw);
app.use(errormw);

app.use(logger);
app.use(logger2);
app.use(morgan("dev"));

app.listen(3000, () => console.log("Server is running..."));
