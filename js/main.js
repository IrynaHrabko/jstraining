let importantWords = [];
let getThreeWordsConfirm = confirm('Tell me three most important words 💚')
if (!getThreeWordsConfirm) {
  alert("You hurt me")
} else {
  for (let i = 0; i < 3; i++) {
    let userWord;
    do {
      userWord = prompt("Tell me three most important word 💚");
    } 
    while (userWord === null || userWord === '' || /\d/.test(userWord));

    let formattingCase;
    do {
      formattingCase = prompt(`Choose formatting option for "${userWord}":\n1. Uppercase\n2. Lowercase\n3. Capitalize`);
    }
    while (!['1', '2', '3'].includes(formattingCase));

    switch (formattingCase) {
      case "1":
        formattingCase = userWord.toUpperCase();
        break;
      case "2":
        formattingCase = userWord.toLowerCase();
        break;
      case "3":
        formattingCase = userWord.charAt(0).toUpperCase() + userWord.slice(1).toLowerCase();
        break;
    }
    importantWords.push(formattingCase);
  }
  if (importantWords.length === 3) {
    console.log(`${importantWords[0]} ${importantWords[1]} ${importantWords[2]}!`);
    alert("Thank you! Check the console!")
  } else {
    alert('Wasted');
  }
}
