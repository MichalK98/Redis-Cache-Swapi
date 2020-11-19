const express = require("express");
const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/people/:id", (req, res) => {
  console.log(req.params.id);
});

app.listen(port, () => {
  console.log(`Listen on http://localhost:${port}`);
});
