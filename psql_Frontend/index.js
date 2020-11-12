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

app.get('/cars', db.getCars);
app.get('/cars/:id', db.getCarsById); 
app.post('/cars', db.createCars);
app.delete('/cars/:id', db.deleteCarsById);

app.listen(port, () => {
    console.log(`APP running on port ${port} `)
})