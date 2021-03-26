require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000; //Delete

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/askAiden", (req, res) => {
    res.render("chatbot");
});

app.listen(process.env.PORT || port);