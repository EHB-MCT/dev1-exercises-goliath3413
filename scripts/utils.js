"use strict";

import context from "./context.js";
/**
 * draws a line between 2 points, x1 and y1 to x2 and y2
 * @param {Number} x1 
 * @param {Number} y1 
 * @param {Number} x2 
 * @param {Number} y2 
 */



export function drawLine(x1, y1, x2, y2) {
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}
export function rgb(r,g,b) {
    let rgb = "rgb(" + r + "," + g + "," + b + ")"; 
    return rgb;
}

export function strokeCircle(x, y, radius) {
    strokeEllipse(x,y, radius);
}

export function fillAndStrokeEllipse(x, y, rX, rY) {
    fillEllipse(x,y, rX, rY);
    strokeEllipse(x, y, rX, rY);
    
}

function fillEllipse(x, y, rX, rY){
    context.beginPath();
    context.ellipse(x,y, rX, rY,0, 0, Math.PI*2);
    context.fill();
}

function strokeEllipse(x, y, rX, rY) {
context.beginPath();
context.ellipse(x,y, rX, rY,0, 0, Math.PI*2);
context.stroke();
}