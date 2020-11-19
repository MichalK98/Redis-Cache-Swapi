const express = require("express");
const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Listen on http://localhost:${port}`);
})
