const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let categories = [
  { id: 1, name: "Categorie 1" },
  { id: 2, name: "Categorie 2" },
  { id: 3, name: "Categorie 3" },
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
    res.status(404).json({ error: "Categorie non trouvé" });
  }
});

app.listen(5000, () => {
  console.log("App categories démarré sur le port 5000");
});
