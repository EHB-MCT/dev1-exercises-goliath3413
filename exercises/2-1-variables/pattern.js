"use strict";


let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

console.log(width);
console.log(height);



drawRect();

function drawRect() {
    context.fillStyle = 'lightGrey';
    context.fillRect(0, 0, width, height);

    context.fillStyle = "rgb(44, 62, 80";
    context.fillRect(0, 0, width/3, height);
    context.fillRect(2 * width/3, 0, width/3, height);


    context.fillStyle = "rgb(53, 152, 219)";
    context.fillRect(0, 2*height/3, width/3, height/3);
    context.fillRect(2 * width/3, 2*height/3, width/3, height/3);
    

    context.fillStyle = "rgb(231, 76, 68)";
    context.fillRect(0, height/6, width, height/3);
}
