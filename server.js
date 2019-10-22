const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "hello world"
  });
});

app.listen(process.env.PORT, () => {
  console.log("listening to port " + process.env.PORT);
});

module.exports = app;
