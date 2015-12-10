function calculate1(){
	var str = document.getElementById("input").value;
	var characters = str.split('');

	function operation(n1, n2, op){
		switch(op){
			case('*'):
				return n1*n2;
			case('/'):
				return n1/n2;
			case('+'):
				return n1+n2;
			case('-'):
				return n1-n2;
		}
	}

	var operators = ['*','/', '+', '-'];
	var digits = ['0','1','2','3','4','5','6','7','8','9', '.'];
	var answer;


	//Begin sorting the characters into num1, num2, and operator
	var num1;
	var num2;
	var operator;
	var numbers = [];

	for(var i=0; i < characters.length; i++){
		if(digits.indexOf(characters[i]) >= 0){
			numbers.push(characters[i]);
		} else {
			operator = characters[i];

			if(!num1){
				num1 = +numbers.join('');
			}
			numbers = [];
		}
	}
	num2 = +numbers.join('');
	//End of Sorting Characters

	answer = operation(num1, num2, operator);
	// alert('The answer is: ' + answer.toString());
	document.getElementById("answer1").textContent = 'The calculated answer is '+ answer;
	return answer;
}	

function calculate2(){
	var num1 = +document.getElementById("number1").value;
	var num2 = +document.getElementById("number2").value;
	var operator = document.getElementById("operator").value;

	function operation(n1, n2, op){
		switch(op){
			case('*'):
				return n1*n2;
			case('/'):
				return n1/n2;
			case('+'):
				return n1+n2;
			case('-'):
				return n1-n2;
		}
	}

	var answer = operation(num1, num2, operator);
	// alert('The answer is: ' + answer.toString());
	document.getElementById("answer2").textContent = 'The calculated answer is '+answer;
	return answer;
}