const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Eu sou Full Cycle");
});

app.listen(("0.0.0.0", 3333), () => console.log("running server on 3333"));
