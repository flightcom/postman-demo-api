const express = require('express');
const jwt = require('express-jwt');
const bodyParser = require('body-parser');
const env = require('dotenv').config();

// Constants
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const SECRET_TOKEN = process.env.SECRET_TOKEN;

// App
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.get('/hello', (req, res) => {
  res.send('Hello World\n');
});

// Login
app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password;

    const user = { email, password };

    console.log(user);

    // rewart
    // https://github.com/auth0/node-jsonwebtoken
    // Using SECRET_TOKEN, create a token string that contains the user's _id from the database.
    // var token = JWT.sign(user, SECRET_TOKEN);

    // Send the response with 200 status code (ok) and the user object + the token
    // The client will send the token with every future request
    // against secured API endpoints.
    // res.status(200).send({ user, token });
    res.status(200).send( user );
  });

app.get('/user/:id', (req, res) => {
    const user = {
        id: Number(req.params.id),
        firstname: 'John',
        lastname: 'Doe'
    };
    res.json(user);
});

app.get('/test/:id', (req, res) => {
    const user = {
        firstname: 'TEST',
        lastname: 'TEST'
    };
    res.json(user);
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
