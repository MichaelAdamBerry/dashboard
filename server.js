const express = require("express");

const app = express();

app.use(express.static("public"));

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js/index.js", express.static(__dirname + "/public/index.js"));

const server = app.listen(8081, () => {
  const port = server.address().port;
  console.log("server started at http://localhost:%s", port);
});
