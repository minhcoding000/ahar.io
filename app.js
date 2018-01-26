var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


function drawCircle() {
context.beginPath();
context.arc(250,250,40,0,2*3.14159);
context.fillStyle = "cyan";
context.fill();
}

drawCircle();