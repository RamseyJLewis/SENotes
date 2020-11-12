const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./queries');
const port = 3000

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extneded: true,
    })
);

app.get('/',(request,response) => {
    response.json({info: 'Node.js, express, and Postgres API'})
})

app.get('/cars', db.getcars);
app.get('/cars/:id', db.getcarsById); 
app.get('/cars', db.createCars);

app.listen(port, () => {
    console.log(`APP running on port ${port} `)
})