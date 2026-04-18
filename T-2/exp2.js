// Write expres js script to request server to display json object on browser 

const express = require('express');
const app = express();
var obj = {
    "name":"john",
    "age":30,
    "city":"New York"
}
app.get('/',(req,res)=>{
    res.set("content-type","application/json");
    res.send(obj);
})
app.listen(5007); 