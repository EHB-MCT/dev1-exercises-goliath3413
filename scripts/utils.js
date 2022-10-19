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


