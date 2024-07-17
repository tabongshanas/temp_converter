"use strick"

const inputElement = document.getElementById("celsius-input");

function performConversions() {
    const celsiusInput = inputElement.value;

    const celsiusValue = Number(celsiusInput);

    const fahrenheitResult = (celsiusValue * 9 / 5) + 32;
    const kelvinResult = (celsiusValue + 273);

    const fahResultEl = document.getElementById("fahrenheit-result");
    fahResultEl.textContent = "Temperature in Fahrenheit: " + fahrenheitResult.toFixed(2);

    const kelvinResultEl = document.getElementById("kelvin-result");
    kelvinResultEl.textContent = "Temperature in Kelvin: " + kelvinResult.toFixed(2);
}