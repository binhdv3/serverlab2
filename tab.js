const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var http = require('http');
var fs = require('fs');
const cacurator = require("./Cacurator.js");
const { addAbortSignal } = require("stream");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/tab.html");
});

app.post("/", function (req, res) {
    const a = Number(req.body.number_a);
    const b = Number(req.body.number_b);
    const add = cacurator.Addnumber(a, b);
    const sub = cacurator.Subtract(a, b);
    const multiply = cacurator.Multiply(a, b);
    const hieu = cacurator.Hieu(a, b);

    res.send("Tổng: " + add +
        "\n---- Hiệu: " + hieu +
        "\n---- Tích: " + sub +
        "\n---- Thương: " + multiply);
});

app.listen(8080);
