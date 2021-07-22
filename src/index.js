const app = require("./express-app");
const port = process.env.PORT || 80;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
