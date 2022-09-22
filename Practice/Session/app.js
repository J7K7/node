//npm i express
//npm i express-session

const express = require('express');

const expressSession = require('express-session');

const app = express();

var sessionOptions = {
    secret: "secret",
    resave : true,
    saveUninitialized : false
};

app.use(expressSession(sessionOptions));

app.get('/', (req, res) =>{
    req.session.name = 'jai';
    res.send('Sessiom Set');
});

app.get('/get', (req, res) =>{
    res.send('Session Set ' + req.session.name);
});

app.listen(8000);
