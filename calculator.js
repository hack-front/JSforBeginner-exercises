var characters = [];

function receiveChar(char){
	characters.push(char);
	alert(characters);
}

function compute(){

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
	var digits = [0,1,2,3,4,5,6,7,8,9];
	var answer = 0;

	var num1;
	var num2;
	var operator;
	var numbers = [];

	for(var i=0; i < characters.length; i++){
		if(digits.indexOf(characters[i]) >= 0){
			numbers.push(characters[i]);
		} else {
		//not a digit
			operator = characters[i];

			if(!num1){
				num1 = +(numbers.join(''));
			}
			numbers = [];
		}
	}
	num2 = +(numbers.join(''));

	answer = operation(num1, num2, operator);

	characters = [];
	console.log("Here are the steps and the answer: ");
	console.log(num1);
	console.log(operator);
	console.log(num2);
	console.log(answer);
}