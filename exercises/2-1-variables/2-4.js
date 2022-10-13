"use strict";


let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;


console.log("width", width);
console.log("height", height);

drawPhatLines();
drawSun();

function drawPhatLines() {
    context.fillStyle = 'GoldenRod';
    context.fillRect(0, 0, width, height/4);
    context.fillStyle = 'orange';
    context.fillRect(0, height/4, width, height/4);
    context.fillStyle = 'red';
    context.fillRect(0, 2* height/4, width, height/4);

    drawSun();
    context.fillStyle = 'darkBlue';
    context.fillRect(0, 3*height/4, width, height/4);
}


function drawSun() {
    context.fillStyle = 'yellow';
    context.ellipse(width/2, 3*height/4, width/4, width/4, 0, 0, Math.PI*2, 0 );
    context.fill();
}

window.onresize = drawPhatLines();
