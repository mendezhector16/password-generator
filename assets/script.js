// Assignment code here
var generatePassword = function() {
  //ask person how long they want the password
  var promptLength = window.prompt("Would you like 8, 10, or 12 characters in your password? Please type the numbers 8, 10, or 12 to chose.")

  if (promptLength === "8") {
    //if 8 characters go to  generateEight()


  }
  else if (promptLength === "10") {
    //if 10 charcters go to generateTen()

  }
  else if (promptLength === "12") {
    //if 12 characters go to generateTwelve


  }
  else if ( promptLength === "" || promptLength === null) {
    window.alert("Please provide a valid answer! Try again.");
    return generatePassword();
  }
  else {
    window.alert("Please provide a valid answer! Try again.");
    return generatePassword();
  }
};





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
