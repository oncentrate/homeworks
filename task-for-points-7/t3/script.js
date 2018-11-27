var n = 100;
for (var i = 2; i < n; i++){
	 var a = true;
	 var q = Math.sqrt(i);
	 for (var j = 2; j <= q; j++){
	 	if ( (i % j) == 0 ) {
	 		a = false
	 	}
	 }
	 if (a) {
	 	console.log(i + " - делители этого числа: 1 и " + i);
	 }
}