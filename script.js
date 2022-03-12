// Assignment code here
var generateBtn = document.querySelector("#generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() *
  upperLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() *
    upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() *
    numbers.length)];
}

function getSymbol() {
 return symbols[Math.floor(Math.random() *
  symbols.length)];
}


function generatePassword () {
  var results = "";
  var promptpasswordsize = window.prompt('How many characters would you like your password?');

    if (promptpasswordsize > 7 && promptpasswordsize < 128) {

      var upperLetters = window.confirm("Would you like Upper case letters?");
      var lowerLetters = window.confirm("Would you like Lower case letters?");
      var numbers = window.confirm("Would you like numbers?");
      var symbols = window.confirm("Would you like symbols?");
      var charQty 

  
    for (i = 0; i < promptpasswordsize; i++) {
      results += alphabetUpper[Math.floor(Math.random()* 26)]
    }
  }
    else {
      window.alert("That is an invalid entry. Select a length between 8 and 128");
      return generatePassword();
    } 
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


