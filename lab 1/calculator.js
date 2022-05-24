
function resvalue(){
	var x = parseInt(document.getElementById("num-one").value);
	var y = parseInt(document.getElementById("num-two").value);
	var z = 0;



	if (document.getElementById('box1').selected) {
		z = x + y;
	}

	else if (document.getElementById('box2').selected) {
		z = x - y;
	}

	else if (document.getElementById('box3').selected) {
		z = x * y;
    }

	else {
		z = x / y;

	
	}

	document.getElementById("resultArea").innerHTML = " Result : "+String(z);
	console.log(z)

}