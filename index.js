// Hello World example
const express = require("express");
const morgan = require("morgan");
const app = express();
const users = [
  { id: 1, name: "alice" },
  { id: 2, name: "tom" },
  { id: 3, name: "chris" },
];

app.use(morgan("dev"));

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});

module.exports = app;
