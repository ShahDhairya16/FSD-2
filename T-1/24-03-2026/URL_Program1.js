// Write Node JS script to fetch the query String from the static url and check if year is leap or not.
var url = require('url');
var addr = "https://localhost:8080/default.html?year=2025&month=feb";
q = url.parse(addr, true);
console.log(q);
qdata = q.query;
console.log(qdata.year);

if(qdata.year % 4 == 0 ){
    console.log("Leap Year");
}
else{
    console.log("Not a Leap Year")
}

process.noDeprecation = true;