const { request, response } = require('express');

const Pool = require('pg').Pool;
const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'cars',
    password: 'postgres',
    port: 5432,
})

const getCars = ( request, response) => {
    pool.query('SELECT * FROM cars', (error, results) => {
    if(error){
        throw error
    }
    response.status(200).json(results.rows)
    })
}
const getCarsById = (request, response) =>{
    const id = parseInt (request.param.id);

    pool.query('SELECT * FROM CARS WHERE id = $1', [id], (error,results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows);
    });
}
const createCars = ( request, response) => {
    const {img, make, model, price, top_mph} = request.body;

    pool.query('INSERT INTO cars (img, make, model, price, top_mph) VALUES ($1,$2,$3,$4,$5)  RETURNING *', [img, make, model,price,top_mph], (error , results) => {
        if(error){
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

const deleteCarsById = (request, response) =>{
    const id = parseInt (request.params.id);

    pool.query('DELETE FROM cars WHERE id = $1', [id], (error, results)=>{
        if(error){
            throw error;
        }
        response.status(200).json(results.rows);
        console.log(`cars id: ${id} was deleted `)
    });
}
module.exports = {
    getCars,
    getCarsById,
    createCars,
    deleteCarsById
}