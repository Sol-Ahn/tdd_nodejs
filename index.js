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
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10);
  if (Number.isNaN(limit)) res.status(400).end();
  res.json(users.slice(0, limit));
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) res.status(400).end();
  const user = users.filter((user) => user.id === id)[0];
  if (!user) res.status(404).end();
  res.json(user);
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});

module.exports = app;
