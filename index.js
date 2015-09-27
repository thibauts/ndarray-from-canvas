var getCanvasPixels = require('get-canvas-pixels');
var ndarray = require('ndarray');
var dtype = require('dtype');

function ndarrayFromCanvas(canvas, type) {
  var pixels = getCanvasPixels(canvas);
  var data = type 
    ? new (dtype(type))(pixels)
    : pixels;

  return ndarray(data, [canvas.width, canvas.height, 4]);
}

module.exports = ndarrayFromCanvas;