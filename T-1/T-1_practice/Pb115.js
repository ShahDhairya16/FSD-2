const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        // Home Page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <h1>Welcome to Home Page</h1>
            <a href="/about">About Us</a><br><br>
            <a href="/contact">Contact Us</a>
        `);
        res.end();
    }

    else if (req.url === '/about') {
        // About Us Page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <b style="color:blue;">Welcome to LJ University</b>
        `);
        res.end();
    }

    else if (req.url === '/contact') {
        // Contact Us Page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <i style="color:red;">Email: abc@ljinstitutes.edu.in</i>
        `);
        res.end();
    }

    else {
        // Page Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write("Page not found");
        res.end();
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});