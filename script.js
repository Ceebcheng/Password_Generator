// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLow = "abcdefghijklmnopqrstuvwxyz";
var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNum = "0123456789";
var charSpec = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";
var passwordMaxLength = 128;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
  var prompt;
  var fakeloop = true;
  while(fakeloop) {
    prompt = window.prompt("How long do you want your password to be from 8 - 128 Characters","8");
    if ((prompt >= 8 && prompt <= 128) || prompt == null ) {
      fakeloop = false;
    }
  }

  if ((prompt == "yes" || prompt == "no")) {
    prompt = window.prompt("Do you want lowercase");
  }


  for (var i = 8; i <= passwordMaxLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
