function generatePassword() {


  // Step 1: Get User Input
  // -> Ask for the length of the password
  var length = prompt("What is the length of the password?");

  // validation to check if length is within range
  if (length <= 7) {
    return('Password must be longer than 7 characters.')
  }

  if (length >= 129) {
    return('Password must be shorter than 129 characters.')
  }

  // -> Do they want lowercase? uppercase? numbers? special?
  var includeLowercase = confirm("Do you want to include lowercase?")
  var includeUppercase = confirm("Do you want to include uppercase?")
  var includeNum = confirm("Do you want to include numbers?")
  var includeSpecialChar = confirm("Do you want to include special characters?")

  // Step 2: Generate password
  // -> Based on criteria selected, create a collection of valid characters
  var upperCaseRange = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCaseRange = "abcdefghijklmnopqrstuvwxyz"
  var numRange = "0123456789"
  var specialCharRange = "!£#@"

  var selectedChars = "";

  if (includeLowercase == true) {
    selectedChars = selectedChars + lowerCaseRange;
  }

  if (includeUppercase == true) {
    selectedChars = selectedChars + upperCaseRange;
  }

  if (includeNum == true) {
    selectedChars = selectedChars + numRange;
  }

  if (includeSpecialChar == true) {
    selectedChars = selectedChars + specialCharRange;
  }

  var myPassword = ""

  for (i = 0; i < length; i++) {
    // -> Grab a random character from the created collection, as many times as the length provided
    var randomNum = Math.floor(Math.random() * selectedChars.length)
    var randomChar = selectedChars.charAt(randomNum)

    // -> Attach the random character to the myPassword
    myPassword = myPassword + randomChar
  }


  return myPassword;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
