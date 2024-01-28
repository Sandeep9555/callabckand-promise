function manipulateString(inputString) {
    const modifiedString = inputString.toUpperCase();

    function logString() {
        console.log(`The manipulated string is: ${modifiedString}`);
    }

    return logString;
}

// Example usage:
const logStringCallback = manipulateString("hello world");
logStringCallback(); // Output: The manipulated string is: HELLO WORLD
