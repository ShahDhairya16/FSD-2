/*   
1) From the given existing file path "LJ/sample.txt" extract the directory name using path module 
2) Create the directoory using fs module 
3) Extract the file name from the given path.
4) Create that file inside the nealy created directory and write some data into it.
5) Copy the content of this file into another file). delete the originale file after copying.
*/

var fs = require("fs")
var path = require("path")

// var dir = path.dirname("LJ/sample.txt")
// fs.mkdirSync(dir)
var file = path.basename("LJ/sample.txt")
// fs.writeFileSync("LJ/sample.txt", "Hello World")
// fs.copyFileSync("LJ/sample.txt", "LJ/temp.txt")
fs.unlinkSync("LJ/sample.txt")




/*
Q-1 setTimeout console log kind of function are of browser component and we canno access windows on node js so how can we access it in node js?
*/