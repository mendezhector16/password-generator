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
var alphaUpperCase = alpha.map(alpha => alpha.toUpperCase());

var userResponse;

var generatePassword = function() {
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
    //var to confirm use of numbers
    var useNumbers = window.confirm ("Using numbers in your password may help with security. Would you life to include numbers?");

    //var to confirm use of lowercase letters
    var useLowerCase = window.confirm ("Using lower case letters in your password may help with security. Would you like to include lower case letters?");

    //var to confirm use of upper case characters
    var useUpperCase = window.confirm ("Using upper case letters in your password may help with security. Would you like to include upper case ltters? ");

    //var to confirm special charecters
    var useSpecialCharacters = window.confirm ("Using special charecters in your password may help with security. Would you like to include special characters?")

    // return passwordLength;
  };

  if (!useNumbers && !useLowerCase && !useUpperCase && !useSpecialCharacters) {
    userResponse = window.alert ("No password able to be generated, please make a valid choice.")
  }
  //all true
  else if (useNumbers && useLowerCase && useUpperCase && useSpecialCharacters) {
    userResponse = numb.concat(alpha,alphaUpperCase, symbol);
    console.log(userResponse);
  }
  //three are true
  else if (useNumbers && useLowerCase && useUpperCase) {
    userResponse = numb.concat(alpha,alphaUpperCase);
    console.log(userResponse);
  }
  else if (useNumbers && useLowerCase && useSpecialCharacters) {
    userResponse = numb.concat(alpha, symbol);
    console.log(userResponse);
  }
  else if (useNumbers && useUpperCase && useSpecialCharacters) {
    userResponse = numb.concat(alphaUpperCase, symbol);
    console.log(userResponse);
  }
  else if (useLowerCase && useUpperCase && useSpecialCharacters) {
    userResponse = alpha.concat(alphaUpperCase, symbol);
    console.log(userResponse);
  }
  //two are ture
  else if (useNumbers && useLowerCase) {
    userResponse = numb.concat(alpha);
    console.log(userResponse);
  }
  else if (useNumbers && useUpperCase) {
    userResponse = numb.concat(alphaUpperCase);
    console.log(userResponse);
  }
  else if (useNumbers && useSpecialCharacters) {
    userResponse = numb.concat(symbol);
    console.log(userResponse);
  }
  else if (useLowerCase && useUpperCase) {
    userResponse = alpha.concat(alphaUpperCase);
    console.log(userResponse);
  }
  else if (useLowerCase && useSpecialCharacters) {
    userResponse = alpha.concat(symbol);
    console.log(userResponse);
  }
  else if (useUpperCase && useSpecialCharacters) {
    userResponse = alphaUpperCase.concat(symbol);
    console.log(userResponse);
  }
  //one is true
  else if (useNumbers) {
    userResponse = numb;
    console.log(userResponse);
  }
  else if (useLowerCase) {
    userResponse = alpha;
    console.log(userResponse);
  }
  else if (useUpperCase) {
    userResponse = alphaUpperCase;
    console.log(userResponse);
  }
  else if (useSpecialCharacters) {
    userResponse = symbol;
    console.log(userResponse);
  };
  
  for (let i = 0; i < passwordLength; i++) {
    var responses = userResponse[Math.floor(Math.random() * userResponse.length)];
    password = password + responses;
  };

  return password;

};

// var generatePassword = function() {
//   var password = ""
//   var passwordLength = setPasswordLength();

  // for (let i = 0; i < passwordLength; i++) {
  //   var randomCharacterAlpha = alpha.charAt(randomNumber(0, alpha.length));
  //   var randomCharacterNumbers = numb.charAt(randomNumber(0,numb.length));
  //   password = password + (randomCharacterAlpha) + (randomCharacterNumbers);
  // }
  // return password
// }

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
