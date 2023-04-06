const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

let items = ["Buy Food", "Cook Food", "eat food"];
let workItems = [];
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    let day = date.getDate();
    res.render("list", { titlePage: day, toDoItem: items });
})

app.get("/work", function (req, res) {
    res.render("list", { titlePage: "Work Page", toDoItem: workItems })
})

app.post("/", function (req, res) {


    let item = req.body.itemToDo;


    if (req.body.list === "Work Page") {
        workItems.push(item);
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/");
    }

})

app.listen(3000, function () {
    console.log("The server is running the portal 3000")
});