"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawShrinkingBars();
}

function drawShrinkingBars() {
    let i = 0;
    let upspace = 20;
    let downspace = 40;
    while (i <= 10) {
        let gray = 255;
        context.fillStyle = Utils.rgb(gray-50*i, gray-50*i, gray-50*i);
        context.fillRect(100+40*i, 100+upspace*i, 15, 400-downspace*i);
        i++;
    }
}