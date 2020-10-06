var body = document.querySelector('body');
var picture = document.querySelector('img');

var allButtons = document.querySelectorAll('button');

body.setAttribute('style', 'background-color : red');
picture.setAttribute('src', ' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLpyt-62kF06WqSTfVi-SpOAjhZ4vyK9HQhg&usqp=CAU')
picture.setAttribute('height', '250');


var newText = document.createElement('h1');


newText.innerHTML = 'SHINJI IKARI';

body.appendChild(newText);

function inputChange(event){


   var char = event.target.innerHTML;

   var screen = document.querySelector('#screen');

   screen.innerHTML += char;
}


function addAllEventListeners(arr){
    for(var i = 0; i < arr.length; i++ ){
        arr[i].addEventListener('click', inputChange);

    }
}
addAllEventListeners(allButtons)






