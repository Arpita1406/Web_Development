function convertToCelsius() {
    const celsiusInput = document.getElementById("celsiusInput").value;
    const fahrenheitResult = document.getElementById("fahrenheitResult");

    if (!celsiusInput || isNaN(celsiusInput)) {
        fahrenheitResult.textContent = "Please enter a valid number.";
        return;
    }

    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitResult.textContent = `${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
}

function convertToFahrenheit() {
    const fahrenheitInput = document.getElementById("fahrenheitInput").value;
    const celsiusResult = document.getElementById("celsiusResult");

    if (!fahrenheitInput || isNaN(fahrenheitInput)) {
        celsiusResult.textContent = "Please enter a valid number.";
        return;
    }

    const fahrenheit = parseFloat(fahrenheitInput);
    const celsius = (fahrenheit - 32) * 5/9;
    celsiusResult.textContent = `${fahrenheit} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius.`;
}
