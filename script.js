// Assignment code here
var generateBtn = document.querySelector("#generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function generatePassword() {
  var results = "";
  var promptpasswordsize = window.prompt(
    "How many characters would you like your password?"
  );
  var charQty = parseInt(promptpasswordsize);

  if (charQty > 7 && charQty < 128) {
    var upperCase = window.confirm("Would you like Upper case letters?");
    var lowerCase = window.confirm("Would you like Lower case letters?");
    var numeric = window.confirm("Would you like numbers?");
    var specialChar = window.confirm("Would you like symbols?");

    var i = 0;
    while (i < charQty) {
      if (upperCase == true) {
        results +=
          upperLetters[Math.floor(Math.random() * upperLetters.length)];
        i++;
        if (i == charQty) {
          break;
        }
      }
      if (lowerCase == true) {
        results +=
          lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
        i++;
        if (i == charQty) {
          break;
        }
      }
      if (numeric == true) {
        results += numbers[Math.floor(Math.random() * numbers.length)];
        i++;
        if (i == charQty) {
          break;
        }
      }
      if (specialChar == true) {
        results += symbols[Math.floor(Math.random() * symbols.length)];
        i++;
        if (i == charQty) {
          break;
        }
      }
    }
  } else {
    window.alert("That is an invalid entry. Select a length between 8 and 128");
    return generatePassword();
  }

  return results;
}

// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
