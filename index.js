const express = require("express");
const fetch = require("node-fetch");

const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.sendStatus(200);
});

// Make request to swapi
async function getPeople(req, res, next) {
  try {
    console.log("Fetching data...");

    const people = req.params.id;
    const response = await fetch(`https://swapi.dev/api/people/${people}`);
    const data = await response.json();
    
    res.send(data.name)
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

app.get("/people/:id", getPeople);

app.listen(port, () => {
  console.log(`Listen on http://localhost:${port}`);
});
