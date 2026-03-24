//Write a Node JS program to parse the url and calculate the average of 3 numbers passed as query parameters. 

var url = require('url');
var urlString = 'http://localHost:8000/test?m1=50&m2=60&m3=70';
var q = url.parse(urlString, true);
console.log(q);
qdata = q.query;
console.log("Average of 3 numbers is: " + (parseInt(qdata.m1) + parseInt(qdata.m2) + parseInt(qdata.m3)) / 3);
process.noDeprecation = true;