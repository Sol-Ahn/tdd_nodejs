const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
let users = [
  { id: 1, name: "alice" },
  { id: 2, name: "tom" },
  { id: 3, name: "chris" },
];

app.use(morgan("dev"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) res.status(400).end();

  users = users.filter((user) => user.id !== id);
  res.status(204).end();
});

app.post("/users", (req, res) => {
  const name = req.body.name;
  if (!name) res.status(400).end();
  const isConflict = users.filter((user) => user.name === name).length;
  if (isConflict) res.status(409).end();
  const id = Date.now();
  const user = { id, name };
  users.push(user);
  res.status(201).json(user);
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) res.status(400).end();

  const name = req.body.name;
  if (!name) res.status(400).end();
  const isConfilct = users.filter((user) => user.name === name).length;
  if (isConfilct) res.status(409).end();

  const user = users.filter((user) => user.id === id)[0];
  if (!user) res.status(404).end();
  user.name = name;
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});

module.exports = app;
