const express = require("express");
const app = express();
const PORT = 3000;
const { student } = require("./models/students");

app.set("view engine", "jsx");
app.set("jsx", require("express-react-views").createEngine());

app.get("/", (req, res) => {
  res.send("TEST VIEW");
});

app.set("/students", (req, res) => {
  res.render("Index");
});

app.listen(PORT, () => console.log(`${PORT} is listing!`));
