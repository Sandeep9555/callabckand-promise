function createGreetingPromise(name) {
    return new Promise((resolve, reject) => {
        if (name) {
            resolve(`Hello, ${name}!`);
        } else {
            reject("Invalid input. Please provide a name.");
        }
    });
}

// Example usage:
const name = "Mithun";
const greetingPromise = createGreetingPromise(name);

greetingPromise
    .then(message => console.log(message)) // Output: Hello, Mithun!
    .catch(error => console.log(error));
