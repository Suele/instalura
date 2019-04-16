const express = require("express");
const bodyParser = require("body-parser");
const routerLogin = require("./routes/login.js");
const routerTimeline = require("./routes/timeline.js");
const db = require("./db");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//rotas
app.use("/", routerLogin);
app.use("/timeline", routerTimeline);


app.listen(3001, () => {
  console.log(">>> server run");
});
