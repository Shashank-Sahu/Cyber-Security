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

app.listen(process.env.PORT || port, () => {
    console.log("Server Started at " + port);
});