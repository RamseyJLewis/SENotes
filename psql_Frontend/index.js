const express = require('express');
const bodyParser = require('body-parser');
const { request, response } = require('express');
const app = express();
const db = require('./queries');
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extneded: true,
    })
);

// CRUD - Add Get Edit Delete 

app.get('/',(request,response) => {
    response.json({info: 'Node.js, express, and Postgres API'})
})

app.get('/cars', db.getcars);
app.get('/cars/:id', db.getcarsById); 

app.listen(port, () => {
    console.log(`APP running on port ${port} `)
})