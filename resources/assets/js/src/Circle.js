export class Circle {

    constructor(circle) {
        this.circle = circle;
    }


    static findCircleElement(circle) {

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
                
                circle.style.border= match[0] + 'px solid ' + match[1];
                             
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
            circle.style.lineHeight=radius;
        }
    }
}