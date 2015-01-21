// take the num parameter being passed and return the next number greater than
// num using the same digits

function PermutationStep(num) {
	var arr = num.toString().split(""),
		max = 0,
		loop = true,
		n = i = arr.length - 1;

	function swap(arr, i1, i2) {
		var temp = arr[i1];
		arr[i1] = arr[i2];
		arr[i2] = temp;
	}

	while (loop && i > 0) {
		if (Number(arr[i - 1]) < Number(arr[i])) {
			max = i;
			loop = false;

			swap(arr, i - 1, i);

			do {
				while (arr[i] > arr[i + 1]) {
					for (var j = i; j < n; j++) {
						if (arr[j] > arr[j + 1]) {
							swap(arr, j, j + 1);
						}
					}
				}

				i++;
			} while (i < n);
		}

		i--;
	}

	if (loop) {
		return -1;
	}

	return Number(arr.join(""));
}

PermutationStep(12453);
