
function go(){
var sum = 0;
var list = [];
var it = 0;

var numLength = document.getElementById("frm1");

for ( var i = 0; i < numLength.elements[0].value ; i++){
		if (i % 3 === 0 || i % 5 === 0){
			sum += i;
			list [it] = i;
			it ++;
		}
	}

	document.getElementById("result").innerHTML = "Answer: " + sum;
//	document.getElementById("list").innerHTML = "Answer: " +list;
};

function sumFibo(){
var x = 1;
var y = 2;
var z;
var range = document.getElementById("frm1");

var sum = 2;
for( i = 0; i < range.elements[0].value ; i ++){
	z = x + y;
	x = y;
	y = z; 
	 if(z % 2 === 0){
	  sum += z;	
	 
	 }
	 	
}

	document.getElementById("result").innerHTML = "Answer: " + sum;
};