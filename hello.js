// var http = require("http");
// var url = require("url");

// http.createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" }); //If the response from the HTTP server is supposed to be displayed as HTML,
//     //    you should include an HTTP header with the correct content type:
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.write("Hello World!"); //write a response to the client
//     res.end(txt); //end the response
//   }).listen(8080); //the server object listens on port 8080

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
