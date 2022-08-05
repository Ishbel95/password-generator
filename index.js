let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let characters = [""];

let passwordButton = document.getElementById("password-button");
let firstPassword = document.getElementById("first-password");
let secondPassword = document.getElementById("second-password");
let passwordLength = "";
let userChosenPasswordLength = document.getElementById("password-length");
let numberToggle = document.getElementById("number-toggle");
let symbolToggle = document.getElementById("symbol-toggle");

numberToggle.checked = false;
symbolToggle.checked = false;

passwordButton.addEventListener("click", function generatePassword() {
  firstPassword.textContent = "";
  secondPassword.textContent = "";
  passwordLength = userChosenPasswordLength.value;

  if (symbolToggle.checked === true && numberToggle.checked === true) {
    characters = letters.concat(numbers, symbols);
  } else if (numberToggle.checked === true) {
    characters = letters.concat(numbers);
  } else if (symbolToggle.checked === true) {
    characters = letters.concat(symbols);
  } else {
    characters = letters;
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex1 = Math.floor(Math.random() * characters.length);
    let randomIndex2 = Math.floor(Math.random() * characters.length);
    firstPassword.textContent += characters[randomIndex1];
    secondPassword.textContent += characters[randomIndex2];
  }
});
