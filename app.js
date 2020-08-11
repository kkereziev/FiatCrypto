var express = require("express");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var priceRouter = require("./routes/price");
var fiatRouter = require("./routes/fiat");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/", indexRouter);
app.use("/price", priceRouter);
app.use("/fiat", fiatRouter);

module.exports = app; //export as module
