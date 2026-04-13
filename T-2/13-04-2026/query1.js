const express = require('express');
const app = express();

app.get('/data',(req,res)=>{
    var name = req.query.name;
    var age = req.query.age;
    var datas = req.query;
    console.log(typeof(name));
    console.log(typeof(datas));
    res.write(JSON.stringify(datas));
    res.write("Name = ${name} and Age = ${age}");
    res.send();
})
app.listen(1004);