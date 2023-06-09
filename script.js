var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randomButtom = document.querySelector("#randomButton");

function setGradient() {
  body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    + ")"; 
// Display colors picked in h3 tag
    css.textContent = body.style.background + ";";
}

function generateRandomColors() {
  var colorInputs = document.querySelectorAll(".color-input");

  var color1 = generateRandomColor();
  var color2 = generateRandomColor();

  colorInputs[0].value = color1;
  colorInputs[1].value = color2;
  setGradient();
}

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButtom.addEventListener("click", generateRandomColors);
