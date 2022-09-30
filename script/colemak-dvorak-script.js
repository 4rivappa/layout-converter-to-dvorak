function myfunction(){
  //console.log("entered the function");
  var strToBeConverted = document.getElementById('text').value;
  var qwerty = "-=qwertyuiop[]asdfghjkl;'zxcvbnm,./_+QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?";

  var colemak = "-=qwfpgjluy;[]arstdhneio'zxcvbkm,./_+QWFPGJLUY:{}ARSTDHNEIO\"ZXCVBKM<>?";

  var dvorak = "[]',.pyfgcrl/=aoeuidhtns-;qjkxbmwvz{}\"<>PYFGCRL?+AOEUIDHTNS_:QJKXBMWVZ";
  var convertedStr = "";
  var i=0;
  for(i=0; i<strToBeConverted.length; i++){
    if(colemak.indexOf(strToBeConverted.charAt(i))>-1){
      convertedStr += dvorak.charAt(colemak.indexOf(strToBeConverted.charAt(i)));
    }else{
      convertedStr += strToBeConverted.charAt(i);
    }
  }
  document.getElementById('equivalent').innerHTML = convertedStr;
}
