"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let bubbles = [];

setup();

update();

function setup() {
    for (let i = 0; i < 200; i++) {
        let bubble = {
            x: 0,
            y: height,
            size: 10,
            hue: Utils.randomNumber(0, 360)
        };
        bubbles[i] = bubble;
    }
    console.log(bubbles);
}

function update() {
    //context.fillStyle = "lightblue";
    //context.fillRect(0, 0, width, height);
    for (let i = 0; i < bubbles.length; i++) {
        let x = 0;
        let bubble = bubbles[i];
        bubble.x += Utils.randomNumber(x+2, width-2);
        bubble.y += Utils.randomNumber(0, height-20);
        drawBubble(bubble);
    }

    requestAnimationFrame(update);
}

function drawBubble(bubble) {
    context.strokeStyle = 'black';
    Utils.drawLine(bubble.x, bubble.y, bubble.x, bubble.y+100)
    context.fillStyle = Utils.hsl(bubble.hue, 50, 50);
    Utils.fillAndStrokeEllipse(bubble.x, bubble.y, 20, 30);
    

}