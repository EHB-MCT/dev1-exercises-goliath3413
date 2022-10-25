"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawWormhole();
}

function drawWormhole() {
    let i = 1;
    while (i <= 20) {
        Utils.drawLine(200, 200, 360, 360-(15*i));
        Utils.drawLine(200, 200, 50, 360-(15*i));
        Utils.drawLine(200, 200, 50+15*i, 50);
        Utils.drawLine(200, 200, 50+15*i, 350);
        i++;
    }
}