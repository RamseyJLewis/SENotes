var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d');


var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) /2;


var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

var brickRowCount = 5;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;


var score = 0;
var highscore = localStorage.getItem('highscore')
var lives = 3;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener('mousemove', mouseMoveHandler, false)

function mouseMoveHandler(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width){
        paddleX = relativeX - paddleWidth/2;
    }
}



///////////////////////////////     TEST START        /////////////////////////////////////////////////////////////////////
//instruction open
// ctx.beginPath()
// We are defining a rectangle using rect()
// the first two values specify the coordinates of the top left corner of the rectangle on the canvas
//the second two specify the width and height of the rectangle
// ctx.rect(20,40,50,50);
// The fillStyle property stores a color
// ctx.fillStyle = "#FF0000";
// color that will be used by the fill() method to paint the square,
// ctx.fill();
//instruction close
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240,160,20,0,Math.PI*2,false);
// ctx.fillStyle = 'green';
// ctx.fill();
// ctx.closePath();


// Instead of using fill() and filling the shapes with colors, we can use stroke() to only colour the outer stroke. 
// Try adding this code to your JavaScript too:

// ctx.beginPath();
// ctx.rect(160,10,100,40);
// ctx.strokeStyle = 'rgba(0,0 255,0.5)';
// ctx.stroke()
// ctx.closePath();
///////////////////////////////     TEST END    /////////////////////////////////////////////////////////////////////



// we will define a starting point at the bottom center part of the Canvas in variables called x and y, 
// then use those to define the position the circle is drawn at.

// setInterval the draw() function will be called every 10 milliseconds forever, or until we stop it.



function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}
function collisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          if(score == brickRowCount*brickColumnCount) {
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "green";
  ctx.fillText("Score: "+score, 8, 20);
}
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "green";
  ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy < ballRadius) {
    dy = -dy;
  }
  else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
        else {
        lives--;
        if(!lives) {
        alert("GAME OVER");
        document.location.reload();
      }
        else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width-paddleWidth)/2;
      }   
        if(highscore !== null){
        if (score > highscore) {
            localStorage.setItem("highscore" + score);      
        }
    }
        else{
        localStorage.setItem("highscore" + score);
    }
    
    }
  }

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

draw();