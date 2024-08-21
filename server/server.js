const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');




app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const loginRoute = require('./routes/loginroute.js');
app.use('/api/auth', loginRoute);


let server = http.createServer(app);
server.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("\nNode.js Server Up!");
    console.log("Server listening on: " + host + " port: " + port);
});
