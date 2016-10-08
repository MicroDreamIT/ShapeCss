import { Circle } from './src/Circle.js';
import { Parallelogram } from './src/Parallelogram.js';
import { Rectangle } from './src/Rectangle.js';
import { Square } from './src/Square.js';
import { Triangleup } from './src/Triangleup.js';

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

var trianglesup = document.getElementsByTagName('triangle-up');

for (var i = 0; i < trianglesup.length; i++){
	window.onload = Triangleup.processTriangle(trianglesup[i]);
}