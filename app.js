const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let items = ["Buy food", "Cook food", "Eat food"];

app.get("/", function (req, res) {
  let day = new Date();
  let currentDay = day.getDay();
  let options = { weekday: "long", month: "long", day: "numeric" };
  let today = day.toLocaleString("en-US", options);
  console.log(today);
  res.render("list", { kindOfDay: today, newListItem: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function (req, res) {
  console.log("Port 3000 is open for service!");
});
