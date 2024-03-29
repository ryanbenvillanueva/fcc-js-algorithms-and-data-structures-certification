// Basic Algorithm Scripting: Convert Celsius to Fahrenheit
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsiusrepresenting a temperature in Celsius. Use the variable fahrenheitalready defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

// Don't worry too much about the function and return statements as they will be covered in future challenges. For now, only use operators that you have already learned.

function convertToF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

convertToF(30);