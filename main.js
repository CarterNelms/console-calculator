function addition()
{
	var a = prompt('1st value to add:') * 1;
	var b = prompt('2nd value to add:') * 1;
	return a + b;
}

function subtract()
{
	var a = prompt('1st value to subtract:');
	var b = prompt('2nd value to subtract:');
	return a - b;
}

function multiply()
{
	var a = prompt('1st value to multiply:');
	var b = prompt('2nd value to multiply:');
	return a * b;
}

function divide()
{
	var a = prompt('1st value to divide:');
	var b = prompt('2nd value to divide:');
	return a / b;
}

function exponent()
{
	var a = prompt('Base value:') * 1;
	var b = prompt('Exponent:');
	var ans = 1;
	for(; b > 0; --b)
	{
		ans *= a;
	}
	return ans;
}

function squareRoot()
{
	var a = prompt('Square root of what value:');
	return Math.sqrt(a);
}

function factorial()
{
	var a = prompt('Factorial of what value:');
	var value = 1;
	for(; a > 0; --a)
	{
		value *= a;
	}
	return value;
}

function quit()
{
	return 'Thanks for using us';
}

function invalidInput()
{
	return 'Please choose a valid option';
}

var operation;

while(operation !== 'q')
{
	operation = prompt('What would you like to do? Add(+) Subtract(-) Multiply(*) Divide(/) Exponential(^) Square Root($) Factorial(!) Quit(q)');
	operation = operation.toLowerCase();

	var ans;

	switch(operation)
	{
		case '+':
			ans = addition();
			break;
		case '-':
			ans = subtract();
			break;
		case '*':
			ans = multiply();
			break;
		case '/':
			ans = divide();
			break;
		case '^':
			ans = exponent();
			break;
		case '$':
			ans = squareRoot();
			break;
		case '!':
			ans = factorial();
			break;
		case 'q':
			ans = quit();
			break;
		default:
			ans = invalidInput();
	}

	alert(ans);
}