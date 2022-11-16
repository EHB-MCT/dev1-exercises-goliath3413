"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
window.onmousemove = drawCross;

function drawCross(event) {
    context.fillStyle = 'white';
    Utils.drawRect(0, 0, width, height)


    context.strokeStyle = 'red'
    //context.lineWidth = 5;
    Utils.drawLine(event.pageX, 0, event.pageX, height);
    Utils.drawLine(0, event.pageY,width, event.pageY)
    

}
