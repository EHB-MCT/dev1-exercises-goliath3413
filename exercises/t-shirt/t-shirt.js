"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as noise from "../../scripts/noise.js";


let width = context.canvas.width;
let height = context.canvas.height;

drawStuff1();
ellipse();
function ellipse(){
    Utils.ellipse(100, 100, 50, 10, Math.PI*2,);
    
}
function drawStuff1() {
    Utils.strokeCircle(width/2, height/6, 20)
}