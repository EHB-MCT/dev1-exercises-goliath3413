"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as noise from "../../scripts/noise.js";


let width = context.canvas.width;
let height = context.canvas.height;
drawNoise();

function drawNoise(){
    
    for (let i = 0; i < width; i++){
        context.fillStyle = "black";
        let y = noise.perlinNoise(i/700)*height;
        Utils.fillAndStrokeEllipse(i, y, 1);
        //console.log(y);

    }
}
drawMoreNoise();
function drawMoreNoise() {
    for (let k = 0; k< 100; k++) {
    
    drawNoise();

    }
}
