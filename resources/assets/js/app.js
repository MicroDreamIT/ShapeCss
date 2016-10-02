import { Circle } from './src/Circle.js';

var circles = document.getElementsByTagName('circle');
for (var i = 0; i < circles.length; i++) {
    window.onload = Circle.findCircleElement(circles[i]);
}
