// Take the str parameter being passed which will be two times seperated by a hyphen and return the total number of minutes
// between the two times. The time will be in 12 hour format (am, pm)

function CountingMinutesI(str) {
  var time = str.split("-"),
      z1 = time[0].match(/am/) !== null ? "am" : "pm",
      z2 = time[1].match(/am/) !== null ? "am" : "pm",

      hours = 0,
      minutes = 0,

      time1 = time[0].replace(/(am|pm)/, "").split(":"),
      time2 = time[1].replace(/(am|pm)/, "").split(":"),

      h1 = Number(time1[0]),
      h2 = Number(time2[0]),

      m1 = Number(time1[1]),
      m2 = Number(time2[1]);

  if(z1 === z2 && (h2 < h1 || m2 < m1 || (h1 === h2 && m1 === m2))) {
    hours += 24;
  }else if (z1 !== z2) {
    hours += 12;
  }

  hours += h2 - h1;
  minutes = m2 - m1;

  return hours*60 + minutes;
}

CountingMinutesI("1:23am-1:08am");
