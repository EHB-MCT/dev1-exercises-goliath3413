"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
background();
function background() {
    
    context.fillStyle = "#ffa500";
    context.fillRect(0, 0, width, height);
}
drawThisThing();
function drawThisThing() {
    context.strokeStyle = "white"
    let step = 30;
    let amount = width / step;
    
    for(let i = 0; i < amount; i++){
        Utils.drawLine(0+ step*i, 0, width-step*i, height);
        
    }
    let amountB = height / step;
    for(let i = 0; i < amountB; i++){
        Utils.drawLine(0, 0+step*i, width, height-step*i)
}
}
