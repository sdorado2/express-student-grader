const express = require("express");
const app = express();
const PORT = 3000;
const students = require("./models/student");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("TEST VIEW");
});

app.get("/students", (req, res) => {
  res.render("Index", { students: students });
});

app.get("/students/new", (req, res) => {
  res.render("New");
});

app.get("/students/:student", (req, res) => {
  res.render("Show", { student: students[req.params.student] });
});

app.listen(PORT, () => console.log(`${PORT} is listing!`));
