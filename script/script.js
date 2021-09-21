var genButton = document.getElementById("genPassword")
var genInput = document.getElementById("password")
var validNumbers = "1234567890"
var validUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var validLowerCase = "abcdefghijklmnopqrstuvwxyz"
var validCharacters = "!@#$%^&*()-="
function generatePassword(){
    console.log("Btn click")
    genInput.innerText = addPassword()
}
function addPassword(){
    
    var passwordLength = parseInt(prompt("Enter length of the password"))
    console.log(passwordLength)
     if (passwordLength < 8 || passwordLength > 128){
         console.log("Invalid Length")
         return "Invalid length...Please enter  length 8-128"
     }
    var userChoice = []
    var confirmNumbers = confirm("Do you like to have numbers? ")
    var confirmUpperCase = confirm("Do you like to have Uppercase letters? ")
    var confirmLowerCase = confirm("Do you like to have Lowercase letters? ")
    var confirmCharacters = confirm("Do you like to have Special Characters? ")
    if (!confirmNumbers && !confirmUpperCase && !confirmLowerCase && !confirmCharacters){
        return "please choose at least one option"
    }
    if (confirmCharacters){
        userChoice += validCharacters // userChoice = userChoice + validCharacters
    }
    if (confirmNumbers){
        userChoice += validNumbers
    }
    if (confirmUpperCase){
        userChoice += validUpperCase
    }
    if (confirmLowerCase){
        userChoice += validLowerCase
    }
    console.log(userChoice)
    var newPassword = ""
    for(let i=0;i<passwordLength;i++){
        var ind = Math.floor(Math.random() * userChoice.length)
        newPassword +=userChoice[ind]
    }
    console.log(newPassword)
    return newPassword
}
genButton.addEventListener("click",generatePassword)