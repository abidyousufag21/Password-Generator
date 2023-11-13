



var inputField = document.getElementById('password');
var digit = 12;


var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!@#$%^&*()_+}{|:?><|";


var allChar = upperCase + lowerCase + number + symbol;

function createPassword(){
    
 
    var password = "" ;
    // password += upperCase[Math.floor(Math.random()* upperCase.length)];
    // password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    // password += number[Math.floor(Math.random()* number.length)];
    // password += symbol[Math.floor(Math.random()* symbol.length)];

for(var i = 0; i < digit; i++){
    password += allChar[Math.floor(Math.random()* allChar.length)];
    
}
    inputField.value = password;    
}

function copyPassword(){
    inputField.select();
    document.execCommand("copy");
}



