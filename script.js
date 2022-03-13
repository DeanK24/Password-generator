// Assignment code here
var generateBtn = document.querySelector("#generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";



function generatePassword() {
  var results = "";
  var promptpasswordsize = window.prompt(
    "How many characters would you like your password to be?"
  );
  var charQty = parseInt(promptpasswordsize);

  if (charQty > 7 && charQty < 129) {
    var upperCase = window.confirm("Would you like Upper case letters?");
    var lowerCase = window.confirm("Would you like Lower case letters?");
    var numeric = window.confirm("Would you like numbers?");
    var specialChar = window.confirm("Would you like symbols?");

    var characters = "";

    if (upperCase) {
      characters += upperLetters;
    }
    if (lowerCase) {
      characters += lowerLetters;
    }
    if (numeric) {
      characters += numbers;
    }
    if (specialChar) {
      characters += symbols;
    }

    for (let i = 0; i < charQty; i++) {
      results += characters[Math.floor(Math.random() * characters.length)];
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
