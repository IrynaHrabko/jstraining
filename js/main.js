let nameToCheck = prompt("Введіть Ваше ім'я")

let surnameToCheck = prompt("Введіть Ваше прізвище")

let birthDayToCheck = +prompt("Введіть вашу дату народження. Число: ")
let birthMonthToCheck = +prompt("Місяць: ")
let birthYearToCheck = +prompt("Рік: ")

let currentDate = new Date();

let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();

let isLeapYear = (birthYearToCheck % 400 === 0 || birthYearToCheck % 100 !== 0 && birthYearToCheck % 4 === 0);

let userAge = currentYear - birthYearToCheck

if (currentMonth < birthMonthToCheck || (currentMonth === birthMonthToCheck && currentDay < birthDayToCheck)) {
  userAge = userAge - 1;
}

let zodiac = undefined

if ((birthMonthToCheck === 12 && birthDayToCheck >= 22) || (birthMonthToCheck === 1 && birthDayToCheck <= 19)) {
  zodiac = "Capricorn ♑";
} else if (birthMonthToCheck === 1 || (birthMonthToCheck === 2 && birthDayToCheck <= 18)) {
  zodiac = "Aquarius ♒";
} else if (birthMonthToCheck === 2 || (birthMonthToCheck === 3 && birthDayToCheck <= 20)) {
  zodiac = "Pisces ♓";
} else if (birthMonthToCheck === 3 || (birthMonthToCheck === 4 && birthDayToCheck <= 19)) {
  zodiac = "Aries ♈";
} else if (birthMonthToCheck === 4 || (birthMonthToCheck === 5 && birthDayToCheck <= 20)) {
  zodiac = "Taurus ♉";
} else if (birthMonthToCheck === 5 || (birthMonthToCheck === 6 && birthDayToCheck <= 20)) {
  zodiac = "Gemini ♊";
} else if (birthMonthToCheck === 6 || (birthMonthToCheck === 7 && birthDayToCheck <= 22)) {
  zodiac = "Cancer ♋";
} else if (birthMonthToCheck === 7 || (birthMonthToCheck === 8 && birthDayToCheck <= 22)) {
  zodiac = "Leo ♌";
} else if (birthMonthToCheck === 8 || (birthMonthToCheck === 9 && birthDayToCheck <= 22)) {
  zodiac = "Virgo ♍";
} else if (birthMonthToCheck === 9 || (birthMonthToCheck === 10 && birthDayToCheck <= 22)) {
  zodiac = "Libra ♎";
} else if (birthMonthToCheck === 10 || (birthMonthToCheck === 11 && birthDayToCheck <= 21)) {
  zodiac = "Scorpio ♏";
} else if (birthMonthToCheck === 11 || (birthMonthToCheck === 12 && birthDayToCheck <= 21)) {
  zodiac = "Sagittarius ♐";
}

if (nameToCheck.length >= 1 && surnameToCheck.length >= 1 && !isNaN(birthDayToCheck) && !isNaN(birthMonthToCheck) && !isNaN(birthYearToCheck)) {
  if (isLeapYear) {
    alert(`User Bio: ${nameToCheck} ${surnameToCheck}, ${userAge} років (Leap year), ${zodiac}`)
  } else {
    alert(`User Bio: ${nameToCheck} ${surnameToCheck}, ${userAge} років, ${zodiac}`)
  }
} else {
  alert("Ведіть коректні дані")
}

