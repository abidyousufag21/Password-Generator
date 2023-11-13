



var inputField = document.getElementById('password');
var digit = 12;


var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!@#$%^&*()_+}{|:?><|";


var allChar = upperCase + lowerCase + number + symbol;

function createPassword(){
    
 
    var password = "" ;
   

for(var i = 0; i < digit; i++){
    password += allChar[Math.floor(Math.random()* allChar.length)];
    
}
    inputField.value = password;    
}

function copyPassword(){
    inputField.select();
    document.execCommand("copy");
}



