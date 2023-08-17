var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".btn");
var previousBtn = document.querySelector(".previous");

const colorHistory = []; // Array to store the history of generated gradients
let currentIndex = 0; // Keep track of the current index in the colorHistory array

function setGradient(){
	const linearGradient = "linear-gradient(to right, "
	+ color1.value + ", "
	+ color2.value + ")";

	body.style.background = linearGradient;
	css.textContent = "background: " + linearGradient + ";"; // Update the displayed CSS gradient

	// if (randomGradient){
	// 	linearGradient = randomLinearGradient;
	// }

	localStorage.setItem("userGradient",linearGradient);
};

function randomColor(){
	const randomGenerator1 = (Math.floor(Math.random()*16777215).toString(16));
	const randomGenerator2 = (Math.floor(Math.random()*16777215).toString(16));
	color1.value = "#" + randomGenerator1;
	color2.value = "#" + randomGenerator2;
	randomLinearGradient = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	body.style.background = randomLinearGradient;
	console.log("manin bodystyle;", body.style.background)
	// console.log("random Gradient;", randomLinearGradient);
	css.textContent = body.style.background + ";";


	localStorage.setItem("randomGradient", randomLinearGradient);

	// // Store the random gradient in the colorHistory array
  colorHistory.push([color1.value, color2.value]);
	console.log("color history;", colorHistory)
  // // Increment the currentIndex to point to the last element in the colorHistory array
  currentIndex = colorHistory.length - 1;
	console.log("current index;", currentIndex)
}

function getPreviousColor() {
	console.log(getPreviousColor);
	if(currentIndex > 0){
		currentIndex--;	

		console.log("Before", currentIndex)
		// currentIndex--; // Move to the previous index
		const previousColor = colorHistory[currentIndex];
		console.log("After", currentIndex)
		randomLinearGradient = "linear-gradient(to right, " + previousColor[0] + ", " +previousColor[1] + ")";
		console.log("previous color", previousColor)
		body.style.background = randomLinearGradient;
		css.textContent = body.style.background + ";"; // Update the displayed CSS gradient
		localStorage.setItem("randomGradient", randomLinearGradient);
	}
	// body.style.background = "linear-gradient(to right, " + '#f4f4 + ", " +previousColor[1] + ")";
}


// // Get the previous color and log it
// const previousColor = getPreviousColor();
// console.log(previousColor);

function applyGradient(){
	const randomGradient = localStorage.getItem("randomGradient");
	const userGradient = localStorage.getItem("userGradient");

	if (userGradient){
		body.style.background = userGradient;
	}
	else if (randomGradient){
		body.style.background = randomGradient;
	}
};

window.onload = function (){
	currentIndex = 0;
	applyGradient();

	css.textContent = body.style.background + ";";
};


btn.addEventListener("click", randomColor);
// randomColor()

previousBtn.addEventListener("click", getPreviousColor);

// previousBtn.addEventListener("click", function() {
// 	console.log(previousBtn);
//   const previousColor = getPreviousColor();
//   if (previousColor) {
//     body.style.background = previousColor;
// 		applyGradient();
//   }
// });

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient); 