function addition()
{
	var a = prompt('1st value to add:') * 1;
	var b = prompt(a + ' + ? \n 2nd value to add:') * 1;
	return a + ' + ' + b + ' = ' + (a + b);
}

function subtract()
{
	var a = prompt('Value to be subtracted from:');
	var b = prompt(a + ' - ? \n Value to subtract from ' + a + ':');
	return a + ' - ' + b + ' = ' + (a - b);
}

function multiply()
{
	var a = prompt('1st value to multiply:');
	var b = prompt(a + ' * ? \n 2nd value to multiply:');
	return a + ' * ' + b + ' = ' + (a * b);
}

function divide()
{
	var a = prompt('Numerator:');
	var b = prompt(a + ' / ? \n Denominator:');
	return a + ' / ' + b + ' = ' + (a / b);
}

function exponent()
{
	var a = prompt('Base value:') * 1;
	var b = prompt(a + '^? \n Exponent:');
	var ans = 1;
	for(; b > 0; --b)
	{
		ans *= a;
	}
	return a + '^' + b + ' = ' + ans;
}

function squareRoot()
{
	var a = prompt('Square root of what value:');
	return 'Sqrt(' + a + ') = ' + Math.sqrt(a);
}

function factorial()
{
	var a = prompt('Factorial of what value:');
	var value = 1;
	for(var i = 1; i <= a; ++i)
	{
		value *= i;
	}
	return a + '! = ' + value;
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
	operation = prompt('What would you like to do? \n (a)dd (s)ubtract (m)ultiply (d)ivide (e)xponential square(r)oot (f)actorial (q)uit');
	operation = operation.toLowerCase();

	var ans;

	switch(operation)
	{
		case 'a':
			ans = addition();
			break;
		case 's':
			ans = subtract();
			break;
		case 'm':
			ans = multiply();
			break;
		case 'd':
			ans = divide();
			break;
		case 'e':
			ans = exponent();
			break;
		case 'r':
			ans = squareRoot();
			break;
		case 'f':
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