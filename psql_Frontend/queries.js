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
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM cars WHERE id = $1', [id], (error,results) => {
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

const editCarsById = ( request, response) => {
    const {img, make, model, price, top_mph} = request.body;
    const id = parseInt (request.params.id);
    pool.query(`
    UPDATE cars SET img = $1, make= $2, model= $3, price= $4, top_mph =$5
    WHERE id = $6
    RETURNING *`,
    [img, make, model,price,top_mph,id],
    (error , results) => {
        if(error){
            throw error;
        }
        response.status(200).send(`people with id: ${id} update.`)
    })
}

module.exports = {
    getCars,
    getCarsById,
    createCars,
    deleteCarsById,
    editCarsById

}