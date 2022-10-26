"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
background();
function background() {
    //context.fillStyle = "black";
    //context.fillRect(0, 0, width, height);
}
drawBubbles();
function drawBubbles() {
    for(let i = 0; i <= 10; i++);

    Utils.fillAndStrokeEllipse(100, 200, 2,);
    context.strokeStyle = "red";
}
console.log(Utils.fillAndStrokeEllipse);
