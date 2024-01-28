function doubleArray(arr, callback) {
    const doubledArray = arr.map(callback);
    return doubledArray;
}

// Example usage:
const numbers = [1, 2, 3, 4];
const doubleCallback = (num) => num * 2;
const result = doubleArray(numbers, doubleCallback);
console.log(result); // Output: [2, 4, 6, 8]
