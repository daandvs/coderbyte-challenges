// take the str parameter being passed which will be two times separated by a
// hyphen and return the total number of minutes between the two times

function CountingMinutes(str) {
	var re = /(\d+):(\d+)(am|pm)-(\d+):(\d+)(am|pm)/g,
		arr = re.exec(str),

		output = ((Number(arr[4]) - Number(arr[1])) * 60) + (Number(arr[5]) - Number(
			arr[2]));

	if (arr[3] !== arr[6]) {
		output += (12 * 60);
	} else if ((arr[1] === arr[4] && arr[2] === arr[5]) || arr[4] < arr[1] || arr[
			5] < arr[2]) {
		output += (24 * 60);
	}

	return output;
}

CountingMinutes("5:00pm-5:11pm");
