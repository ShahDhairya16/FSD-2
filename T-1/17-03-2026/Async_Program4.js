// Write a node js script and json to perform below task:
// i) Write below object in s2.txt file.
// ii) Read data from the same file and perform below operations:
//      a) add a and b 
//      b) subtract second element of c and b(must be positive)
// iii) add the output of addition and subtraction below the object in s2.txt file.
 
var fs = require("fs")
const  data = {
    'd':
    {
        'a': 10,
        'b': 20,
        'c': [30, 10]
    }
}
fs.writeFile("s2.txt", JSON.stringify(data), function(err){
    if(err){
        console.log(err)
    }
    else{
        fs.readFile("s2.txt", "utf-8", function(err, data){
            if(err){
                console.log(err)
            }
            else{
                info = JSON.parse(data)
                console.log(data)
                var add = info.d.a + info.d.b
                if(info.d.c[1] > 0 &&  info.d.b>0){
                    var sub = Math.abs(info.d.c[1] - info.d.b)
                }
                fs.appendFile("s2.txt", `\nAddition: ${add} \nSubtraction: ${sub}`, function(err){
                    if(err){
                        console.log(err)
                    }
                    else{
                        fs.readFile("s2.txt", "utf-8", function(err, data){
                            if(err){
                                console.log(err)
                            }
                            else{
                                console.log(data)
                            }   
                    }
                )}
        })
    }})}})