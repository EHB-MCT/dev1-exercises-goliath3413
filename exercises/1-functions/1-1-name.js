"use strict";


let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');
//idk what im doing//
drawNameG();
function drawNameG(){
    //G
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
context.moveTo(100, 100);
context.lineTo(150, 100);
context.moveTo(100, 100);
context.lineTo(100, 200);
context.lineTo(150, 200);
context.lineTo(150, 155);
context.lineTo(125, 155);
context.stroke();
//E
context.strokeStyle = 'blue';
context.beginPath();
context.moveTo(200, 100);
context.lineTo(250, 100);
context.lineTo(250, 200);
context.lineTo(200, 200);
context.moveTo(250, 150);
context.lineTo(200, 150);
context.stroke();
//O
context.strokeStyle = 'yellow';
context.beginPath();
context.arc(350, 150, 50, 0, 2 * Math.PI);
context.stroke()

//R
context.strokeStyle = "brown";
context.beginPath();
context.moveTo(450, 100);
context.lineTo(450, 200);
context.moveTo(450, 100);
context.arc(450, 100, 0, 450, 150,);
context.stroke();
}
