function ageInDays(person) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365;

    function logAgeInDays() {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }

    return logAgeInDays;
}

// Example usage:
const personInfo = { firstName: "John", lastName: "Doe", age: 25 };
const logAgeCallback = ageInDays(personInfo);
logAgeCallback(); // Output: The person's full name is John Doe and their age in days is 9125.
