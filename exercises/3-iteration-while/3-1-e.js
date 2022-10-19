"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    while (i <= 7) {
        let spacing = 20;
        let x = 50;
        let y = x;
        Utils.drawLine(50+spacing*i, 210+spacing*i, 210+spacing*i, 50+spacing*i);
        Utils.drawLine();
        i += 1;
    }
}