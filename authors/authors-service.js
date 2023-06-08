const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());

let authors = [
  { id: 1, name: "Author one" },
  { id: 2, name: "Author two" },
  { id: 3, name: "Author three" },
];

app.get("/authors", async (req, res) => {
  res.json(authors);
});

app.get("/authors/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const author = authors.find((data) => data.id === id);

  if (author) {
    res.json(author);
  } 
  else {

  res.status(404).json({ error: "Author non found" });
  }
});

app.listen(4000, () => {
  console.log("Started in 4000");
});
