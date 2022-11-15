"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
let margin = 10;
let brickWidth = 100;
let brickHeight = 50;
let offset = 50;
drawBrick();

function drawBrick() {


    context.fillStyle = Utils.rgb(117, 9, 9,);

    for (let j = 0; j<6; j++){
    for (let i = 0; i<6; i++){
        console.log(j % 2); 
Utils.drawRect(50 + ((brickWidth+margin))*i + (j % 2 *offset), 50 + ((brickHeight + margin)) *j, 
                        brickWidth, brickHeight);


}}}
