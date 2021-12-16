/* eslint-disable no-unused-vars */
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
var cors = require("cors");

const productsRouter = require("./routes/products");
// const usersRouter = require("./routes/products");
const supplierRouter = require("./routes/suppliers");
const categoryRouter = require("./routes/categories");
const paymentRouter = require("./routes/payment");

const app = express();
app.use(cors());
// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/products", productsRouter);
app.use("/suppliers", supplierRouter);
app.use("/categories", categoryRouter);
app.use("/payment", paymentRouter);

// catch 404 and forward to error handler
app.use(function (req, res) {
  res.sendStatus(404);
});
// error handler
app.use(function (err, req, res, next) {
  console.error(err);
  res.sendStatus(500);
});

module.exports = app;
