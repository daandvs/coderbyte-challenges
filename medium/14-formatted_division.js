// take both parameters and divide num1 by num2
// return the result as string with properly formatted commas and 4 significant
// digits after the decimal place

function FormattedDivision(num1, num2) {
	var result = (num1 / num2).toFixed(4),
		arr = result.split(".");

	return Number(arr[0]).toLocaleString() + "." + arr[1];

}

FormattedDivision(123456789, 10000);
