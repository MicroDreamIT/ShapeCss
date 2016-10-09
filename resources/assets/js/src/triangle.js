export class Triangle{

    static processingTriangle(triangle, direction){


        function getShapeLength(shape){
            var width = triangle.getAttribute(shape);
            var value = width.replace(/[^0-9]/g, '');
            var unit = width.replace(/[0-9]/g, '');

            if (unit == '%'){
                unit = 'em';
            }
            return value+unit;
        }

        function defaultValue(){
            var style = window.getComputedStyle(triangle);
            var value = style.getPropertyValue('border-bottom');
            return value.split(' ')[0];
        }

        function borderWidth(){
           return triangle.hasAttribute('shape-width') ? getShapeLength('shape-width') :defaultValue();
        }

        function borderHeight(){
            return triangle.hasAttribute('shape-height') ? getShapeLength('shape-height') : defaultValue();
        }

        function getBackground(){
            var valueColor= triangle.hasAttribute('shape-background')? triangle.getAttribute('shape-background') : defaultBackground();

            if(direction == null || direction == 'up'){
                return ['transparent', 'transparent', valueColor];

            }

            if(direction == 'left'){
                return ['transparent', valueColor, 'transparent'];
            }

            if(direction == 'right'){
                return [ valueColor, 'transparent' , 'transparent'];
            }

            if(direction == 'down'){
                return ['transparent', valueColor, 'transparent'];
            }
            if(direction == 'top-left'){
                return [valueColor, 'transparent'];
            }

            if(direction == 'top-right'){
                return ['transparent', valueColor ];
            }

            if(direction == 'bottom-right'){
                return ['transparent', valueColor ];
            }

            if(direction == 'bottom-left'){
                return ['transparent', valueColor ];
            }

        }




        function defaultBackground(){
            var style = window.getComputedStyle(triangle);
            var value = style.getPropertyValue('border-bottom');
            return value.replace(value.split(' ')[0], '').replace(value.split(' ')[1], '');
        }

       if(direction==null || direction=='up'){
           triangle.style.borderRight = borderWidth() + ' solid ' + getBackground()[0];
           triangle.style.borderLeft = borderWidth() + ' solid ' + getBackground()[1];
           triangle.style.borderBottom = borderHeight() + ' solid ' + getBackground()[2];
       }

        if(direction=='left'){
           triangle.style.borderTop = borderWidth() + ' solid ' + getBackground()[0];
           triangle.style.borderRight = borderWidth() + ' solid ' + getBackground()[1];
           triangle.style.borderBottom = borderHeight() + ' solid ' + getBackground()[2];
       }

        if(direction=='right'){
           triangle.style.borderLeft = borderWidth() + ' solid ' + getBackground()[0];
           triangle.style.borderTop = borderWidth() + ' solid ' + getBackground()[1];
           triangle.style.borderBottom = borderHeight() + ' solid ' + getBackground()[2];
       }

        if(direction=='down'){
           triangle.style.borderLeft = borderWidth() + ' solid ' + getBackground()[0];
           triangle.style.borderTop = borderWidth() + ' solid ' + getBackground()[1];
           triangle.style.borderRight = borderHeight() + ' solid ' + getBackground()[2];
       }

        if(direction=='top-left'){
           triangle.style.borderTop = borderWidth() + ' solid ' + getBackground()[0];
           triangle.style.borderRight = borderHeight() + ' solid ' + getBackground()[1];
       }

        if(direction=='top-right'){
           triangle.style.borderBottom = borderWidth() + ' solid ' + getBackground()[0];
           triangle.style.borderRight = borderHeight() + ' solid ' + getBackground()[1];
       }

        if(direction=='bottom-right'){
           triangle.style.borderTop = borderWidth() + ' solid ' + getBackground()[0];
           triangle.style.borderRight = borderHeight() + ' solid ' + getBackground()[1];
       }

        if(direction=='bottom-left'){
           triangle.style.borderTop = borderWidth() + ' solid ' + getBackground()[0];
           triangle.style.borderLeft = borderHeight() + ' solid ' + getBackground()[1];
       }


    }

}
