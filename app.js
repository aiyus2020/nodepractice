const express = require("express");
const path = require("path");
const myAdminRouter = require("./routes/admin");
const myShopRouter = require("./routes/shop");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", myAdminRouter);
app.use(myShopRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not.html"));
});
//creating a server....
app.listen(3000);
//the eventloop handling all request can be stop by
// process.exit
