// Assignment code here
//var for general characters
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numb = [0,1,2,3,4,5,6,7,8,9];
var symbol = ["!","@","#","$","%","^","&","*","_","-","+","=",".","?"];

//var to randomize characters
var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max - min + 1) +min);

  return value;
};

//var to create upper case characters
var toUpperCase = function(x) {
  return x.toUpperCase();
};

//var to confirm use of numbers
var useNumbers = window.confirm ("Using numbers in your password may help with security. Would you life to include numbers?");

//var to confirm use of lowercase letters
var useLowerCase = window.confirm ("Using lower case letters in your password may help with security. Would you like to include lower case letters?");

//var to confirm use of upper case characters
var useUpperCase = window.confirm ("Using upper case letters in your password may help with security. Would you like to include upper case ltters? ");

//var to confirm special charecters
var useSpecialCharacters = window.confirm ("Using special charecters in your password may help with security. Would you like to include special characters?")


var setPasswordLength = function() {
  //ask person how long they want the password
  var passwordLength = window.prompt("How many characters would you like your password to be? Please choose a number between 8-128.")
 
  if ( passwordLength === "" || passwordLength === null) {
    window.alert("Please provide a valid answer! Try again.");
    generatePassword();
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please provide a valid number between 8 and 128! Try again.");
    generatePassword();
  }
  else {
    setUseNumbers();
    return passwordLength;
  }
};



//create confirm prompt for uppercase characters called characterUpper

//create vonprompt for numbers

// create prompt for special characters

var generatePassword = function() {
  var password = ""
  var passwordLength = setPasswordLength();

  for (let i = 0; i < passwordLength; i++) {
    var randomCharacterAlpha = alpha.charAt(randomNumber(0, alpha.length));
    var randomCharacterNumbers = numb.charAt(randomNumber(0,numb.length));
    password = password + (randomCharacterAlpha) + (randomCharacterNumbers);
  }
  return password
}

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
