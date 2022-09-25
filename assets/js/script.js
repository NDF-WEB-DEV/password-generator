// GLOBAL VARIABLES
var generateBtn = document.querySelector("#generate");  // variable that will display the result in the HTML file
var allCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","+","-","&&","||","!","(",")","{","}","[","]","^","~","*","?",":",];

//FUNCTION FOR CHARACTER CHOICES
function characterChoices() {
  var specialChars = ["+","-","&&","||","!","(",")","{","}","[","]","^","~","*","?",":"];

  //PASSWORD LENGTH
  var requestPassLength = parseInt(prompt("How many characters should the password contain?")); //Ask end-user to enter password length
  while ((requestPassLength <= 8) || (requestPassLength >= 128)) {      //while password length is less than or equal to 8 or greater or equal to 128
    alert("Your password needs to be between 9 and 127 characters");    //alert user of requirements to create password
    var requestPassLength = parseInt(prompt("How many characters should the password contain?"));   //keep asking for valid input - stay in loop until evaluates to TRUE
  }

  //SPECIAL CHARACTERS
  var specialCharsQuestion = confirm("Click the OK button if you want to include special characters.");   //Ask user if they want to include special characters
  if(specialCharsQuestion = true) {               //If true
    var specialChars = ["+","-","&&","||","!","(",")","{","}","[","]","^","~","*","?",":"];     //variable declared to store the special characters
    var beforeFinalPassword = [" "];      //variable declared + initialized to concatenate the special characters with 
    console.log("True");                  //testing if code is working
    var charCollector1 = specialChars.concat(beforeFinalPassword);     //special characters are added to the beforeFinalPassword variable;
    console.log(charCollector1);                                       //print confirmation of var value here
  }
  //NUMBERS
  var numCharsQuestion = confirm("Click the OK button if you want to include numbers."); //Ask end-user if they want to include numbers
  if (numCharsQuestion = true) {           //If true
    console.log("True");                  //testing if code is working
    var numChars = ["0","1","2","3","4","5","6","7","8","9"];  //variable declared to store numbers
    var charCollector2 = numChars.concat(charCollector1);      //numbers collection is added to the charCollector2 variable;
    console.log(charCollector2);                               //print confirmation of var value here
  }

  //UPPERCASE
  var uppercaseQuestion = confirm("Click the OK button if you want to include lowercase letters."); //Ask end-user if they want to include uppercase
  if(uppercaseQuestion = true) {          //If true
    console.log("True");                  //testing if code is working
    var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];  //variable declared to store UPPER CASE letters
    var charCollector3 = uppercase.concat(charCollector2);      //Uppercase collection added to charCollector3 variable
    console.log(charCollector3);                                //print confirmation of var value here
  }

  //LOWERCASE
  var lowercaseQuestion = confirm("Click the OK button if you want to include lowercase letters."); //Ask end-user if they want to include lowercase?
  if (lowercaseQuestion = true) {         //If true
    console.log("True");                  //testing if code is working
    var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //variable declared to store LOWER CASE letters
    var charCollector4 = lowercase.concat(charCollector3);      //Lowercase collection added to charCollector4 variable
    console.log(charCollector4);                                //print confirmation of var value here
  }
  return charCollector4;
}

//RANDOM GENERATOR FUNCTION FOR PASSWORD LENGTH
function generatePassword() {
  var finalPassword = "";  //initialize the final password variable
  var finalCharCollector = characterChoices();  //Final array selection from charCollector4 variable

  for(var i = 0; i <= passwordLength; i++) {    //for loop to go through the 
    var trimPassword = Math.floor(Math.random() * finalCharCollector.length);    //Random generator selecting random character within the lenght of the password
    return trimPassword;    //Return password
    console.log(trimPassword);   //print confirmation of var value here
  }
}

