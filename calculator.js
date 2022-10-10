const express = require("express");
const app = express();

// Root Directory
app.get("/", function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

// Server Setup
app.listen(3000, function () {
    console.log("Server running on Port 3000");
});