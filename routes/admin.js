const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../utlis/path");
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
router.use("/product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "product.html"));
});

module.exports = router;
