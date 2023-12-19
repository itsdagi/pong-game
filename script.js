let canvas = document.querySelector("#canvas")

let ctx = canvas.getContext("2d")

let width = canvas.width;
let height = canvas.height;

let xSpeed = 4;
let ySpeed = 2;

const BALL_SIZE = 6;
let ballPosition = {x: 20, y:30}

function draw(){


  ctx.fillStyle = "darkorange";
  ctx.fillRect(0,0,width, height)
  
  
  ctx.fillStyle = "white"
  ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE)
  
}

draw();

// Almost all games contain game loop that orchestrates everything that has to happen for each frame of the game. Game loops are similar to animation loops. ut with some additional logic. here is the general shape of the game loop in most games:

// Clear canvas
// Draw image
// get player input
// Update state
// Check collisions
// Wait a short time 
// Repeat 

function update(){
  ballPosition.x += xSpeed;
  ballPosition.y += ySpeed;
}

function gameLoop(){
  draw();
  update();
}
gameLoop();











 