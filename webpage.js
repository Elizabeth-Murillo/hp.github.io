var x = 0;

function changeWords(){
  var newText = "This is the new text";
  var originalText = "original text";
  if (x % 2 == 0) {
  document.getElementById("old").innerHTML= newText;
  }
  else{
    if (x == 5){
      alert("Welcome");
    }
  document.getElementById("old").innerHTML = originalText;
  }
  x++;
}
var click = 0;
function changePic(){
  click ++;
  if (click % 2 == 0){
    document.getElementById("firstbook").src= "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg";
  }
  else{
    document.getElementById("firstbook").src = "hp2.jpg";
  }
}


var num = 2;
if (num > 0){
  alert("HELLO THERE");
}
