/* Create a Web Server that: 1) Accept a get request with a dynamic user-id in the url also accept additional data name and age 
using query parameters.
2) Extract the user-id, from route parameter name and age from query string 
3) Return json response containing all recieved data.
*/


const express = require ('express');
const app = express();
app.get('/user/:id',(req,res)=>{
    const userId = req.params.id;
    const name = req.query.name;
    const age = req.query.age;
    res.json({userId, name, age});
});
app.listen(8001);