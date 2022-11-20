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
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}
export function rgb(r,g,b) {
    let rgb = "rgb(" + r + "," + g + "," + b + ")"; 
    return rgb;
}
export function rgba(r,g,b,a) {
    let rgb = "rgb(" + r + "," + g + "," + b + ","+ a + ")"; 
    return rgb;
}

export function strokeCircle(x, y, radius,) {
    strokeEllipse(x, y, radius, radius);
}

export function fillAndStrokeEllipse(x, y, radius) {
        fillEllipse(x,y, radius, radius);    
}
export function ellipse(x, y, z, b, n, m, ){
    context.beginPath();
    context.ellipse(x, y, 0, 0, 0, 0, 0);
    context.fill();
    
}

function fillEllipse(x, y, rX, rY){
    context.beginPath();
    context.ellipse(x,y, rX, rY,0, 0, Math.PI*2);
    context.fill();
}
export function hsl(h, s, l) {
    return "hsl(" + h + "," + s + "%," + l + "%)";
}
export function hsla(h, s, l, a) {
    return "hsl(" + h + "," + s + "%," + l + "%," + a + "%)";
}

function strokeEllipse(x, y, rX, rY) {
context.beginPath();
context.ellipse(x,y, rX, rY,0, 0, Math.PI*2);
context.stroke();
}

 export function fillCircle(x,y, radius ){
    context.ellipse
 }
export function drawRect (x, y, x1, y1) {
    context.fillRect(x, y, x1, y1);
    context.fillStyle = "rgb(x, x, x,)"
}

export function calculateDistance (x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}

export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}