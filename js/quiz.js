document.getElementById("form1").onsubmit=function() {
	variable = parseInt(document.querySelector('input[name="variable"]:checked').value);
	sub = parseInt(document.querySelector('input[name="sub"]:checked').value);
	con = parseInt(document.querySelector('input[name="con"]:checked').value);
	ifstate = parseInt(document.querySelector('input[name="ifstate"]:checked').value);
	
	result = variable + sub + con + ifstate;
	
	document.getElementById("grade").innerHTML = result;
	
	
	switch (result){
		case 0:
			result2 = "I don't think you studied.<br/><img src='images/0.jpg' width='300'/>"
			break;
			
		case 25:
			result2 = "I don't think you studied.<br/><img src='images/25.jpg' width='300'/>"
			break;
			
		case 50:
			result2 = "I don't think you studied.<br/><img src='images/50.jpg' width='300'/>"
			break;
		
		case 75:
			result2 = "I don't think you studied.<br/><img src='images/75.jpg' width='300'/>"
			break;
			
		case 100:
			result2 = "I don't think you studied.<br/><img src='images/100.jpg' width='300'/>"
			break;
				  }
	/*//Try and change this to a switch statement. Will be much more effiecent
	if (result == 0){
		result2 = "I don't think you studied.<br/><img src='images/0.jpg' width='300'/>"
	};
	if (result == 25){
		result2 = "You need to spend more time. Try again.<br/><img src='images/25.jpg' width='300'/>"
	};
	if (result == 50){
		result2 = "I think you could do better. Try again.<br/><img src='images/50.jpg' width='300'/>"
	};
	if (result == 75){
		result2 = "So close. Try again.<br/><img src='images/75.jpg' width='300'/>"
	};
	if (result == 100){
		result2 = "Excellent! You're a Javascript pro.<br/><img src='images/100.jpg' width='300'/>"
	};*/
	document.getElementById("grade2").innerHTML = result2;
	return false; //required to not refresh the page
}