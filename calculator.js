const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Passing data from the html form with body-parser
app.use(bodyParser.urlencoded({ extended: true })); 

// Root Directory
app.get("/", function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

// POST
app.post("/", function (req, res) {
    // Addition
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send(`${num1} plus ${num2} is equal to ${result}`);
});

// Server Setup
app.listen(3000, function () {
    console.log("Server running on Port 3000");
});