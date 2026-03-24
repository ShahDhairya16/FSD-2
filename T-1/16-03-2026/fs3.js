var fs = require("fs")
// fs.writeFileSync("test.txt","Hello Wolrd");
// console.log("Synchronous file created successfully");
// console.log('outside');
fs.writeFile("abc/test1.txt","Hello",function(err){
    if(err){
        console.log("Error: "+err);
    }
    else{
        console.log("Async Operation completed")
    }
})
console.log("outside")