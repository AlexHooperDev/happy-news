const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
const Parser = require("./newsParser");

app.use(cors());

function Routes(articles) {
  app.get("/stories", (req, res) => {
    res.send({ articles });
  });

  app.listen(port, () => console.log("Example app is lstening on port 4000"));
}

module.exports = Routes;
