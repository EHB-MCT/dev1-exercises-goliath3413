"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let xPos = [];
let yPos = [];

window.onmousemove = position;

setup();

function setup() {
    for(let i = 0; i < 100; i++){
        xPos.push(0);
        yPos.push(0);
    }
}

function draw() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    for (let i = 0; i<xPos.length; i++){
        
        context.fillStyle = Utils.rgba(0, 0, 0, i/4);
        Utils.fillCircle(xPos[i], yPos[i], i/2);
    }
    

}
function position(e) {
    console.log(e.x, e.y)
    xPos.shift();
    yPos.shift();

    xPos.push(e.x);
    yPos.push(e.y);
    draw();
}