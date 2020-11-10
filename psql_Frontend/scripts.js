function addCars(e){
    let cars = {
        make: 'Alpha Romero',
        model:'Galdia'
    }
    fetch ('https://http://localhost:3000/cars',{
        methods: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body : JSON.stringify(cars)
    })
    .then(res => console.log(res))
    .then(res => res.json())
    .catch(error => console.log(error))
}

addCars()