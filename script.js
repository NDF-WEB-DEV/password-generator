// Global Variables
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var allCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","+","-","&&","||","!","(",")","{","}","[","]","^","~","*","?",":",];

function generatePassword() {
  //RegEx checks for letters in # of password
  var excludeCharsString = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","+","-","&&","||","!","(",")","{","}","[","]","^","~","*","?",":",];

  //Ask end-user to enter password lenght
  passwordLength = window.prompt("How many characters should the password contain?", "0");

        //If user enters a length less than 8
        if (passwordLength < 8) {
          for(var i = 0; i < 8; i++) {
            passwordLength = window.prompt("How many characters should the password contain?", "0");
            window.alert("Your password needs to be greater than 8 characters");
              //If end user enters a length greater than 128
              if (passwordLength > 128) {
                window.alert("Your password needs to be less than 128 characters");
              }
              else if (passwordLength.includes(excludeCharsString)); {
                window.alert("You must enter an integer!")
              }
          }
        }

  //Ask user for special characters?
  specialChars = window.confirm("Click the OK button if you want to include special characters.", true);
  //if specialChars is true, continue
  //else cancel, exit application

  //Ask end-user for lowercase?
  numChars = window.confirm("Click the OK button if you want to include numbers.", true);
  //if Chars is true, continue
  //else cancel, exit application

  //Ask end-user for lowercase?
  uppercase = window.confirm("Click the OK button if you want to include lowercase letters.", true);
  //if uppercase is true, continue
  //else cancel, exit application

  //Ask end-user for uppercase?
  lowercase = window.confirm("Click the OK button if you want to include uppercase letters.", true);
  //if lowercase is true, continue
  //else cancel, exit application

    //initialize the final password variable to use in the for loop
    var finalPassword = "";

    //for loop to generate random password using the password length + random generator method
    for (var i = 0; i <= passwordLength; i++) {
      //declared random integer var to store random result
      var randInt = Math.floor(Math.randon() * allCharacters.length);
      
      //adding value of random value to final password
      randInt = finalPassword ;
      return finalPassword;
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);