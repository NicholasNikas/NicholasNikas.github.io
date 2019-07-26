var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".randomColor");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", "
	+ color2.value 
	+ ")"
	css.textContent = body.style.background + ";";
}

function addRandomBackground(){
	body.style.background = "linear-gradient(to right, " 
	+ '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
	+ ", "
	+ '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
	+ ")"
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", addRandomBackground);