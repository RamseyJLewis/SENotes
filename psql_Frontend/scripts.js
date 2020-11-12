let content = document.getElementById('content')

function createCars(e){
    let cars = {
        img: document.getElementById('img').value,
        make: document.getElementById('make').value,
        model: document.getElementById('model').value,
        price: document.getElementById('price').value,
        top_mph: document.getElementById('top_mph').value,
    }
    fetch ('http://localhost:3000/cars',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(cars)
    })
    .then(res => res.json())
    .then( getCars)
    .catch(error => console.log(error))
}
function getCars(){
    content.innerHTML = '';
    fetch('http://localhost:3000/cars', { method: 'GET'})
    .then(res => res.json())
    .then(res =>{
        res.forEach(cars => {
            let card = document.createElement('div');
            let img = document.createElement('img')
            let deleteButton = document.createElement('button');
            
            card.innerText = cars.make + ' - ' +cars.model
        
            img.setAttribute('src',`${cars.img}`)
            card.setAttribute('id', cars.id )
            card.setAttribute('class', 'card')
            deleteButton.setAttribute('class','deleteButton')

            deleteButton.onclick = (event) => deleteCarsById(event); 
             deleteButton.innerText = `Delete: ${cars.make} - ${cars.model}`
            console.log(cars)
           
            card.appendChild(deleteButton)
            card.appendChild(img)
            content.appendChild(card)
        });
    })
    .catch(error => console.log(error))
}


function deleteCarsById(event){
    console.log(event.target.parentNode.id);

    fetch(`http://localhost:3000/cars/${event.target.parentNode.id}`,{
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(getCars)
    .catch(error => console.log(error))
}

