'use strict';

var _Circle = require('./resource/js/src/Circle.js');

var _Circle2 = _interopRequireDefault(_Circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var circles = document.getElementsByTagName('circle');
for (var i = 0; i < circles.length; i++) {
    window.onload = _Circle2.default.findCircleElement(circles[i]);
}
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = exports.Circle = function () {
    function Circle(circle) {
        _classCallCheck(this, Circle);

        this.circle = circle;
    }

    _createClass(Circle, null, [{
        key: 'findCircleElement',
        value: function findCircleElement(circle) {

            if (circle.hasAttribute('shape-radius')) {
                getRadius();
            }

            if (circle.hasAttribute('shape-background')) {
                getBackground();
            }

            if (circle.hasAttribute('shape-border')) {
                getBorder();
            }

            function getBorder() {
                var border = circle.getAttribute('shape-border');

                if (border.indexOf(',')) {
                    var match = border.split(/\s*,\s*/);

                    circle.style.border = match[0] + 'px solid ' + match[1];
                } else {
                    circle.style.border = border;
                }
            }

            function getBackground() {
                var background = circle.getAttribute('shape-background');
                circle.style.backgroundColor = background;
            }

            // radius method start
            function getRadius() {
                var radius = circle.getAttribute('shape-radius');

                var value = radius.replace(/[^0-9]/g, '');
                var unit = radius.replace(/[0-9]/g, '');

                if (unit == '%') {
                    unit = 'em';
                }

                radius = Number(value) + unit;
                circle.style.width = radius;
                circle.style.height = radius;
                circle.style.borderRadius = Number(value) / 2 + unit;
                circle.style.MozBorderRadius = Number(value) / 2 + unit;
                circle.style.WebkitBorderRadius = Number(value) / 2 + unit;
                circle.style.lineHeight = radius;
            }
        }
    }]);

    return Circle;
}();
//# sourceMappingURL=shape.js.map
