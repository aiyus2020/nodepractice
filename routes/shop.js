const express = require("express");
const rootDir = require("../utlis/path");

const path = require("path");
const shops = express.Router();
shops.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = shops;
