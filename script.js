// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for Characters.
var numbers=['0','1','2','3','4','5','6','7','8','9'];
var uppercase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Function for minimum requirements
function questions() {
  var isvalid=false; do
{
var askLowercase=confirm("Do you want your password to have lowercase letters?");
var  askUppercase=confirm ("Do you want your password to have uppercase letters?");
var length= prompt("Chose password length between 8 and 128 characters");
var askNumbers=confirm("Do you want your password to have numbers?");
var responses={
  length:length,
  askNumbers:askNumbers,
  askLowercase:askLowercase,
  askUppercase:askUppercase,
  
}
if ((length<8))((length>128))
alert("Chose number between 8 and 128 please");
 if ((!askNumbers)&&(!askUppercase)&&(!askLowercase))
alert("Must chose at least one type.");
else
isvalid=true;

} while(!isvalid);
return responses;
}
function generatePassword()
  var passwordoptions= questions();
  var possiblecombo=[];
  var finalpassword="";

  if(passwordoptions.askLowercase) {
    for(var i of lowercase)
    possiblecombo.push(i);
  
  }
  if(passwordoptions.askNumbers) {
    for(var i of askNumbers)
    possiblecombo.push(i);
  }
  {
    if(passwordoptions.askUppercase)
    for (var i of uppercase)
    possiblecombo.push(i);
  }
for(var i = 0; i< passwordoptions.length; i++){
  finalpassword+=possiblecombo[Math.floor(Math.random()* possiblecombo.length)]
}
 { console.log(finalpassword);

  return finalpassword;
 }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
