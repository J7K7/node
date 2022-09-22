// npm i express
// npm i cookie-parser

const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/',(req, res) => {
    res.cookie('name', 'value', {expire: 360000 + Date.now()})
    res.send('Cookies added');
});

app.get('/getCookie', (req,res) => {
    res.send('Cookies = ' + req.cookies);
});

app.listen(8000);