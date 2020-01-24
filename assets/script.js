/************************************************************ DATA ************************************************************/
// Options object
let option = {
  hasUpper: false,
  hasLower: true,
  hasNumber: false,
  hasSpecial: false,
  minUpper: 0,
  minLower: 1,
  minNumber: 0,
  minSpecial: 0,
  length: 32,
}

// Password Array
// Will include all the characters to be used in the password
let passwordArray = [];

// Characters Array Literals
const upperChars = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialChars = [' ', '!', '\'', '\"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>','?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];






/************************************************************ BUTTON ************************************************************/
// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






/***************************************************** PASSWORD GENERATION *****************************************************/
// Write password to the #password input
function writePassword() {
  // Build the password array
  passwordArray = [];
  if(option.hasUpper) passwordArray = [...passwordArray, ...upperChars];
  if(option.hasLower) passwordArray = [...passwordArray, ...lowerChars];
  if(option.hasNumber) passwordArray = [...passwordArray, ...numberChars];
  if(option.hasSpecial) passwordArray = [...passwordArray, ...specialChars];
  
  // Generate password
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;
}

// Generate a password according to the user specification
function generatePassword() {
  let password = [];
  let output = "";
  let i = 0;
  let randomIndex = Math.floor(Math.random() * option.length);

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






/******************************************************** LAYOUT ********************************************************/
function updateLength(lengthInput) {
  option.length = lengthInput;
  document.getElementById("length-label").innerHTML = "Password Length: " + option.length;

  // When the user reduces the password length below minimum requirements
  // reset the minimum requirement
  if((option.minLower + option.minUpper + option.minNumber + option.minSpecial) > option.length) {
    if(option.hasLower) {
      option.minLower = 1;
      document.getElementById("min-lower-case-range").value = option.minLower;
      document.getElementById("min-lower-case-label").innerHTML = "Minimum number of Lower-case Letters in Your Password: " + option.minLower;
    }
    if(option.hasUpper) {
      option.minUpper = 1;
      document.getElementById("min-upper-case-range").value = option.minUpper;
      document.getElementById("min-upper-case-label").innerHTML = "Minimum number of Upper-case Letters in Your Password: " + option.minUpper;
    }
    if(option.hasNumber) {
      option.minNumber = 1;
      document.getElementById("min-number-range").value = option.minNumber;
      document.getElementById("min-number-label").innerHTML = "Minimum number of Number Characters in Your Password: " + option.minNumber;
    }
    if(option.hasSpecial) {
      option.minSpecial = 1;
      document.getElementById("min-special-range").value = option.minSpecial;
      document.getElementById("min-special-label").innerHTML = "Minimum number of Special Characters in Your Password: " + option.minSpecial;
    }
  }

  // adjust the other ranges
  if(option.hasLower) { 
    document.getElementById("min-lower-case-range").max = (option.length/2);
  }
  if(option.hasUpper) { 
    document.getElementById("min-upper-case-range").max = (option.length/2);
  }
  if(option.hasNumber) { 
    document.getElementById("min-number-range").max = (option.length/2);
  }
  if(option.hasSpecial) { 
    document.getElementById("min-special-range").max = (option.length/2);
  }

  // update password
  writePassword();
}

function lowercaseCheckbox() {
  // If ALL category is inactive, alert the user and leave the checkbox checked
  if(((!option.hasLower) === false) && (option.hasUpper === false) 
  && (option.hasNumber === false) && (option.hasSpecial === false)) {
    // undo the change
    document.getElementById("lower-case-checkbox").checked = true;

    alert("Must have at least one character category active!");
  }

  else {
    // update the option object
    option.hasLower = !option.hasLower;
  
    // Renew the password
    writePassword();

    // show/hide the range menu
    if(option.hasLower) {
      option.minLower = 1;
      document.getElementById("lower-case-range-container").className = "border bg-light p-1";
      document.getElementById("min-lower-case-range").max = (option.length/2);
      document.getElementById("min-lower-case-range").value = option.minLower;
      document.getElementById("min-lower-case-label").innerHTML = "Minimum number of Lower-case Letters in Your Password: " + option.minLower;
    }
    else {
      option.minLower = 0;
      document.getElementById("lower-case-range-container").className = "d-none";
    }
  }
}

function minLowercaseRange(minLowerChar) {
  // If SUM of minimum requirements exceed total length
  if((parseInt(minLowerChar) + option.minUpper + option.minNumber + option.minSpecial) > option.length) {
    // undo the change
    document.getElementById("min-lower-case-range").value = option.minLower;
    
    // alert
    alert("Total minimum requirements exceeds password length");
  }
  else {
    // update the option object
    option.minLower = parseInt(minLowerChar);

    // renew password
    writePassword();

    // update the number in the label
    document.getElementById("min-lower-case-label").innerHTML = "Minimum number of Lower-case Letters in Your Password: " + option.minLower;
  }
}

function uppercaseCheckbox() {
  // If ALL category is inactive, alert the user and leave the checkbox checked
  if(((!option.hasUpper) === false) && (option.hasLower === false) 
  && (option.hasNumber === false) && (option.hasSpecial === false)) {
    // undo the change
    document.getElementById("upper-case-checkbox").checked = true;

    alert("Must have at least one character category active!");
  }

  else {
    // update the option object
    option.hasUpper = !option.hasUpper;
  
    // Renew the password
    writePassword();

    // show/hide the range menu
    if(option.hasUpper) {
      option.minUpper = 1;
      document.getElementById("upper-case-range-container").className = "border bg-light p-1";
      document.getElementById("min-upper-case-range").max = (option.length/2);
      document.getElementById("min-upper-case-range").value = option.minUpper;
      document.getElementById("min-upper-case-label").innerHTML = "Minimum number of Upper-case Letters in Your Password: " + option.minUpper;
    }
    else {
      option.minUpper = 0;
      document.getElementById("upper-case-range-container").className = "d-none";
    }
  }
}

function minUppercaseRange(minUpperChar) {
  // If SUM of minimum requirements exceed total length
  if((parseInt(minUpperChar) + option.minLower + option.minNumber + option.minSpecial) > option.length) {
    // undo the change
    document.getElementById("min-upper-case-range").value = option.minUpper;
    
    // alert
    alert("Total minimum requirements exceeds password length");
  }
  else {
    // update the option object
    option.minUpper = parseInt(minUpperChar);

    // renew password
    writePassword();

    // update the number in the label
    document.getElementById("min-upper-case-label").innerHTML = "Minimum number of Upper-case Letters in Your Password: " + option.minUpper;
  }
}

function numberCheckbox() {
  // If ALL category is inactive, alert the user and leave the checkbox checked
  if(((!option.hasNumber) === false) && (option.hasLower === false) 
  && (option.hasUpper === false) && (option.hasSpecial === false)) {
    // undo the change
    document.getElementById("number-checkbox").checked = true;

    alert("Must have at least one character category active!");
  }

  else {
    // update the option object
    option.hasNumber = !option.hasNumber;
  
    // Renew the password
    writePassword();

    // show/hide the range menu
    if(option.hasNumber) {
      option.minNumber = 1;
      document.getElementById("number-range-container").className = "border bg-light p-1";
      document.getElementById("min-number-range").max = (option.length/2);
      document.getElementById("min-number-range").value = option.minNumber;
      document.getElementById("min-number-label").innerHTML = "Minimum number of Number Characters in Your Password: " + option.minNumber;
    }
    else {
      option.minNumber = 0;
      document.getElementById("number-range-container").className = "d-none";
    }
  }
}

function minNumberRange(minNumberChar) {
  // If SUM of minimum requirements exceed total length
  if((parseInt(minNumberChar) + option.minLower + option.minUpper + option.minSpecial) > option.length) {
    // undo the change
    document.getElementById("min-number-range").value = option.minNumber;
    
    // alert
    alert("Total minimum requirements exceeds password length");
  }
  else {
    // update the option object
    option.minNumber = parseInt(minNumberChar);

    // renew password
    writePassword();

    // update the number in the label
    document.getElementById("min-number-label").innerHTML = "Minimum number of Number Characters in Your Password: " + option.minNumber;
  }
}

function specialCheckbox() {
  // If ALL category is inactive, alert the user and leave the checkbox checked
  if(((!option.hasSpecial) === false) && (option.hasLower === false) 
  && (option.hasUpper === false) && (option.hasNumber === false)) {
    // undo the change
    document.getElementById("special-checkbox").checked = true;

    alert("Must have at least one character category active!");
  }

  else {
    // update the option object
    option.hasSpecial = !option.hasSpecial;
  
    // Renew the password
    writePassword();

    // show/hide the range menu
    if(option.hasSpecial) {
      option.minSpecial = 1;
      document.getElementById("special-range-container").className = "border bg-light p-1";
      document.getElementById("min-special-range").max = (option.length/2);
      document.getElementById("min-special-range").value = option.minSpecial;
      document.getElementById("min-special-label").innerHTML = "Minimum number of Special Characters in Your Password: " + option.minSpecial;
    }
    else {
      option.minSpecial = 0;
      document.getElementById("special-range-container").className = "d-none";
    }
  }
}

function minSpecialRange(minSpecialChar) {
  // If SUM of minimum requirements exceed total length
  if((parseInt(minSpecialChar) + option.minLower + option.minUpper + option.minNumber) > option.length) {
    // undo the change
    document.getElementById("min-special-range").value = option.minSpecial;
    
    // alert
    alert("Total minimum requirements exceeds password length");
  }
  else {
    // update the option object
    option.minSpecial = parseInt(minSpecialChar);

    // renew password
    writePassword();

    // update the number in the label
    document.getElementById("min-special-label").innerHTML = "Minimum number of Special Characters in Your Password: " + option.minSpecial;
  }
}