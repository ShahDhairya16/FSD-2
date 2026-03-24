// Write a Node JS script to write an array of object with properties name and age in file named
//Student.txt. then read the file and display the object on console.

var fs = require("fs")
const student = [
    {
        "name": "Dhairya",
        "age": 21
    },
    {
        "name": "Akash",
        "age": 22
    },
    {
        "name": "Vivek",
        "age": 23
    }
]
fs.writeFile("Student.txt", JSON.stringify(student), function(err){
    if(err){
        console.log(err)
    }
    else{
        fs.readFile("Student.txt","utf-8", function(err,data){
            if(err){
                console.log(err)
            }
            else{
                console.log(JSON.parse(data))
            }
        })      
            }
        })