// Options object
let option = {
  hasUpper: false,
  hasLower: true,
  hasNumber: false,
  hasSpecial: false,
  minUpper: 0,
  minLower: 0,
  minNumber: 0,
  minSpecial: 0,
  length: 8,
}

// Password Array
// Will include all the characters to be used in the password
let passwordArray = [];

// Characters Array Literals
const upperChars = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialChars = [' ', '!', '\'', '\"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>','?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Build the password array
  if(option.hasUpper) {
    passwordArray = [...passwordArray, ...upperChars];
  }
  if(option.hasLower) {
    passwordArray = [...passwordArray, ...lowerChars];
  }
  if(option.hasNumber) {
    passwordArray = [...passwordArray, ...numberChars];
  }
  if(option.hasSpecial) {
    passwordArray = [...passwordArray, ...specialChars];
  }

  // Generate password
  let password = generatePassword(passwordArray, option);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate a password according to the user specification
function generatePassword(passwordArray, option) {
  let password = [];
  let output = "";
  let randomIndex = Math.floor(Math.random() * option.length);
  let i = 0;

  // Create minimum number of UPPER case letters in the password array
  if(option.hasUpper) {
    for(i = 0; i < option.minUpper; i++) {
      // Search for an empty element in the password array
      while(password[randomIndex] !== undefined) {
        randomIndex = Math.floor(Math.random() * option.length);
      }
      
      // place the letter in the array
      password[randomIndex] = upperChars[Math.floor(Math.random() * upperChars.length)];
    }
  }

  // Create minimum number of LOWER case letters in the password array
  if(option.hasLower) {
    for(i = 0; i < option.minLower; i++) {
      // Search for an empty element in the password array
      while(password[randomIndex] !== undefined) {
        randomIndex = Math.floor(Math.random() * option.length);
      }
      
      // place the letter in the array
      password[randomIndex] = lowerChars[Math.floor(Math.random() * lowerChars.length)];
    }
  }

  // Create minimum number of NUMBERs in the password array
  if(option.hasNumber) {
    for(i = 0; i < option.minNumber; i++) {
      // Search for an empty element in the password array
      while(password[randomIndex] !== undefined) {
        randomIndex = Math.floor(Math.random() * option.length);
      }
      
      // place the letter in the array
      password[randomIndex] = numberChars[Math.floor(Math.random() * numberChars.length)];
    }
  }

  // Create minimum number of SPECIAL letters in the password array
  if(option.hasSpecial) {
    for(i = 0; i < option.minSpecial; i++) {
      // Search for an empty element in the password array
      while(password[randomIndex] !== undefined) {
        randomIndex = Math.floor(Math.random() * option.length);
      }
      
      // place the letter in the array
      password[randomIndex] = specialChars[Math.floor(Math.random() * specialChars.length)];
    }
  }

  // Fill the rest of the space with random characters from all arrays
  for(let pi = 0; pi < option.length; pi++) {
    if(password[pi] === undefined) {
      password[pi] = passwordArray[Math.floor(Math.random() * passwordArray.length)];
    }

    // add the letter to the output string
    output += password[pi];
  }

  return output;
}

// Random password digit generator
// input array should include all characters available for password generation
function passwordDigit(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
