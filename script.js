let canvas = document.querySelector("#canvas")

let ctx = canvas.getContext("2d")

let width = canvas.width;
let height = canvas.height;

let xSpeed = 4;
let ySpeed = 2;

const PADDLE_WIDTH = 5;
const  PADDLE_HEIGHT = 20;
const  PADDLE_OFFSET = 20;

let leftPaddleTop = 10;
let rightPaddleTop = 30;

const BALL_SIZE = 6;
let ballPosition = {x: 20, y:30}

document.addEventListener("mousemove", e =>{
  rightPaddleTop = e.y - canvas.offsetTop;
})
function draw(){


  ctx.fillStyle = "#BF6900";
  ctx.fillRect(0,0,width, height)
  
  // Draw the ball
  ctx.fillStyle = "white"
  ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE)
  // Draw the paddle

  ctx.fillRect(
    PADDLE_OFFSET,
    leftPaddleTop,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
  )
  ctx.fillRect(
    width - PADDLE_WIDTH - PADDLE_OFFSET,
    rightPaddleTop,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
    )
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

//Check collision ;

function checkCollision(){
  let ball = {
    left: ballPosition.x,
    right:ballPosition.x + BALL_SIZE,
    top: ballPosition.y,
    bottom: ballPosition.y + BALL_SIZE
  }

  if(ball.left < 0 || ball.right > width){
    xSpeed = -xSpeed;
  }

  if(ball.top < 0 || ball.bottom > height){
    ySpeed = -ySpeed;
  }
}




function gameLoop(){
  draw();
  update();
  checkCollision();
  //call this function again after a timeout
  setTimeout(gameLoop,30)
}
gameLoop();






 