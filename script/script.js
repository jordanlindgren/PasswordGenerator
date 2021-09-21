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

    var confirmNumbers = confirm("Do you like to have numbers? ")
}
genButton.addEventListener("click",generatePassword)