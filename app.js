const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];

app.get("/", function (req, res) {
  const today = date.getDate();
  console.log(date.getDay());
  res.render("list", { listTitle: today, newListItem: items });
});

app.post("/", function (req, res) {
  console.log(req.body);
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
    console.log("yes");
  } else {
    console.log("hi");
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", newListItem: workItems });
});

app.post("/work", function (req, res) {
  res.render("/work");
});

app.get("/about", function (req, res) {
  console.log("hi");
  res.render("about");
});

app.listen(3000, function (req, res) {
  console.log("Port 3000 is open for service!");
});
