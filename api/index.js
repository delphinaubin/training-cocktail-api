const express = require("express");
const cors = require("cors");
const app = express();

const waitFor = (delayInSecond) =>
  new Promise((resolve) => setTimeout(resolve, delayInSecond * 1000));

const delayMiddleware = async (req, res, next) => {
  if (req.query.delay) {
    await waitFor(+req.query.delay);
  }
  next();
};

const { cocktails, ingredients } = require("./data");

app.use(cors());
app.use(delayMiddleware);

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
  console.log("Listening on port 80");
});
