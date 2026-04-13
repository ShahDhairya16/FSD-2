/*create a basic web application that 
1) displays a form on home page to enter users name. 
2) Sneds the form data to the server using a post request and display the name on the browser.
3) the server shoul d read the submitted name and display a message confirmaing the login*/

const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send(`
            <form action= "/user" method="post">
                <input type="text" name="username" placeholder="Enter your name">
                <button type="submit">Submit</button>
            </form>
    `);
})
app.post('/user',(req,res)=>{
    const username = req.body.username;
    res.send(`Hello, ${username}! You have successfully logged in.`);
})
app.listen(1006);
