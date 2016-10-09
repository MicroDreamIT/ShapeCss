export class Triangleup{

	constructor(triangle){

		this.triangle=triangle;
	}

	static processTriangle(triangle){
		if (triangle.hasAttribute('shape-height')){
			getShapeHeight();
		}
		if(triangle.hasAttribute('shape-width')){
			getShapeWidth();
		}
        if(triangle.hasAttribute('shape-background') && (triangle.hasAttribute('shape-width') || triangle.hasAttribute('shape-height'))){
            getShapeBackground();
        }else{
           onlyBackgroundWithoutHeightAndWidth();
        }
        function onlyBackgroundWithoutHeightAndWidth() {
            var style = window.getComputedStyle(triangle);
            var value = style.getPropertyValue('border-bottom');
            var border = value.split(' ')[0];
            triangle.style.borderBottom = border + ' solid' + ' ' + getShapeBackground();
        }
        function getShapeWidth(){
            var width = triangle.getAttribute('shape-width');
            var value = width.replace(/[^0-9]/g, '');
            var unit = width.replace(/[0-9]/g, '');

            if (unit == '%'){
                unit = 'em';
            }

            triangle.style.borderRight= value+unit+' solid'+ ' transparent';
            triangle.style.borderLeft= value+unit+' solid'+ ' transparent';

            if(!triangle.hasAttribute('shape-height')){
                onlyBackgroundWithoutHeightAndWidth();
            }

        }

        function getShapeBackground(){
            return triangle.getAttribute('shape-background');
        }

		function getShapeHeight(){
				var width = triangle.getAttribute('shape-height');
				var value = width.replace(/[^0-9]/g, '');
                var unit = width.replace(/[0-9]/g, '');

                  if (unit == '%'){
                		unit = 'em';
            		}

                if(!getShapeBackground()){
                    triangle.style.borderBottom= value+unit+' solid'+ ' pink';
                }
				else{
                    triangle.style.borderBottom= value+unit+' solid'+ ' '+ getShapeBackground();
                }

			}

	}


}

// TRIANGLE-UP START

// var triangles = document.getElementsByTagName('triangle-up');
// for (var i = 0; i < triangles.length; i++) {
// 	var triangle = triangles[i];

// var width = triangle.getAttribute('shape-width'),
// 	height = triangle.getAttribute('shape-height'),
// 	color = triangle.getAttribute('shape-color'),
// 	fixedAttr = 'solid transparent';

// 	if (triangle.hasAttribute('shape-height')) {
//         height = height;
//     }
//     else{
//     	height = width;
//     }

// 	triangle.style.borderLeft = width +' '+fixedAttr;
// 	triangle.style.borderRight = width +' '+fixedAttr;
// 	triangle.style.borderBottom = height +' solid '+color;
// }

// // TRIANGLE-UP END




// //------------------------*******************---------------------------//

// // TRIANGLE-DOWN START

// var triangles = document.getElementsByTagName('triangle-down');
// for (var i = 0; i < triangles.length; i++) {
// 	var triangle = triangles[i];

// var width = triangle.getAttribute('shape-width'),
// 	height = triangle.getAttribute('shape-height'),
// 	color = triangle.getAttribute('shape-color'),
// 	fixedAttr = 'solid transparent';

// 	if (triangle.hasAttribute('shape-height')) {
//         height = height;
//     }
//     else{
//     	height = width;
//     }

// 	triangle.style.borderLeft = width +' '+fixedAttr;
// 	triangle.style.borderRight = width +' '+fixedAttr;
// 	triangle.style.borderTop = height +' solid '+color;
// }

// // TRIANGLE-DOWN END

// //---------------------------------------------------//




// // TRIANGLE-RIGHT END

// //--------------------------******************-------------------------//

// // TRIANGLE-DOWN START

// var triangles = document.getElementsByTagName('triangle-right');
// for (var i = 0; i < triangles.length; i++) {
// 	var triangle = triangles[i];

// var width = triangle.getAttribute('shape-width'),
// 	height = triangle.getAttribute('shape-height'),
// 	color = triangle.getAttribute('shape-color'),
// 	fixedAttr = 'solid transparent';

// 	if (triangle.hasAttribute('shape-height')) {
//         height = height;
//     }
//     else{
//     	height = width;
//     }

// 	triangle.style.borderTop = width +' '+fixedAttr;
// 	triangle.style.borderRight = width +' '+fixedAttr;
// 	triangle.style.borderLeft = height +' solid '+color;
// }

// // TRIANGLE-DOWN END


// //-----------------------*****************----------------------------//


// // TRIANGLE-LEFT START

// var triangles = document.getElementsByTagName('triangle-left');
// for (var i = 0; i < triangles.length; i++) {
// 	var triangle = triangles[i];

// var width = triangle.getAttribute('shape-width'),
// 	height = triangle.getAttribute('shape-height'),
// 	color = triangle.getAttribute('shape-color'),
// 	fixedAttr = 'solid transparent';

// 	if (triangle.hasAttribute('shape-height')) {
//         height = height;
//     }
//     else{
//     	height = width;
//     }

// 	triangle.style.borderTop = width +' '+fixedAttr;
// 	triangle.style.borderLeft = width +' '+fixedAttr;
// 	triangle.style.borderRight = height +' solid '+color;
// }

// // TRIANGLE-LEFT END

// //---------------------************------------------------------//


// // TRIANGLE-TOP-LEFT START

// var triangles = document.getElementsByTagName('triangle-top-left');
// for (var i = 0; i < triangles.length; i++) {
// 	var triangle = triangles[i];

// var width = triangle.getAttribute('shape-width'),
// 	height = triangle.getAttribute('shape-height'),
// 	color = triangle.getAttribute('shape-color'),
// 	fixedAttr = 'solid transparent';

// 	if (triangle.hasAttribute('shape-height')) {
//         height = height;
//     }
//     else{
//     	height = width;
//     }

// 	triangle.style.borderRight = width +' '+fixedAttr;	
// 	triangle.style.borderTop = height +' solid '+color;
// }

// // TRIANGLE-TOP-LEFT  END

// //---------------------************------------------------------//



// // TRIANGLE-TOP-RIGHT START

// var triangles = document.getElementsByTagName('triangle-top-right');
// for (var i = 0; i < triangles.length; i++) {
// 	var triangle = triangles[i];

// var width = triangle.getAttribute('shape-width'),
// 	height = triangle.getAttribute('shape-height'),
// 	color = triangle.getAttribute('shape-color'),
// 	fixedAttr = 'solid transparent';

// 	if (triangle.hasAttribute('shape-height')) {
//         height = height;
//     }
//     else{
//     	height = width;
//     }

	
// 	triangle.style.borderBottom = width +' '+fixedAttr;
// 	triangle.style.borderRight = height +' solid '+color;
// }

// // TRIANGLE-TOP-RIGHT  END

// //---------------------************------------------------------//


// //---------------------************------------------------------//



// // TRIANGLE-BOTTOM-RIGHT START

// var triangles = document.getElementsByTagName('triangle-bottom-right');
// for (var i = 0; i < triangles.length; i++) {
// 	var triangle = triangles[i];

// var width = triangle.getAttribute('shape-width'),
// 	height = triangle.getAttribute('shape-height'),
// 	color = triangle.getAttribute('shape-color'),
// 	fixedAttr = 'solid transparent';

// 	if (triangle.hasAttribute('shape-height')) {
//         height = height;
//     }
//     else{
//     	height = width;
//     }

	
// 	triangle.style.borderTop = width +' '+fixedAttr;
// 	triangle.style.borderRight = height +' solid '+color;
// }

// // TRIANGLE-BOTTOM-RIGHT  END

// //---------------------************------------------------------//


// //---------------------************------------------------------//



// // TRIANGLE-BOTTOM-LEFT START

// var triangles = document.getElementsByTagName('triangle-bottom-left');
// for (var i = 0; i < triangles.length; i++) {
// 	var triangle = triangles[i];

// var width = triangle.getAttribute('shape-width'),
// 	height = triangle.getAttribute('shape-height'),
// 	color = triangle.getAttribute('shape-color'),
// 	fixedAttr = 'solid transparent';

// 	if (triangle.hasAttribute('shape-height')) {
//         height = height;
//     }
//     else{
//     	height = width;
//     }

	
// 	triangle.style.borderTop = width +' '+fixedAttr;
// 	triangle.style.borderLeft = height +' solid '+color;
// }

// TRIANGLE-BOTTOM-lEFT  END

//---------------------************------------------------------//