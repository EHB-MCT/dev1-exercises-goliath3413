"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
drawThisThing();
function drawThisThing() {
    let step = 30;
    let amount = width / step;
    let amountB = height / step+3;
    for(let i = 0; i < amount; i++){
        Utils.drawLine(0+ step*i, 0, width-step*i, height);
        Utils.drawLine(0, 0+amountB*i, width, height-amountB*i)
    }
}