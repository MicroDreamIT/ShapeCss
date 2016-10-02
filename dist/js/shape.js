/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(exports, \"a\", function() { return Circle; });\nvar Circle = function Circle(circle) {\r\n    this.circle = circle;\r\n};\r\n\r\n\r\nCircle.findCircleElement = function findCircleElement (circle) {\r\n\r\n    if (circle.hasAttribute('shape-radius')) {\r\n        getRadius();\r\n    }\r\n\r\n    if (circle.hasAttribute('shape-background')) {\r\n        getBackground();\r\n    }\r\n\r\n\r\n    if (circle.hasAttribute('shape-border')) {\r\n        getBorder();\r\n    }\r\n\r\n\r\n    function getBorder() {\r\n        var border = circle.getAttribute('shape-border');\r\n\r\n        if (border.indexOf(',')) {\r\n            var match = border.split(/\\s*,\\s*/);\r\n                \r\n            circle.style.border= match[0] + 'px solid ' + match[1];\r\n                             \r\n        } else {\r\n            circle.style.border = border;\r\n        }\r\n    }\r\n\r\n\r\n    function getBackground() {\r\n        var background = circle.getAttribute('shape-background');\r\n        circle.style.backgroundColor = background;\r\n    }\r\n\r\n\r\n    // radius method start\r\n    function getRadius() {\r\n        var radius = circle.getAttribute('shape-radius');\r\n\r\n        var value = radius.replace(/[^0-9]/g, '');\r\n        var unit = radius.replace(/[0-9]/g, '');\r\n\r\n        if (unit == '%') {\r\n            unit = 'em';\r\n        }\r\n\r\n        radius = Number(value) + unit;\r\n        circle.style.width = radius;\r\n        circle.style.height = radius;\r\n        circle.style.borderRadius = Number(value) / 2 + unit;\r\n        circle.style.MozBorderRadius = Number(value) / 2 + unit;\r\n        circle.style.WebkitBorderRadius = Number(value) / 2 + unit;\r\n        circle.style.lineHeight=radius;\r\n    }\r\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3NyYy9DaXJjbGUuanM/NDVhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2lyY2xlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjaXJjbGUpIHtcclxuICAgICAgICB0aGlzLmNpcmNsZSA9IGNpcmNsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGZpbmRDaXJjbGVFbGVtZW50KGNpcmNsZSkge1xyXG5cclxuICAgICAgICBpZiAoY2lyY2xlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtcmFkaXVzJykpIHtcclxuICAgICAgICAgICAgZ2V0UmFkaXVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2lyY2xlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtYmFja2dyb3VuZCcpKSB7XHJcbiAgICAgICAgICAgIGdldEJhY2tncm91bmQoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoY2lyY2xlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtYm9yZGVyJykpIHtcclxuICAgICAgICAgICAgZ2V0Qm9yZGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Qm9yZGVyKCkge1xyXG4gICAgICAgICAgICB2YXIgYm9yZGVyID0gY2lyY2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtYm9yZGVyJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYm9yZGVyLmluZGV4T2YoJywnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gYm9yZGVyLnNwbGl0KC9cXHMqLFxccyovKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJvcmRlcj0gbWF0Y2hbMF0gKyAncHggc29saWQgJyArIG1hdGNoWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJvcmRlciA9IGJvcmRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kID0gY2lyY2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtYmFja2dyb3VuZCcpO1xyXG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyByYWRpdXMgbWV0aG9kIHN0YXJ0XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFkaXVzKCkge1xyXG4gICAgICAgICAgICB2YXIgcmFkaXVzID0gY2lyY2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtcmFkaXVzJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSByYWRpdXMucmVwbGFjZSgvW14wLTldL2csICcnKTtcclxuICAgICAgICAgICAgdmFyIHVuaXQgPSByYWRpdXMucmVwbGFjZSgvWzAtOV0vZywgJycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVuaXQgPT0gJyUnKSB7XHJcbiAgICAgICAgICAgICAgICB1bml0ID0gJ2VtJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmFkaXVzID0gTnVtYmVyKHZhbHVlKSArIHVuaXQ7XHJcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZS53aWR0aCA9IHJhZGl1cztcclxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmhlaWdodCA9IHJhZGl1cztcclxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJvcmRlclJhZGl1cyA9IE51bWJlcih2YWx1ZSkgLyAyICsgdW5pdDtcclxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLk1vekJvcmRlclJhZGl1cyA9IE51bWJlcih2YWx1ZSkgLyAyICsgdW5pdDtcclxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLldlYmtpdEJvcmRlclJhZGl1cyA9IE51bWJlcih2YWx1ZSkgLyAyICsgdW5pdDtcclxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmxpbmVIZWlnaHQ9cmFkaXVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3NyYy9DaXJjbGUuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Circle_js__ = __webpack_require__(0);\n\r\n\r\nvar circles = document.getElementsByTagName('circle');\r\nfor (var i = 0; i < circles.length; i++) {\r\n    window.onload = __WEBPACK_IMPORTED_MODULE_0__src_Circle_js__[\"a\" /* Circle */].findCircleElement(circles[i]);\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENpcmNsZSB9IGZyb20gJy4vc3JjL0NpcmNsZS5qcyc7XHJcblxyXG52YXIgY2lyY2xlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjaXJjbGUnKTtcclxuZm9yICh2YXIgaSA9IDA7IGkgPCBjaXJjbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB3aW5kb3cub25sb2FkID0gQ2lyY2xlLmZpbmRDaXJjbGVFbGVtZW50KGNpcmNsZXNbaV0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);