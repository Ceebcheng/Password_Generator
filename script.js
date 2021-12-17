// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLow = "abcdefghijklmnopqrstuvwxyz";
var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNum = "0123456789";
var charSpec = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";
var passwordMaxLength = 128;

// Write password to the #password input

function generatePassword() {
  charLength = (prompt("How long do you want your password to be from 8 - 128 Characters"));
 
  while(charLength >= 8 && charLength <= 128) {
    var charLength = (prompt("How many characters would you like your password to contain?"));
    } 
    charLow = confirm("If you want Lower Case characters click OK ");
    charUp = confirm("If you want Upper Case characters click OK ");    
    charNum = confirm("If you want Number characters click OK ");
    charSpec = confirm("If you want Special characters click OK ");
  }

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
