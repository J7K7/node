//npm i express
//npm i dotenv
//npm i jsonwebtoken

const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const app = express();

app.post("/generateToken", (req,res) => {
    let jwtKey = "secret";
    let data = {
        time: Date(),
        userId: 12
    }

    const token = jwt.sign(data, jwtKey);

    process.env.TOKEN_HEADER = token;

    res.send(token);



});


app.get("/",(req,res) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER;
    let jwtSecurityKey = 'secret';
    try {
        const token = tokenHeaderKey;
        const verified = jwt.verify(token, jwtSecurityKey);
        if(verified){
            return res.send('Verifed Successfully !!');
        }
        else{
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
});

app.listen(3000);
