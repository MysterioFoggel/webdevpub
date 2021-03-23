var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRad = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var filler = "rgb(100, 200, 100)";

var rightPressed = false;
var leftPressed = false;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;

function drawPaddle() {
    if(rightPressed) {
        paddleX += 4;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= 4;
        if (paddleX < 0){
            paddleX = 0;
        }
    }

    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight * 2, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return "rgb(" + (Math.floor(Math.random() * (max - min + 1)) + min).toString() + "," + 
    (Math.floor(Math.random() * (max - min + 1)) + min).toString() + "," + 
    (Math.floor(Math.random() * (max - min + 1)) + min).toString() + ")";
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRad, 0, Math.PI*2);
    ctx.fillStyle = filler;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    if(y + dy < ballRad) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRad) {
        
        document.location.reload();
        clearInterval(interval); // Needed for Chrome to end game
    }
    if(x + dx > canvas.width - ballRad || x + dx < ballRad) {
        dx = -dx;
        filler = getRandomInt(0, 230);
    }

    x += dx;
    y += dy;
}

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

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

setInterval(draw, 10);