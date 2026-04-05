// Write a Node.js program that uses the URL module to parse query
// parameters from the following URL:
// http://localhost:3000/?name=yen&course=NodeJS
// The server should extract the values of name and course and display
// them in the browser response.
// Explain how the url.parse() method is used to retrieve query
// parameters

const url = require('url');
var u = "http://localhost:3000/?name=yen&course=NodeJS";
var q = url.parse(u,true);
console.log(q.query.name);
console.log(q.query.course);
process.noDeprecation = true;