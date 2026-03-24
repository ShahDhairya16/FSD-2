// Create JSON object which contains array of object. Calculate Perimeter of square and perimeter of circle by using side value and diameter value respectively.
// Write object as well as perimeter values of square and circle in shape.txt file.

var fs = require("fs")
const shape = [{
    "shape": "square",
    "side": 5,
},
{
    "shape": "circle",
    "diameter": 10,
    
}]

fs.writeFile("shape.txt", JSON.stringify(shape), function(err){
    if(err){
        console.log(err)    
    }
    else{
        fs.readFile("shape.txt", "utf-8", function(err, data){
            if(err){
                console.log(err)
            }
            else{
                console.log(JSON.parse(data))
            }
        })
    }
})