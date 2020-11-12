let content = document.getElementById('content')

function addCars(e){
    let cars = {
        make: document.getElementById('make'),
        model: document.getElementById('model')
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
function getCars(){
    // container.innerHTML = '';
    fetch('http://localhost:3000/cars', { method: 'GET'})
    .then(res => res.json())
    .then(res =>{
        res.forEach(cars => {
            let card = document.createElement('div');
            let img = document.createElement('img')
            
            card.innerText = cars.make
        
            img.setAttribute('src',`${cars.img}`)
            card.setAttribute('class', 'card')
            console.log(cars)
           

            card.appendChild(img)
            content.appendChild(card)
        });
    })
    .catch(error => console.log(error))
}

