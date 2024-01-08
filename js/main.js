function getRandomIntInclusive(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);

}

const randomInt = getRandomIntInclusive(0, 10)

let userString = prompt("Введіть довільний рядок:")
let userNumber = +prompt("Введіть ціле число:")


if (!isNaN(userNumber) && Number.isInteger(userNumber) && userNumber >= 0) {
  if (userNumber < userString.length) {

    let chooseId
    do {
      chooseId = prompt("Введіть ID операції, яку необхідно виконати: 1, 2, 3, 4.")
    }

    while (!['1', '2', '3', '4'].includes(chooseId)) {
      switch (chooseId) {
        case "1":
          let charUnicode = userString.charCodeAt(userNumber);
          console.log(`Unicode значення вказаного символу за індексом ${userNumber}: ${charUnicode}.`);
          break;
        case "2":
          let removedChar = userString.slice(0, userNumber) + userString.slice(userNumber + 1);
          console.log(`${removedChar}`);
          break;
        case "2":
          const stringWithoutChar = userString.slice(0, userNumber) + userString.slice(userNumber + 1);
          console.log(`${stringWithoutChar}`);
          break;
        case "3":
          let smileys = ['\u{1F63B}', '\u{1F917}', '\u{1F618}', '\u{1F929}', '\u{1F609}', '\u{1F604}', '\u{1F973}', '\u{1F60E}', '\u{1F9D0}', '\u{1F47B}'];
          let stringWithSmiley = userString.slice(0, userNumber) + smileys[randomInt] + userString.slice(userNumber + 1);
          console.log(`${stringWithSmiley}`);
          break;
        case "4":
          let stringLength = userString.replace(/\s/g, "").length;
          console.log(`Кількість літер у введеному рядку: ${stringLength}`);
          break;
        default: {
          alert("Введено некоректний ID операції. Введіть значення 1, 2, 3 або 4.")
        }
      }
    }
  } else {
    alert("За вказаним числом неможливо провести розрахунки. Спробуйте ввести менше число.")
  }
} else {
    alert("Введено некоректне число.");
}

