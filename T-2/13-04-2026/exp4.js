const express= require('express');
const app = express();
app.get('/user/:id',(req,res)=>{
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});
app.get("/calender/:day/event/:ename",(req,res)=>{
res.send(req.params);
})
app.listen(5017);