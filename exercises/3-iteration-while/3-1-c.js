"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 0;
    while (i <= 3.5) {
        let step = 50;
        Utils.drawLine(50, st1ep*i+120, 350, step*i+120);
        Utils.drawLine(step*i+115, 50, step*i+115, 350);
        i += .5;
    }
}