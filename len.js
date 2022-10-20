var input = document.getElementById('input');
var result = document.getElementById('result');
var inputtype= document.getElementById('inputtype');
var resulttype= document.getElementById('resulttype');
var inputtypevalue,resulttypevalue;
//event lisner
input.addEventListener("keyup",myresult);
inputtype.addEventListener("change",myresult);
resulttype.addEventListener("change",myresult);

inputtypevalue=inputtype.value;
resulttypevalue=resulttype.value;

function myresult(){
	//result.value=input.value;
	inputtypevalue=inputtype.value;
	resulttypevalue=resulttype.value;
	
if(inputtypevalue == "metre" && resulttypevalue =="centimetre"){
	result.value = Number(input.value) * 100;
	
}
else if(inputtypevalue == "metre" && resulttypevalue =="kilometre"){
	result.value = Number(input.value) * 0.001;
}
else if(inputtypevalue == "metre" && resulttypevalue =="metre"){
	result.value = Number(input.value)
}

if(inputtypevalue == "kilometre" && resulttypevalue =="centimetre"){
	result.value = Number(input.value) * 100000;
}
else if(inputtypevalue == "kilometre" && resulttypevalue =="metre"){
	result.value = Number(input.value) * 1000;
}
else if(inputtypevalue == "kilometre" && resulttypevalue =="kilometre"){
	result.value = Number(input.value)
}

if(inputtypevalue == "centimetre" && resulttypevalue =="metre"){
	result.value = Number(input.value) * 0.01;
}
else if(inputtypevalue == "centimetre" && resulttypevalue =="kilometre"){
	result.value = Number(input.value) * 0.00001;
}
else if(inputtypevalue == "centimetre" && resulttypevalue =="centimetre"){
	result.value = Number(input.value)
}



}
