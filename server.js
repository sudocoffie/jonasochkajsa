const express = require("express");
const serveStatic = require("serve-static");
const port = process.env.PORT || 8080;
const path = require("path");

const app = express();

//here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/dist")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.listen(port);
