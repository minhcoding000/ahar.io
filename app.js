var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var x = 250;
var y = 250;

function drawCircle() {
    context.beginPath();
    context.arc(x,y,40,0,2*3.14159);
    context.fillStyle = "cyan";
    context.fill();
}

function clearCanvas() {
    context.beginPath();
    context.rect(0,0,500,500);
    context.fillStyle = "white";
    context.fill();
}

function mouseMoved(mouse) {
    x = mouse.clientX;
    y = mouse.clientY;
    clearCanvas();
    drawCircle();
}

canvas.addEventListener("mousemove", mouseMoved);
drawCircle();