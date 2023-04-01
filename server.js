const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "jsx");
app.set("jsx", require("express-react-views"));

app.listen(PORT, () => console.log(`${PORT} is listing!`));
