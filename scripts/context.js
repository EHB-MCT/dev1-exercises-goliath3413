"use strict";

let context;

/**
 * @type {CanvasRenderingContext2D};
 */
setupCanvasContext();

export default context;

function setupCanvasContext() {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
}

// COlors: fillstyle = utils.rgb(i* 50, i * 50, i*50);   
//export function rgb(r, g, b){let rgb = "("+r, "," + g + "," + b+")"; return} 

