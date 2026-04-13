const express = require('express');
const app = express();
app.get('/', (req, res) => {
    // res.set("content-type", "text/html");
    res.send("<h1>Hello World</h1>");
});
app.get('/about', (req, res) => {
    res.set("content-type", "text/html");
    res.send("<h1>About Us</h1>");
    res.end();
});
app.listen(5003);