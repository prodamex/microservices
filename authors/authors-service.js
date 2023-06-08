const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let authors = [
  { id: 1, name: "Author 1" },
  { id: 2, name: "Author 2" },
  { id: 3, name: "Author 3" },
];

app.get("/authors", async (req, res) => {
  res.json(authors);
});

app.get("/authors/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const author = authors.find((data) => data.id === id);

  if (author) {
    res.json(author);
  } else {
    res.status(404).json({ error: "Author non trouvé" });
  }
});

app.listen(4000, () => {
  console.log("App authors démarré sur le port 4000");
});
