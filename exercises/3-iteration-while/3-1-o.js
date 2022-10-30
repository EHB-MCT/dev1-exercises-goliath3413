"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradient();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);

}

function drawGradient() {
    let i = 0;
    let step = 0;
    let colorStep = step*2+2;
    while (i <= 255) {
        let gray = 0 + (i * colorStep);
        context.fillStyle = Utils.rgb(gray, gray, gray);
        context.fillRect(50+50*(i/20), 50, 50, 300);
        i++;
    }
}