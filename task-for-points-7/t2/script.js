var width = 1; 
var height = 1; 
function squareArea() {
	var square = width * height;
	console.log("Площадь блока:" + square); 
}
squareArea();
for (var i = 0; i < 10; i++){
	 width += 10;
	 squareArea();
}