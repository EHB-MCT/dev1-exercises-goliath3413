"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    while (i <= 5) {
        let spacing = 30;
        let x = 50;
        let y = x;
        Utils.drawLine(50+spacing*i, 200+spacing*i, 200+spacing*i, 50+spacing*i);
        Utils.drawLine(200-spacing*i, 50+spacing*i, 350-spacing*i, 200+spacing*i);
        i += 1;
    }
}