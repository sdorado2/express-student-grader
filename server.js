const express = require("express");
const app = express();
const PORT = 3000;
const students = require("./models/student");
const path = require("path");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use((req, res, next) => {
  console.log("Running");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
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

app.post("/students", (req, res) => {
  students.push(req.body);
  console.log("🚀  file: server.js:32  app.post  students:", students);
  res.redirect("/students");
});

app.listen(PORT, () => console.log(`${PORT} is listing!`));
