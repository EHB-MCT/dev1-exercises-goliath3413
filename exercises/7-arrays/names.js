"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

context.fillStyle = 'black';
context.fillRect(0, 0, width, height);

let names = ["peter", "Burgir", "AYAYA", "BAZINGA", "BRUH", "Josue", ""]

let r = Utils.randomNumber(0, names.length);
console.log(names[r]);

for(let i = (names.length - 1); i >= 0; i--){
    console.log(names[i]);
}



// function setup(){for (let i=0; i<100; i++){xPosition[i] = Utils.randomNumber(0, width); yPosition[i] = Utils.randomNumber(0, height);}}