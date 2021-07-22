const express = require("express");
const cors = require("cors");
const app = express();

const delayMiddleware = function (req, res, next) {

  next();
};

const { cocktails, ingredients } = require("./data");

app.use(cors());
app.use(m)

app.get("/cocktails", function (req, res, next) {
  res.json(cocktails);
});

app.get("/ingredients/:id", function (req, res, next) {
  const foundIngredient = ingredients.find(({ id }) => id === req.params.id);
  if (!foundIngredient) {
    res.status(404).json({ error: "NOT FOUND" });
    return;
  }
  res.json(foundIngredient);
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
