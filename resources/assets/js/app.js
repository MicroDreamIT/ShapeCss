import { Circle } from './src/Circle.js';
import { Parallelogram } from './src/Parallelogram.js';
import { Rectangle } from './src/Rectangle.js';
import { Square } from './src/Square.js';
import { Triangle } from './src/Triangle.js';

var circles = document.getElementsByTagName('circle');
for (var i = 0; i < circles.length; i++) {
    window.onload = Circle.findCircleElement(circles[i]);
}


var parallelograms = document.getElementsByTagName('parallelogram');

for (var i = 0; i < parallelograms.length; i++){
	window.onload = Parallelogram.processSquare(parallelograms[i]);
}

var rectangles = document.getElementsByTagName('rectangle');

for (var i = 0; i < rectangles.length; i++){
	window.onload = Rectangle.processRectangle(rectangles[i]);
}

var squares = document.getElementsByTagName('square');

for (var i = 0; i < squares.length; i++){
	window.onload = Square.processSquare(squares[i]);
}


var triangleUps = document.getElementsByTagName('triangle-up');
for (var i = 0; i < triangleUps.length; i++){
    window.onload = Triangle.processingTriangle(triangleUps[i], 'up');
}

var triangleLefts = document.getElementsByTagName('triangle-left');
for (var i = 0; i < triangleLefts.length; i++){
    window.onload = Triangle.processingTriangle(triangleLefts[i], 'left');
}

var triangleRights = document.getElementsByTagName('triangle-right');
for (var i = 0; i < triangleRights.length; i++){
    window.onload = Triangle.processingTriangle(triangleRights[i], 'right');
}

var triangleDowns = document.getElementsByTagName('triangle-down');
for (var i = 0; i < triangleDowns.length; i++){
    window.onload = Triangle.processingTriangle(triangleDowns[i], 'down');
}

var triangleTopLeft = document.getElementsByTagName('triangle-top-left');
for (var i = 0; i < triangleTopLeft.length; i++){
    window.onload = Triangle.processingTriangle(triangleTopLeft[i], 'top-left');
}
var triangleTopRight = document.getElementsByTagName('triangle-top-right');
for (var i = 0; i < triangleTopRight.length; i++){
    window.onload = Triangle.processingTriangle(triangleTopRight[i], 'top-right');
}

var triangleBottomRight = document.getElementsByTagName('triangle-bottom-right');
for (var i = 0; i < triangleBottomRight.length; i++){
    window.onload = Triangle.processingTriangle(triangleBottomRight[i], 'bottom-right');
}

var triangleBottomLeft = document.getElementsByTagName('triangle-bottom-left');
for (var i = 0; i < triangleBottomLeft.length; i++){
    window.onload = Triangle.processingTriangle(triangleBottomLeft[i], 'bottom-left');
}


var triangles = document.getElementsByTagName('triangle');
for (var i = 0; i < triangles.length; i++){
	window.onload = Triangle.processingTriangle(triangles[i], null);
}

const test = new Triangle('I am triangle');

console.log(test.gettingValue());