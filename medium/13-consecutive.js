// take the array of numbers stored in arr and return the minimum number of
// integers needed to make the contents of arr consecutive from the lowest
// number to the highest number

function Consecutive(arr) {
	var count = 0;

	arr.sort(function(a, b) {
		return a - b;
	});

	for (var i = 1; i < arr.length; i++) {
		var current = arr[i],
			prev = arr[i - 1];

		count += (current - prev - 1);
	}

	return count;
}

Consecutive([-2, 10, 4]);
