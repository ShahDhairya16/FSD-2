// Write a JSON file that async writes data to a file named test.js. 
// If no error occurs during the writing process,, the script should then append additional data to the sync file
// Finally it should read the content and display in the console. 

var fs = require("fs")
fs.writeFile("test.js", "Dhairya Shah", function(err) {
    if(err){
        console.log(err)
    }
    else{
        fs.appendFile("test.js", " Hello World", function(err){
            if(err){
                console.log(err);
            }
            else{
                fs.readFile("test.js", "utf-8", function(err, data){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(data);
                    }
                })
            }
        })
    }})
    