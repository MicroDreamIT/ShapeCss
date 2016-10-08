
// TRIANGLE-UP START

var triangles = document.getElementsByTagName('triangle-up');
for (var i = 0; i < triangles.length; i++) {
	var triangle = triangles[i];

var width = triangle.getAttribute('shape-width'),
	height = triangle.getAttribute('shape-height'),
	color = triangle.getAttribute('shape-color'),
	fixedAttr = 'solid transparent';

	if (triangle.hasAttribute('shape-height')) {
        height = height;
    }
    else{
    	height = width;
    }

	triangle.style.borderLeft = width +' '+fixedAttr;
	triangle.style.borderRight = width +' '+fixedAttr;
	triangle.style.borderBottom = height +' solid '+color;
}

// TRIANGLE-UP END




//------------------------*******************---------------------------//

// TRIANGLE-DOWN START

var triangles = document.getElementsByTagName('triangle-down');
for (var i = 0; i < triangles.length; i++) {
	var triangle = triangles[i];

var width = triangle.getAttribute('shape-width'),
	height = triangle.getAttribute('shape-height'),
	color = triangle.getAttribute('shape-color'),
	fixedAttr = 'solid transparent';

	if (triangle.hasAttribute('shape-height')) {
        height = height;
    }
    else{
    	height = width;
    }

	triangle.style.borderLeft = width +' '+fixedAttr;
	triangle.style.borderRight = width +' '+fixedAttr;
	triangle.style.borderTop = height +' solid '+color;
}

// TRIANGLE-DOWN END

//---------------------------------------------------//




// TRIANGLE-RIGHT END

//--------------------------******************-------------------------//

// TRIANGLE-DOWN START

var triangles = document.getElementsByTagName('triangle-right');
for (var i = 0; i < triangles.length; i++) {
	var triangle = triangles[i];

var width = triangle.getAttribute('shape-width'),
	height = triangle.getAttribute('shape-height'),
	color = triangle.getAttribute('shape-color'),
	fixedAttr = 'solid transparent';

	if (triangle.hasAttribute('shape-height')) {
        height = height;
    }
    else{
    	height = width;
    }

	triangle.style.borderTop = width +' '+fixedAttr;
	triangle.style.borderRight = width +' '+fixedAttr;
	triangle.style.borderLeft = height +' solid '+color;
}

// TRIANGLE-DOWN END


//-----------------------*****************----------------------------//


// TRIANGLE-LEFT START

var triangles = document.getElementsByTagName('triangle-left');
for (var i = 0; i < triangles.length; i++) {
	var triangle = triangles[i];

var width = triangle.getAttribute('shape-width'),
	height = triangle.getAttribute('shape-height'),
	color = triangle.getAttribute('shape-color'),
	fixedAttr = 'solid transparent';

	if (triangle.hasAttribute('shape-height')) {
        height = height;
    }
    else{
    	height = width;
    }

	triangle.style.borderTop = width +' '+fixedAttr;
	triangle.style.borderLeft = width +' '+fixedAttr;
	triangle.style.borderRight = height +' solid '+color;
}

// TRIANGLE-LEFT END

//---------------------************------------------------------//


// TRIANGLE-TOP-LEFT START

var triangles = document.getElementsByTagName('triangle-top-left');
for (var i = 0; i < triangles.length; i++) {
	var triangle = triangles[i];

var width = triangle.getAttribute('shape-width'),
	height = triangle.getAttribute('shape-height'),
	color = triangle.getAttribute('shape-color'),
	fixedAttr = 'solid transparent';

	if (triangle.hasAttribute('shape-height')) {
        height = height;
    }
    else{
    	height = width;
    }

	triangle.style.borderRight = width +' '+fixedAttr;	
	triangle.style.borderTop = height +' solid '+color;
}

// TRIANGLE-TOP-LEFT  END

//---------------------************------------------------------//



// TRIANGLE-TOP-RIGHT START

var triangles = document.getElementsByTagName('triangle-top-right');
for (var i = 0; i < triangles.length; i++) {
	var triangle = triangles[i];

var width = triangle.getAttribute('shape-width'),
	height = triangle.getAttribute('shape-height'),
	color = triangle.getAttribute('shape-color'),
	fixedAttr = 'solid transparent';

	if (triangle.hasAttribute('shape-height')) {
        height = height;
    }
    else{
    	height = width;
    }

	
	triangle.style.borderBottom = width +' '+fixedAttr;
	triangle.style.borderRight = height +' solid '+color;
}

// TRIANGLE-TOP-RIGHT  END

//---------------------************------------------------------//


//---------------------************------------------------------//



// TRIANGLE-BOTTOM-RIGHT START

var triangles = document.getElementsByTagName('triangle-bottom-right');
for (var i = 0; i < triangles.length; i++) {
	var triangle = triangles[i];

var width = triangle.getAttribute('shape-width'),
	height = triangle.getAttribute('shape-height'),
	color = triangle.getAttribute('shape-color'),
	fixedAttr = 'solid transparent';

	if (triangle.hasAttribute('shape-height')) {
        height = height;
    }
    else{
    	height = width;
    }

	
	triangle.style.borderTop = width +' '+fixedAttr;
	triangle.style.borderRight = height +' solid '+color;
}

// TRIANGLE-BOTTOM-RIGHT  END

//---------------------************------------------------------//


//---------------------************------------------------------//



// TRIANGLE-BOTTOM-LEFT START

var triangles = document.getElementsByTagName('triangle-bottom-left');
for (var i = 0; i < triangles.length; i++) {
	var triangle = triangles[i];

var width = triangle.getAttribute('shape-width'),
	height = triangle.getAttribute('shape-height'),
	color = triangle.getAttribute('shape-color'),
	fixedAttr = 'solid transparent';

	if (triangle.hasAttribute('shape-height')) {
        height = height;
    }
    else{
    	height = width;
    }

	
	triangle.style.borderTop = width +' '+fixedAttr;
	triangle.style.borderLeft = height +' solid '+color;
}

// TRIANGLE-BOTTOM-lEFT  END

//---------------------************------------------------------//