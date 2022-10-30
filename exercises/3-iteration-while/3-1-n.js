"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawBlockyGradient();
    context.strokeRect(50, 50, 300, 300);

}

function drawBlockyGradient() {
    let i = 0;
    let step = 25
    let colorStep = step*2;
    
    while (i < 6) {
       
        let gray = 0 + (i * colorStep);
        context.fillStyle = Utils.rgb(gray, gray, gray);
        context.fillRect(50*i+50, 50,0*i+50, 300);
        i++;
    }
}