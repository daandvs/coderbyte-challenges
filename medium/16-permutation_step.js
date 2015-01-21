function PermutationStep(num) {
	var arr = num.toString().split(""),
		loop = true,
		i = arr.length - 1;

	function swap(arr, i1, i2) {
		var temp = arr[i1];
		arr[i1] = arr[i2];
		arr[i2] = temp;
	}

	while (loop && i > 0) {
		if (Number(arr[i - 1]) < Number(arr[i])) {
			loop = false;

			swap(arr, i - 1, i);

			for (var j = i, n = arr.length - 1; j < n; j++) {
				if (arr[j] > arr[j + 1]) {
					swap(arr, j, j + 1);
				}
			}
		}

		i--;
	}

	if (loop) {
		return -1;
	}

	return Number(arr.join(""));
}

PermutationStep(9999);
