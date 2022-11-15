"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as noise from "../../scripts/noise.js";


let width = context.canvas.width;
let height = context.canvas.height;
drawNoise();
function drawNoise(){
    context.fillStyle = "black";
    for (let i = 0; i < width; i++){
        let y = noise.perlinNoise(i/100)*height;
        Utils.fillAndStrokeEllipse(i, y, 1);
        console.log(y);

    }
}