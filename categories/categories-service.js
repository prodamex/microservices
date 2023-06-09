const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let categories = [
  { id: 1, name: "Categorie one" },
  { id: 2, name: "Categorie two" },
  { id: 3, name: "Categorie three" },
];

app.get("/categories", async (req, res) => {
  res.json(categories);
});

app.get("/categories/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const category = categories.find((data) => data.id === id);

  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ error: "Categorie none found" });
  }
});

app.listen(5000, () => {
  console.log("Started in 5000");
});
