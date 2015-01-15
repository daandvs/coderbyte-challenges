// take the str parameter being passed which will be two times separated by a
// hyphen and return the total number of minutes between the two times

function CountingMinutes(str) {
	var re = /(\d+):(\d+)(am|pm)-(\d+):(\d+)(am|pm)/g,
		arr = re.exec(str),

		output = ((Number(arr[4]) - Number(arr[1])) * 60) + (Number(arr[5]) - Number(
			arr[2]));

	if (arr[3] > arr[6] || arr[3] < arr[6]) {
		output = (12 * 60) + output;
	} else {
		output = (24 * 60) + output;
	}

	return output;
}

CountingMinutes("1:00am-1:00pm");
