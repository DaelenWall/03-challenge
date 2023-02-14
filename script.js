
//button
var generateBtn = document.querySelector("#generate");

  generateBtn.addEventListener('click', writePassword )

//integer divider
var splitInteger = function(num, parts) {
  
  var val;
  var mod = num % parts;
  if(mod == 0){
    val = num/parts;
    retData = Array(parts).fill(val);
  } else {
    val = (num-mod)/parts;
    retData = Array(parts).fill(val);
    for(i=0;i<mod;i++){
      retData[i] = retData[i] + 1;
    }
    retData.reverse()
  }

  return retData;
}


//password shuffler
String.prototype.shuffle = function () {
  var a = this.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
}

//deducing variables
var generatePassword = function() {
  var incLow = 0;
  var incUpp = 0;
  var incNum = 0;
  var incSpe = 0;
  
//passwordLength
  var passwordLength = window.prompt("How long should the password be? Please enter a digit between '8' and '128'.");

  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert("you chose " + "'" + passwordLength + "'!")
    } else
    return (window.alert("Please restart and follow the prompt."));

//includeLowercase
  var includeLowercase = window.prompt("Include lowercase? Please type 'yes' or 'no'.");
  
  if (includeLowercase == 'yes') {
    window.alert("you chose " + "'" + includeLowercase + "'!");
    incLow = 1;
    } else if (includeLowercase == 'no') {
      window.alert("you chose " + "'" + includeLowercase + "'!")
      incLow = 0
    } else
    return (window.alert("Please restart and follow the prompt."));
 
//includeUppercase
  var includeUppercase = window.prompt("Include uppercase? Please type 'yes' or 'no'.");

  if (includeUppercase == 'yes') {
    window.alert("you chose " + "'" + includeUppercase + "'!");
    incUpp = 1
    } else if (includeUppercase == 'no') {
      window.alert("you chose " + "'" + includeUppercase + "'!")
      incUpp = 0
    } else
    return (window.alert("Please restart and follow the prompt."));

//includeNumbers
  var includeNumbers = window.prompt("Include numbers? Please type 'yes' or 'no'.");

  if (includeNumbers == 'yes') {
    window.alert("you chose " + "'" + includeNumbers + "'!");
    incNum = 1
    } else if (includeNumbers == 'no') {
      window.alert("you chose " + "'" + includeNumbers + "'!")
      incNum = 0
    } else
    return (window.alert("Please restart follow the prompt."));

//includeSpecial
  var includeSpecial = window.prompt("Include special characters? Please type 'yes' or 'no'." )

  if (includeSpecial == 'yes') {
    window.alert("you chose " + "'" + includeSpecial + "'!");
    incSpe = 1
    } else if (includeSpecial == 'no') {
      window.alert("you chose " + "'" + includeSpecial + "'!")
      incSpe = 0
    } else
    return (window.alert("Please restart and follow the prompt."));


// <------------password-length-and-inclusions------------>

  //lowerpwd = if lower give me password length of lower
  charset = "abcdefghijklmnopqrstuvwxyz",
  lowerPwd = "";
  if (incLow == 1) {
    for (var i = 0, n = charset.length; i < (passwordLength); ++i) {
      lowerPwd += charset.charAt(Math.floor(Math.random() * n));
    }
  }

  //upperpwd = if upper give me password length of upper
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  upperPwd = "";
  if (incUpp == 1) { 
    for (var i = 0, n = charset.length; i < (passwordLength); ++i) {
      upperPwd += charset.charAt(Math.floor(Math.random() * n));
    }
  }

  //numericpwd = if numeric give me password length of numeric
  charset = "0123456789",
  numericPwd = "";
  if (incNum == 1) {
    for (var i = 0, n = charset.length; i < (passwordLength); ++i) {
      numericPwd += charset.charAt(Math.floor(Math.random() * n));
    }
  }
  
  //specialpwd = if special give me password length of special
  charset = "!#$%&'()*+,-./:;<=>?@[/]^_`{|}~",
  specialPwd = "";
  if (incSpe == 1) {
    for (var i = 0, n = charset.length; i < (passwordLength); ++i) {
      specialPwd += charset.charAt(Math.floor(Math.random() * n));
    }
  }


//integer divider debugging
  incAll = incLow + incUpp + incNum + incSpe
  
  arr = splitInteger(passwordLength, incAll)
  
  var i = 0
  if (incLow==1) {
    incLow = arr[i]
    ++i    
  } else {
    incLow = 0
  }
  if (incUpp==1) {
    incUpp = arr[i]
    ++i
  } else[
    incUpp = 0
  ]
  if (incNum==1) {
    incNum = arr[i]
    ++i
  } else {
    incNum = 0
  }
  if (incSpe==1) {
    incSpe = arr[i]
  } else {
    incSpe = 0
  }

  lowerPwd = lowerPwd.substring(0,incLow)
  upperPwd = upperPwd.substring(0,incUpp)
  numericPwd = numericPwd.substring(0,incNum)
  specialPwd = specialPwd.substring(0,incSpe)
  
  password = (lowerPwd + upperPwd + numericPwd + specialPwd)

  password = password.shuffle();
  
//Password return
  return password

}
// 'Write password' function
function writePassword() {

  password = generatePassword();
  var passwordTxt = document.querySelector("#password");
  
  passwordTxt.value = password;


}




