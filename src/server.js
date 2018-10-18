
// todo move server out of front end src code
const path = require("path");
const express = require("express");

const DIST_DIR = path.join(__dirname, "../dist"),
    PORT = 8080,
    app = express();

const BUILD_DIR = path.join(__dirname, "../build");


app.use(express.static(BUILD_DIR));

app.get("*", function (req, res) {
    res.sendFile(path.join(BUILD_DIR, "index.html"));
});

app.listen(PORT);
