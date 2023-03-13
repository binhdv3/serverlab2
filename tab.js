const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var http = require('http');
var fs = require('fs');
var a = 1;
var b = 2;
const cacurator = require("./Cacurator");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(a +" + "+ b+" = "+ cacurator.Addnumber(a,b)+ "--------");
    res.write(a +" * "+ b+" = "+ cacurator.Subtract(a,b)+ "--------");
    res.write(a +" / "+ b+" = "+ cacurator.Multiply(a,b));
    return res.end();
  
}).listen(3000);

