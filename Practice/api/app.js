// npm install express
// npm install body-parser
//npm i ejs

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //home.ejs created in views folder
    res.render('home');
});


app.post('/post', (req, res) => {
    console.log(`Data = ${req.body.name}`);

    //Send Parameter to page
    res.render('form', {name:req.body.name});
});

app.listen(3000);