const express = require("express");
const app = express();
const port = 3000;
const data = require("./data");

app.get("/", (req, res) => {
  res.send("PT solusi berkah");
});

app.get("/data/:arimatika/:number", data);

app.get("api/product", (req, res) => {
  res.json(product);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
