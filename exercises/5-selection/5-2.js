"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
background();
function background() {
    
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
}

drawMaze ();

function drawMaze() {
    for (let i = 0; i <100 ; i++) {
    let r = Math.round(Math.random()*.5);
    context.strokeStyle = 'white'
    context.lineWidth = 10;
    if (r == 0) {
        Utils.drawLine(0 +i *100, 0, 100 +i* 100, 100);}
        else{
        Utils.drawLine(0, 100 , 100, 0);
        }
    }
}