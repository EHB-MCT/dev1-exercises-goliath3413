"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
drawRng();
drawCenterText();
drawMask();

function drawRng() {
    for (let i = 0; i < 200; i++){
        context.lineWidth = Math.random()*5;
        let grey = Math.random()*255;
        context.strokeStyle = Utils.rgba(grey, grey, grey, .5);
    let y1 = Math.random()*height;
    let y2 = Math.random()*height; 
    Utils.drawLine(0, y1, width, y2);

    context.fillStyle = Utils.rgba(grey, grey, grey, .5);
    let fontSize = Math.floor(Math.random()*50);
    context.font =  fontSize +"px Arial";
    context.fillText ("MCT", Math.random()*width, Math.random()*height);
}}


function drawCenterText() {
    context.textAlign = "center"
    context.fillStyle = "#000";
    context.font = "200px Arial";
    context.fillText("MCT", width/2, height/2)

    context.textAlign = "center"
    context.fillStyle = "red";
    context.font = "100px Arial";
    context.fillText("ehb", width/2, height/2 -200)

    context.textAlign = "center"
    context.fillStyle = "white";
    context.font = "100px Arial";
    context.fillText("is huh", width/2, height/2 +200)
}

function drawMask() {
    
    context.fillStyle= "black";
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(width/2, 0);
    context.lineTo(0, height/2);
    context.fill();
}