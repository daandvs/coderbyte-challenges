function PermutationStep(num) {
	var arr = num.toString().split(""),
		combinations = [],
		smallest = -1;

	function swap(arr, index1, index2) {
		var temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;

		return arr;
	}

	for (var i = 0, n = arr.length; i < n; i++) {
		for (var j = i + 1; j < n; j++) {
			combinations.push(Number(swap(arr.slice(), i, j).join("")));
		}
	}

	combinations.sort(function(a, b) {
		return a > b;
	});

	combinations.some(function(val, index) {
		if (val > num) {
			smallest = val;
			return true;
		}

		return false;
	});

	return smallest;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
PermutationStep(12453);
