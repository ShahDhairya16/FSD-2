/*Write an express js script to define one json array of 3 objects having properties name and age
sort this object according to age. If user request sorted names in url then all names 
along with age should be displayed in sorted order in decending order also display this sorted values 
on "sortpage" and display json object on home page.*/

const express = require('express');
const app = express();
student = [
    {
        name: "john",
        age: 30
    },
    {
        name: "doe",
        age: 25
    },
    {
        name: "smith",
        age: 35
    }
]
app.get('/',(req,res)=>{
    res.set("content-type","application/json");
    res.json(student);
})
app.get('/sortpage',(req,res)=>{
    
    res.set("content-type","text/html");
    var des = student.sort((a,b)=>b.age-a.age);
    for (k of des){
        res.write(k.name+" = "+k.age);
    }
    res.send();
})
app.listen(5013);