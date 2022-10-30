"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradientCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawGradientCircles() {
    let i = 0;
    while (i <= 6) {
        let gray = 0;
        context.fillStyle = Utils.rgb(gray+50*i, gray+50*i, gray+50*i);
        let radius =150 ;
        Utils.fillAndStrokeEllipse(200, 200, radius-20*i);
        i++;;
    }
}