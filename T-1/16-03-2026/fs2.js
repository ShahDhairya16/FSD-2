var ps = require("fs")
//read Data from file and sort that data in ascending order using .sort function
ps.writeFileSync("s1.txt","50,-1,99,100,0,20,56,78,59"); 
data = ps.readFileSync("s1.txt","utf-8")
console.log(data);
da = data.split(",");
console.log(da);
d = da.sort((c, d) => c - d);
console.log(d)

