"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
background();
function background() {
    
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
}


drawDots();

/*
//japan flag
function drawDots() {

    for (let i = 0; i < 100000; i++) {
        let x = Math.random() *width;
        let y = Math.random() *height;
        let distance = Utils.calculateDistance(width/2, height/2,x,y);
        if (distance > 250 ){
            context.fillStyle = 'white'
        }
        else {
            context.fillStyle = 'red'
        }
    Utils.fillAndStrokeEllipse(x, y, 2);
    context.fillStyle = 'black'   
 }
} */

  
// my flag 
function drawDots () { //flag
    for (let i = 0; i < 100000; i++) {
        let x = Math.random() *width;
        let y = Math.random() *height;
        let distance = Utils.calculateDistance(width/2, height/2,x,y);
        if (x < width/3.2 ){
            context.fillStyle = 'red'
        }
        else {
            context.fillStyle = 'yellow'
        }
        if (x > width/1.5 ) {
            context.fillStyle = 'blue'
        }
    Utils.fillAndStrokeEllipse(x, y, 2);
    context.fillStyle = 'black'   
 }
} 
/*
 // random  
 function drawDots () { 
    for (let i = 0; i < 100000; i++) {
        let x = Math.random() *width;
        let y = Math.random() *height;
        let distance = Utils.calculateDistance(width/2, height/2,x,y);
        if (x < width/3, y< height/2 ){
            context.fillStyle = 'pink'
        }
        else {
            context.fillStyle = 'lightGreen'
        }
        if (x > width/1.5 ) {
            context.fillStyle = 'lightBlue'
        }
    Utils.fillAndStrokeEllipse(x, y, 2);
    context.fillStyle = 'black'   
 }
}
*/
