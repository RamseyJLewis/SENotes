const content = document.getElementById('content');
const body = document.querySelector('body');



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
            let img = document.createElement('img');
            let buttons = document.createElement('id')
            let deleteButton = document.createElement('button');
            let viewButton = document.createElement('button');
            
            card.innerText = cars.make + ' - ' +cars.model
        
            img.setAttribute('src',`${cars.img}`);
            card.setAttribute('id', cars.id );
            card.setAttribute('class', 'card');
            buttons.setAttribute('class','carsButtonsConatiner')
            deleteButton.setAttribute('class','deleteButton');
            viewButton.setAttribute('class','viewButton');
            
            deleteButton.onclick = (event) => deleteCarsById(event); 
             deleteButton.innerText = `Delete: ${cars.make} - ${cars.model}`
             viewButton.onclick = (event) => viewCarsById(event); 
             viewButton.innerText = `View: ${cars.make} - ${cars.model}`
            console.log(cars)
           
            
            buttons.appendChild(viewButton);
            buttons.appendChild(deleteButton);
            card.appendChild(buttons);
            card.appendChild(img);
            content.appendChild(card);
        });
    })
    .catch(error => console.log(error))
}

function deleteCarsById(event){
    console.log(event.target.parentNode.id);

    fetch(`http://localhost:3000/cars/${event.target.parentNode.parentNode.id}`,{
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(getCars)
    .catch(error => console.log(error))
}

function viewCarsById(event){
        singleView.innerHTML = '<button onClick=hidePopup(event)>X</button>'
        singleView.setAttribute('syle', 'display; flex')
        fetch(`http://localhost:3000/cars/${event.target.parentNode.parentNode.id}`,{ 
           method : 'GET' 
            })
            .then(res => res.json())
            .then(cars =>{
            console.log(cars[0])
    
            let img = document.createElement('img');
            let make = document.createElement('div');
            let model = document.createElement('div');
            let price = document.createElement('div');
            let top_mph = document.createElement('div');
            singleView.setAttribute('style', 'display: flex')
            
            img.src = `${cars[0].img}`
            make.innerText = `Make:     ${cars[0].make}`
            model.innerText = `Model:   ${cars[0].model}`
            price.innerText = `Price:   $${cars[0].price}`
            top_mph.innerText = `Top_mph:     ${cars[0].top_mph}`

            singleView.appendChild(img);
            singleView.appendChild(make);
            singleView.appendChild(model);
            singleView.appendChild(price);
            singleView.appendChild(top_mph);
        })
        .catch(error => console.log(error))  
}

function hidePopup(event){
    singleView.setAttribute('style', 'display: none')
}
function editCarsById(){
    let id = document.getElementById('id').value;
    let cars = {
        img: document.getElementById('img').value,
        make: document.getElementById('make').value,
        model: document.getElementById('model').value,
        price: document.getElementById('price').value,
        top_mph: document.getElementById('top_mph').value,
    }

    fetch(`http://localhost:3000/cars/${id}`,{
    method: 'PUT',
    headers:{
        'Content-Type': 'application/json'
    },
    body : JSON.stringify(cars)
    })
    .then(getCars)
    .catch(error => console.log(error))
}


