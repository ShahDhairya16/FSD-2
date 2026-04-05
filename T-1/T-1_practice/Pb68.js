// Write a Node.js program using the path module to take a file path
// '/user/docs/report.txt' and print:
// The directory name
// The base file name
// The file extension

var path = require('path');
var filePath = '/user/docs/report.txt';
var f = path.parse(filePath);
console.log(f);
console.log(f.dir);
console.log(f.base);
console.log(f.ext);