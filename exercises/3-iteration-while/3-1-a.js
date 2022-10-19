"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLine();
}



function drawLine() {
    let i = 0;
    while (i <=11 ) {
        //This drawLine function does not exist yet! done
        //Add it to the utils script: done
        //The function draws a line between 2 points: done
        //And has the following parameters: x1, y1, x2, y2: done
        
        Utils.drawLine(100, 90*i, 300, 90*i);
        i += .4;
    }
}