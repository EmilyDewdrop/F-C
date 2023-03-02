
const dateElement = document.querySelector(".date");


function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${DAYS[date.getDay()]}, ${date.getDate()}  ${
    MONTHS[date.getMonth()]
  } ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();
  dateElement.textContent = formatDate(now);
}, 200);
