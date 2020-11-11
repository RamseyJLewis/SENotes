const { request, response } = require('express');

const Pool = require('pg').Pool;
const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'cars',
    password: 'postgres',
    port: 5432,
})

const getcars = ( request, response) => {
    pool.query('SELECT * FROM cars', (error, result) => {
    if(error){
        throw error
    }
    response.status(200).json(result.rows)
    })
}
const getcarsById = (request, response) =>{
    const id = parseInt (request.param.id);

    pool.query('SELECT * FROM CARS WHERE id = $1', [id], (error,result) => {
        if(error){
            throw error
        }
        response.status(200).json(result.rows);
    });
}
const createCars = ( request, response) => {
    const {make, model} = request.body;

    pool.query('INSERT INTO cars (make, model) VALUES ($1,$2)  RETURNING *' [make, model], (error , results) => {
        if(error){
            throw error;
        }
        response.status(200).send(`cars added with names: ${make}, type: ${model}`)
    })
}
module.exports = {
    getcars,
    getcarsById,
    createCars
}