const inputDegree = document.querySelector(".input-degree");

const degreeType = document.getElementById("degree-type");

const convertType = document.getElementById("convert-type");

const convertBtn = document.querySelector(".convert-btn");

const displayResult = document.querySelector(".display-result");

const convertForm = document.querySelector(".convert-form");

const errorMsg = document.querySelector(".error");

window.addEventListener("load", () => {
	inputDegree.value = "";
	displayResult.innerHTML = "";
});

convertForm.addEventListener("submit", (e) => {
	e.preventDefault();
	setTimeout(() => {
		let num = inputDegree.valueAsNumber;
		errorMsg.innerHTML = "";
		displayResult.innerHTML = "";

		if (Number.isNaN(num)) {
			errorMsg.innerHTML = "please write a valid number!";
			return;
		}
		if (degreeType.value === convertType.value) {
			errorMsg.innerHTML = "please choose 2 different temperature units.";
			return;
		}
		if (degreeType.value === "celsius" && convertType.value === "fahrenheit") {
			celciusToFahrenheit(num);
		} else if (
			degreeType.value === "celsius" 
			// convertType.value === "kelvin"
		) {
			celciusTokelvin(num);
		} else if (
			degreeType.value === "fahrenheit" &&
			convertType.value === "celsius"
		) {
			FahrenheitToCelcius(num);
		} else if (
			degreeType.value === "fahrenheit" 
			// convertType.value === "kelvin"
		) {
			FahrenheitToKelvin(num);
		} else if (
			// degreeType.value === "kelvin" &&
			convertType.value === "celsius"
		) {
			kelvinToCelcius(num);
		} else if (
			// degreeType.value === "kelvin" &&
			convertType.value === "fahrenheit"
		) {
			KelvinToFahrenheit(num);
		}
	}, 450);
});