"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
background();
function background() {
    //context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
}

drawBubbles();
function drawBubbles() {
    for (let i = 0; i<=50; i++) {
        Utils.fillAndStrokeEllipse(Math.floor(Math.random(context.canvas.width)*width), Math.floor(Math.random(context.canvas.height)*width), Math.floor(Math.random()*100)); 
        context.fillStyle = Utils.rgba(Math.random(Math.floor)*255,Math.random(Math.floor)*255 , Math.random(Math.floor)*255,Math.random(Math.floor)*1);
    }
}
//drawBubbles2();
function drawBubbles2() {
    let i = 0;
    while(i<= 10) {
        Utils.fillAndStrokeEllipse(Math.floor(Math.random(context.canvas.width)*context.canvas.width), Math.floor(Math.random(context.canvas.height)*context.canvas.width), Math.floor(Math.random()*100));
        context.fillStyle = Utils.rrgb();
       i++;
        
    }
}
console.log(drawBubbles);