"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x;
let y;
let xSpeed = 10;
let ySpeed = 10;
let size = 100;
let BlueMove = true;
window.onclick = clock;


setup();


function setup() {
    x = width/2;
    y = height/2;

    update();
}

function update() {
    
    if (BlueMove) {
        context.fillStyle = "white";
    Utils.drawRect(0,0, width, height);

    x += xSpeed;
    y += ySpeed;

    if(x >= width-size || x <= 0+size){
        xSpeed *= -1;
    }
    if (y >= height-size || y <= 0+size){
        ySpeed *= -1;
    }
    context.fillStyle = "blue";
    Utils.fillAndStrokeEllipse(x, y, size);

        requestAnimationFrame(update)
    } 
    
    
    
}
function clock(eventData) {
    console.log("HIT!", eventData.x, eventData.y)

    let mouseX = eventData.x;
    let mouseY = eventData.y;
    if(Utils.calculateDistance(x, y, mouseX, mouseY) < size){
        BlueMove = false;
    context.fillStyle = "red";
    Utils.fillAndStrokeEllipse(eventData.x, eventData.y, size/2)
    }

    
}
