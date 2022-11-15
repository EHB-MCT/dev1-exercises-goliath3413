"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
let amount = 10;
let step = width/amount;

drawCircle();



/*function drawCircle() {
    
    for ( let i = 0; i < amount; i++){ 
    for (let j = 0; j < amount; j++){
        for (let k= 0; k < 50; k++){
    Utils.fillAndStrokeEllipse(i*size , j*size, size/2)
}}}} */

function drawCircle() {
    context.fillStyle = Utils.hsla(200, 50, 50, 0.3);
    for (let j = 0; j < amount; j++){
        for (let i = 0; i< amount; i++){
            let size = 20 + j*10;
    Utils.fillAndStrokeEllipse(i*step , j*step, size/2);
}}}