"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawConcentricPattern();
}

function drawConcentricPattern() {
    context.lineWidth = 2;
    let i = 0;
    while (i <= 10) {
        let size = 10;
        Utils.strokeCircle(200, 200, size);
        Utils.strokeCircle(250, 250, size);
        Utils.strokeCircle(300, 300, size);
        i++;
    }
}