// Assignment code here
var alpha = "abcdefghijklmnopqrstuvwxyz";
var numb = "0123456789";
var symbol = "!@#$%^&*_-+=.?";

var generatePassword = function() {
  //ask person how long they want the password
  var promptLength = window.prompt("Would you like 8, 10, or 12 characters in your password? Please type the numbers 8, 10, or 12 to chose.")

  if (promptLength === "8") {
    //if 8 characters go to  generateEight()

    generateEight();

  }
  else if (promptLength === "10") {
    //if 10 charcters go to generateTen()
    generateTen();

  }
  else if (promptLength === "12") {
    //if 12 characters go to generateTwelve
    generateTwelve();


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

var generateEight = function() {
  window.alert ("You have decided to use 8 characters! Lets get started.");

}

var generateTen = function() {
  window.alert("You have decided to use 10 characters! Lets get started.");

}

var generateTwelve = function() {
  window.alert("You have decided to use 12 characters! Lets get started.");

}

// create confirm prompt for lower case characters called characterLower
var caseSelect = function() {

  var characterLower = function() {
    var confirmLower = window.confirm("Using lower case letters in your password may help with security. Would you like to include lowercase letters?")

  }

  var characterUpper = function() {
    var confirmLower = window.confirm("Using lower case letters in your password may help with security. Would you like to include lowercase letters?")

  }
}

//create confirm prompt for uppercase characters called characterUpper

//create prompt for numbers

// create prompt for special characters



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
