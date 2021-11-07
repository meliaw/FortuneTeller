// global variables
var heading;
var input;
var button;
var output;

var fortunes = ["Something you lost will turn up soon.", "Today is a good day to treat yourself.", "You need to finish the task you have been putting aside", "You are prone to fears and imaginary terrors.", "A new partnership will work out.", "Believe in yourself and your talent.", "You look nice today"];
var fonts = ["Creepster", "Fruktur", "Lemon", "UnifrakturMaguntia"];

// event that fires only when elements are loaded into memory
document.addEventListener("DOMContentLoaded", function() {
// load global varibales
  var heading = document.getElementById("title");
  var button = document.getElementById("execute");
  var output = document.getElementById("result");
  var input = document.getElementById("userInput");

// event listener for button click
  button.addEventListener("click", produceFortune);

});


// generate an output when button is clicked
function produceFortune(myString) {
  // console.log("Inputted String: ");

  var idx = Math.floor(Math.random() * 7);

  result.innerText = fortunes[idx];
  // result.style.color = reStyle();

  var updated = [];
  updated = reStyle();

  result.style.color = updated[0];
  result.style.fontFamily = updated[1];
  result.style.fontSize = updated[2];


}

function reStyle () {
  var styleChanges = [];

  var r = Math.random() * 200;
  var g = Math.random() * 190;
  var b = "200";

  var colorString = "rgb(" + r + "," + g + "," + b + ")";
  styleChanges[0] = colorString;

  var idx = Math.floor(Math.random() * 4);
  var font = fonts[idx];
  styleChanges[1] = font;

  var size = (Math.random() *  50) + 20;
  styleChanges[2] = size + "px";

  console.log(styleChanges);


  return styleChanges;
}
